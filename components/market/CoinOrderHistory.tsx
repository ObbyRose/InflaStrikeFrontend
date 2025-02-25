import React, { useState } from 'react'
import { Box } from '../ui/box'
import { Button, ButtonText } from '../ui/button';
import { Text } from '../ui/text';
import { FlatList } from 'react-native';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import { Divider } from '../ui/divider';

const orderBookData = {
    bids: [
        { amount: "0.001672", price: "40,162.14" },
        { amount: "0.012783", price: "39,953.21" },
        { amount: "0.034619", price: "39,900.12" },
        { amount: "0.006621", price: "39,841.78" },
    ],
    asks: [
        { price: "40,166.82", amount: "0.006291" },
        { price: "39,962.74", amount: "0.015928" },
        { price: "39,928.36", amount: "0.013094" },
        { price: "39,887.52", amount: "0.012389" },
    ],
};

function CoinOrderHistory() {
    const { appliedTheme } = useTheme();
    const [selectedCategory, setSelectedCategory] = useState("Order Book");
    const categories = ["Order Book", "Trade History"];

    return (
    <Box className=" rounded-lg p-3 bg-white w-full">
        {/* Header Tabs */}
        <Box className={`relative flex-row pt-2 gap-4`}>
            {categories.map(category =>
                <Text key={category} onPress={() => setSelectedCategory(category)}
                className={`${category === selectedCategory ? 
                    "text-black font-semibold border-b-4 border-indigo-500 z-10" :
                    `text-gray-${appliedTheme}`
                    }`}>
                    {category}
                </Text>
            )}
            <Divider className='absolute bottom-[0.1px]'/>
        </Box>

        {/* Order Book Data */}
        <Box className="pt-3 max-h-48">
            {orderBookData.bids.map((item, index) => (
                <Box key={`bid-${index}`} className="flex-row justify-between py-1">
                    <Text className="text-gray-500">{item.amount}</Text>
                    <Text className="text-green-500">{item.price}</Text>
                    <Text className="text-red-500">{orderBookData.asks[index]?.price}</Text>
                    <Text className="text-gray-500">{orderBookData.asks[index]?.amount}</Text>
                </Box>
            ))}
        </Box>

        {/* Buy & Sell Buttons */}
        <Box className="flex-row mt-3 gap-3">
        <Button className="bg-green-500 px-6 py-3 rounded-full flex-1 h-fit">
            <ButtonText className="text-white font-semibold">Buy</ButtonText>
        </Button>
        <Button className="bg-red-500 px-6 py-3 rounded-full flex-1 h-fit">
            <ButtonText className="text-white font-semibold">Sell</ButtonText>
        </Button>
        </Box>
    </Box>
    );
}

export default CoinOrderHistory;