import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import React, { useEffect, useState, useRef, useCallback } from 'react'
import { CommonActions, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import BackHeader from '@/components/BackHeader';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import ButtonsTrain from '@/components/ButtonsTrain';
import { formatNumber } from '@/utils/functions/help';
import CandleChartComponent from '@/components/market/CandleChart';


type RootStackParamList = {
    CoinScreen: { coin: any };
};

type CoinScreenRouteProp = RouteProp<RootStackParamList, 'CoinScreen'>;

function CoinScreen() {
    // Store initial route params in ref to prevent loss during rerenders
    const route = useRoute<CoinScreenRouteProp>();
    const initialParams = useRef(route.params).current;
    const coin = initialParams?.coin;
    
    const navigation = useNavigation();
    const { appliedTheme } = useTheme();
    
    const [data, setData] = useState(null);
    const [category, setCategory] = useState("Price");

    const ErrorContext = ({ err } : {err : string}) => (
        <Box className="flex-1 items-center justify-center">
                <BackHeader 
                    title={coin.symbol} 
                    icons={["icon1","icon2"]}
                />
                <Text className="text-lg">{err}</Text>
        </Box>
    )

    // Safe early return with navigation
    if (!coin)
        return <ErrorContext err="Symbol Not Found" />

    const fetchHistoricalData = async (symbol: string) => {
        try {
            const response = await fetch(
                `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=1h&limit=24`
            );
            return await response.json();
        } catch (error) {
            console.error("Error fetching historical data:", error);
            return [];
        }
    };

    useEffect(() => {
        if (coin?.symbol) {
            fetchHistoricalData(coin.symbol)
                .then(data => setData(data))
                .catch(err => console.log("Error in useEffect:", err));
        }
    }, []); 

    const handleCategoryPress = useCallback((newCategory: string) => {
        setCategory(newCategory);
    }, []);

    const CoinContent = () => (
        <Box className='flex-1'>
            <BackHeader 
                title={coin.symbol} 
                icons={["icon1","icon2"]}
            />

            <Box className='flex-1 p-1'>
                {/* Title */}
                <Box className='p-5 flex-row justify-between'>
                    <Box className='gap-3'>
                        <Text className={`text-gray-${appliedTheme}`}>{coin.symbol}</Text>
                        <Text className={`text-3xl font-extrabold`}>
                            {formatNumber(parseFloat(coin.lastPrice), 2)}
                        </Text>
                    </Box>
                    <Box className='justify-end'>
                        <Text className='text-green-500 '>+980.67 (2.16%)</Text>
                    </Box>
                </Box>

                <ButtonsTrain
                    activeButton={category}
                    buttons={["Price", "Depth", "Info"]}
                    handlePress={handleCategoryPress}
                />

                { category === "Price" &&
                    <CandleChartComponent />
                }
            </Box>
        </Box>
    );

    try {
        return <CoinContent />;
    } catch (error) {
        console.log("Render error:", error);
        return <ErrorContext err="Something went wrong please try again later..." />
    }
}

export default CoinScreen;