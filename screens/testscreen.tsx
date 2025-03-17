import React, { useEffect, useRef, useState } from "react";
import { Box } from "@/components/ui/box";
import { useTheme } from "@/utils/Themes/ThemeProvider";
import BackHeader from "@/components/BackHeader";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Text } from "@/components/ui/text";
import DateTimePicker from '@react-native-community/datetimepicker';

interface Trade {
    id: string;
    symbol: string;
    price: number;
    quantity: number;
    time: string;
    type: "Buy" | "Sell";
    timestamp: number;
}


function getDateRange(date: string | Date) {
    const start = new Date(date); // e.g., '2023-03-01'
    start.setHours(0, 0, 0, 0); // Set to midnight UTC
    const startOfDay = start.getTime(); // Start of the date (timestamp)

    const end = new Date(start); // Start with the same date
    end.setHours(23, 59, 59, 999); // Set to the last moment of the day
    const endOfDay = end.getTime(); // End of the date (timestamp)

    return { startOfDay, endOfDay };
}

const ExchangeScreen = () => {
    const { appliedTheme } = useTheme();
    const [trades, setTrades] = useState<Trade[]>([]);
    const [filterType, setFilterType] = useState<"All" | "Buy" | "Sell">("All");
    const [sortField, setSortField] = useState<"time" | "price" | "quantity">("time");
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
    const [streaming, setStreaming] = useState<boolean>(true);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedSymbol, setSelectedSymbol] = useState<string>("btcusdt");

    // Use useRef for the WebSocket
    const wsRef = useRef<WebSocket | null>(null);
    
    const startStreaming = () => {
        // Close any existing connection first
        if (wsRef.current && (wsRef.current.readyState === WebSocket.OPEN || wsRef.current.readyState === WebSocket.CONNECTING)) {
            wsRef.current.close();
        }
        
        // Create new WebSocket
        wsRef.current = new WebSocket(`wss://stream.binance.com:9443/ws/${selectedSymbol.toLowerCase()}@trade`);
        
        // Counter for unique IDs within this session
        let counter = 0;
        
        wsRef.current.onopen = () => {
            console.log("WebSocket connection opened");
        };
        
        wsRef.current.onmessage = (event) => {
            counter++;
            const data = JSON.parse(event.data);
            const newTrade: Trade = {
                // Create truly unique ID
                id: `${data.t}_${Date.now()}_${Math.random().toString(36).substring(2, 9)}_${counter}`,
                symbol: data.s,
                price: parseFloat(data.p),
                quantity: parseFloat(data.q),
                time: new Date(data.T).toLocaleTimeString(),
                type: data.m ? "Sell" : "Buy",
                timestamp: data.T,
            };

            setTrades((prevTrades) => [newTrade, ...prevTrades]);
        };
        
        wsRef.current.onerror = (error: any) => {
            console.error("WebSocket error:", error);
        };
        
        wsRef.current.onclose = () => {
            console.log("WebSocket connection closed");
        };
    };
    // Start or stop streaming based on the button
    const toggleStreaming = () => {
        if (streaming) {
            // If currently streaming, stop it
            if (wsRef.current) {
                wsRef.current.close();
                wsRef.current = null;
                console.log("Streaming stopped");
            }
        } else {
            // If not streaming, start it
            startStreaming();
            console.log("Streaming started");
        }
        setStreaming(!streaming);
    };

    // Handle Date Picker change
    const handleDateChange = (e: any, selectedDate: Date | undefined) => {
        setShowDatePicker(false);
        if (selectedDate) {
            setSelectedDate(selectedDate);
            
            // Check if selected date is today
            const today = new Date();
            const isToday = selectedDate.toDateString() === today.toDateString();
            
            if (isToday) {
                // For today, use live streaming
                if (!streaming) {
                    // Clear existing trades before starting stream
                    setTrades([]);
                    setStreaming(true);
                    startStreaming();
                }
            } else {
                // For other days fetch old data
                // Stop any current streaming
                if (wsRef.current) {
                    wsRef.current.close();
                    wsRef.current = null;
                }
                setStreaming(false);

                console.log("selectedDate", selectedDate);

                fetchTradesForDate("BTCUSDT", selectedDate);
            }
        }
    };

    const fetchTradesForDate = async (symbol: string, date: string | Date) => {
        try {
            const { startOfDay, endOfDay } = getDateRange(date);
            
            console.log(`Fetching trades for ${symbol} from ${new Date(startOfDay).toISOString()} to ${new Date(endOfDay).toISOString()}`);
            
            let allTrades: any[] = [];
            let hasMoreTrades = true;
            let fromId: number | null = null;
            
            // First request without fromId
            let url = `https://api.binance.com/api/v3/aggTrades?symbol=${symbol.toUpperCase()}&startTime=${startOfDay}&endTime=${endOfDay}&limit=1000`;
            
            console.log("Initial URL:", url);
            
            // Fetch the first batch
            const initialResponse = await fetch(url);
            
            // Check if the response is OK
            if (!initialResponse.ok) {
                const errorText = await initialResponse.text();
                console.error("API Error:", initialResponse.status, errorText);
                throw new Error(`API Error: ${errorText}`);
            }
            
            const initialTrades = await initialResponse.json();
            console.log(`Received ${initialTrades.length} trades in first batch`);
            
            // If API returns an error object
            if (initialTrades.code && initialTrades.msg) {
                console.error("API Error:", initialTrades.msg);
                throw new Error(`API Error: ${initialTrades.msg}`);
            }
            
            if (initialTrades.length === 0) {
                console.log("No trades found for this date");
                setTrades([]); // Set empty array if no trades
                return;
            }
            
            allTrades = [...initialTrades];
            
            // Only continue if we got a full batch (indicating there might be more)
            if (initialTrades.length === 1000) {
                // Get the last trade ID for pagination
                fromId = initialTrades[initialTrades.length - 1].a + 1;
                
                // Loop until we've fetched all trades
                while (hasMoreTrades && allTrades.length < 5000) { // Add an upper limit for safety
                    url = `https://api.binance.com/api/v3/aggTrades?symbol=${symbol.toUpperCase()}&startTime=${startOfDay}&endTime=${endOfDay}&limit=1000&fromId=${fromId}`;
                    
                    console.log("Pagination URL:", url);
                    
                    const response = await fetch(url);
                    
                    if (!response.ok) {
                        const errorText = await response.text();
                        console.error("API Error during pagination:", response.status, errorText);
                        break;
                    }
                    
                    const trades = await response.json();
                    
                    if (trades.code && trades.msg) {
                        console.error("API Error during pagination:", trades.msg);
                        break;
                    }
                    
                    console.log(`Received ${trades.length} more trades`);
                    
                    if (trades.length === 0) {
                        hasMoreTrades = false;
                    } else {
                        allTrades = [...allTrades, ...trades];
                        fromId = trades[trades.length - 1].a + 1;
                        
                        if (trades.length < 1000) {
                            hasMoreTrades = false;
                        }
                    }
                    
                    // Add a small delay to avoid rate limiting
                    await new Promise(resolve => setTimeout(resolve, 100));
                }
            }
            
            console.log(`Total trades fetched: ${allTrades.length}`);
            
            // Sort the trades based on quantity
            allTrades.sort((a, b) => parseFloat(b.q) - parseFloat(a.q));
            
            // Take the top trades
            const topTrades = allTrades.slice(0, 1000);
            
            let counter = 0;
            
            // Map trades to our format
            const newTrades = topTrades.map((data) => {
                counter++;
                return {
                    id: `historical_${data.a}_${counter}`,
                    symbol: symbol.toUpperCase(),
                    price: parseFloat(data.p),
                    quantity: parseFloat(data.q),
                    time: new Date(data.T).toLocaleTimeString(),
                    type: data.m ? "Sell" : "Buy",
                    timestamp: data.T,
                } as Trade;
            });
            
            console.log(`Prepared ${newTrades.length} trades for display`);
            
            // Update state with new trades
            setTrades(newTrades);
            
        } catch (error) {
            console.error("Error fetching trades:", error);
            // Show a fallback if the API fails - use mock data instead
            console.log("Using mock data instead");
        }
    };

    // Starts listening
    useEffect(() => {
        if (streaming) {
            startStreaming();
        }
    
        return () => {
            if (wsRef.current) {
                wsRef.current.close();
                wsRef.current = null;
            }
        };
    }, [selectedSymbol]);

    // Filter trades based on the selected date and type
    const filteredTrades = trades.filter(trade => 
        filterType === "All" || trade.type === filterType
    );

    // Sort trades based on selected field
    const sortedTrades = [...filteredTrades].sort((a, b) => {
        if (sortField === "time") {
            return sortDirection === "asc" ? a.timestamp - b.timestamp : b.timestamp - a.timestamp;
        }
        return sortDirection === "asc"
            ? (a as any)[sortField] - (b as any)[sortField]
            : (b as any)[sortField] - (a as any)[sortField];
    });

    return (
        <View className="flex-1 p-4 bg-gray-900">
            <Text className="text-lg font-bold text-white text-center mb-4">Live Trading Blotter</Text>

            {/* 🔹 Filter by Date (Date Picker) */}
            <View className="mb-2">
                <TouchableOpacity
                    className="px-3 py-1 rounded bg-blue-500"
                    onPress={() => setShowDatePicker(true)}
                >
                    <Text className="text-white">Select Date {selectedDate ? `(${selectedDate.toLocaleDateString()})` : ''}</Text>
                </TouchableOpacity>

                {showDatePicker && (
                    <DateTimePicker
                        value={selectedDate || new Date()}
                        mode="date"
                        display="default"
                        onChange={handleDateChange}
                    />
                )}
            </View>

            {/* FILTER BUTTONS */}
            <View className="flex-row justify-center space-x-2 mb-2">
                {["All", "Buy", "Sell"].map((type) => (
                    <TouchableOpacity
                        key={type}
                        className={`px-3 py-1 rounded ${filterType === type ? "bg-blue-500" : "bg-gray-700"}`}
                        onPress={() => setFilterType(type as "All" | "Buy" | "Sell")}
                    >
                        <Text className="text-white">{type}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* SORTING BUTTONS */}
            <View className="flex-row justify-center space-x-2 mb-4">
                {["time", "price", "quantity"].map((field) => (
                    <TouchableOpacity
                        key={field}
                        className={`px-3 py-1 rounded ${sortField === field ? "bg-green-500" : "bg-gray-700"}`}
                        onPress={() => {
                            setSortField(field as "time" | "price" | "quantity");
                            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
                        }}
                    >
                        <Text className="text-white">{field.toUpperCase()}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Toggle WebSocket Streaming */}
            <TouchableOpacity
                className={`px-3 py-1 rounded ${streaming ? "bg-red-500" : "bg-green-500"} mb-4`}
                onPress={toggleStreaming}
                disabled={selectedDate && selectedDate.toDateString() !== new Date().toDateString() || false}
            >
                <Text className="text-white">{streaming ? "Pause Streaming" : "Resume Streaming"}</Text>
            </TouchableOpacity>

            {/* Status and count indicator */}
            <View className="mb-4 flex-row justify-between">
                <Text className="text-white">Status: {streaming ? "Live" : "Paused"}</Text>
                <Text className="text-white">Trades: {sortedTrades.length}</Text>
            </View>

            {/* 🔹 TRADES LIST */}
            <FlatList
                data={sortedTrades}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View className={`flex-row p-3 border-b border-gray-700 ${item.type === "Buy" ? "bg-green-900" : "bg-red-900"}`}>
                        <Text className="flex-1 text-white text-center">{item.symbol}</Text>
                        <Text className="flex-1 text-white text-center">{Number(item.price).toFixed(2)}</Text>
                        <Text className="flex-1 text-white text-center">{Number(item.quantity).toFixed(4)}</Text>
                        <Text className="flex-1 text-white text-center">{item.time}</Text>
                        <Text className={`flex-1 text-center font-bold ${item.type === "Buy" ? "text-green-400" : "text-red-400"}`}>
                            {item.type}
                        </Text>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <View className="py-10">
                        <Text className="text-gray-400 text-center">No trades found</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default ExchangeScreen;

/*
const [activeTab, setActiveTab] = useState("Limit");
    const [amount, setAmount] = useState("126.00");
    const [convertedAmount, setConvertedAmount] = useState("56.01");
    const [fromCurrency, setFromCurrency] = useState("Bitcoin");
    const [toCurrency, setToCurrency] = useState("Litecoin");
    const [fromSymbol, setFromSymbol] = useState("₿");
    const [toSymbol, setToSymbol] = useState("Ł");

    const swapCurrencies = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
        setFromSymbol(toSymbol);
        setToSymbol(fromSymbol);
        setAmount(convertedAmount);
        setConvertedAmount(amount);
    };

<Box className="flex-1">
                <Box className="flex-row w-full rounded-lg p-1">
                    <ButtonsTrain
                        buttons={['Market', 'Limit', 'Stop-Limit']}
                        activeButton={activeTab}
                        handlePress={setActiveTab}
                    />
                </Box>

                <Box className="mt-4 bg-gray-100 rounded-lg p-4 flex-row justify-between items-center w-full">
                    <TextInput
                        className="text-xl font-bold flex-1"
                        keyboardType="numeric"
                        value={amount}
                        onChangeText={setAmount}
                    />
                    <TouchableOpacity className="flex-row items-center">
                        <Box className="bg-red-100 p-2 rounded-full mr-2">
                            <Text className="text-red-500 font-bold">{fromSymbol}</Text>
                        </Box>
                        <Text className="text-lg font-bold">{fromCurrency}</Text>
                        <ChevronDown className="ml-1 text-gray-500" size={20} />
                    </TouchableOpacity>
                </Box>

                <TouchableOpacity
                    onPress={swapCurrencies}
                    className={`bg-button-${appliedTheme} p-3 rounded-full mt-4 self-center`}
                >
                    <IC_Swap className="text-white w-7 h-7" />
                </TouchableOpacity>

                <Box className="mt-4 bg-gray-100 rounded-lg p-4 flex-row justify-between items-center w-full">
                    <Text className="text-xl font-bold flex-1">{convertedAmount}</Text>
                    <TouchableOpacity className="flex-row items-center">
                        <Box className="bg-green-100 p-2 rounded-full mr-2">
                            <Text className="text-green-500 font-bold">{toSymbol}</Text>
                        </Box>
                        <Text className="text-lg font-bold">{toCurrency}</Text>
                        <ChevronDown className="ml-1 text-gray-500" size={20} />
                    </TouchableOpacity>
                </Box>

                <Box className="p-4 w-full">
                    <Button className={`bg-button-${appliedTheme} w-full rounded-lg mt-6`}>
                        <Text className="text-white text-lg font-bold">Exchange</Text>
                    </Button>
                </Box>
            </Box>

*/

