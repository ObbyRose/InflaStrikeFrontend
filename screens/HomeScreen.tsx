import React, { useState, useEffect } from 'react';
import { Text, Alert, ActivityIndicator, FlatList } from 'react-native';
import { fetchBitcoinPrice, fetchBitcoinHistory } from '../utils/api/BinanceAPI';
import { Props } from 'types/NavigationTypes';
import { Box } from '@/components/ui/box';

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    const [bitcoinPrice, setBitcoinPrice] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [historyData, setHistoryData] = useState<{ time: string; price: number }[]>([]);

    const getBitcoinPrice = () => {
        setLoading(true);
        fetchBitcoinPrice()
            .then((response) => {
                if (response) setBitcoinPrice(response.price);
            })
            .catch((error) => {
                console.error('Error fetching Bitcoin price', error);
                Alert.alert('Error fetching Bitcoin price');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchBitcoinHistory().then(setHistoryData);
        getBitcoinPrice();
    }, []);

    return (
        <Box className="flex-1 justify-center items-center p-4 bg-gray-900">
            <Text className="text-2xl font-bold text-white">Bitcoin Live Price</Text>
            
            {loading ? (
                <ActivityIndicator size="large" color="#FFD700" className="my-4" />
            ) : (
                bitcoinPrice && Number(bitcoinPrice) !== 0 && (
                    <Text className="text-3xl font-semibold text-green-400 my-2">
                        {"$" + Number(bitcoinPrice).toLocaleString()}
                    </Text>
                )
            )}

            <Text className="text-lg font-bold text-gray-400 mt-4">Price History</Text>

            <FlatList
                data={historyData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Box className="flex-row justify-between w-full px-4 py-2 border-b border-gray-700">
                        <Text className="text-white">{item.time}</Text>
                        <Text className="text-yellow-400">${item.price.toLocaleString()}</Text>
                    </Box>
                )}
            />
        </Box>
    );
};

export default HomeScreen;
