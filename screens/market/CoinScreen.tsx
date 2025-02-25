import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import React, { useEffect, useState, useRef, useCallback } from 'react'
import { CommonActions, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import BackHeader from '@/components/BackHeader';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import ButtonsTrain from '@/components/ButtonsTrain';
import { formatNumber } from '@/utils/functions/help';
import CandleChartComponent from '@/components/market/CandleChart';
import { Divider } from '@/components/ui/divider';
import { ScrollView } from 'react-native';
import CoinOrderHistory from '@/components/market/CoinOrderHistory';


type RootStackParamList = {
    CoinScreen: { coin: any };
};

type CoinScreenRouteProp = RouteProp<RootStackParamList, 'CoinScreen'>;

function CoinScreen() {
    const route = useRoute<CoinScreenRouteProp>();
    const coin = route.params?.coin;
    console.log(coin.symbol)
    
    const navigation = useNavigation();
    const { appliedTheme } = useTheme();
    
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

    const handleCategoryPress = (newCategory: string) => {
        setCategory(newCategory);
    };
    

    const CoinContent = () => (
        <ScrollView
            nestedScrollEnabled={true} 
            className='flex-1 bg-white'
        >
            <BackHeader 
                title={coin.symbol} 
                icons={["icon1","icon2"]}
            />

            <Box className='flex-1 p-1'>
                {/* Title */}
                <Box className='p-5 gap-6'>
                    <Box className='flex-row justify-between'>
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
                </Box>

                { category === "Price" &&
                    <CandleChartComponent symbol={coin.symbol}/>
                }
                <Divider />
                <Box>
                    <CoinOrderHistory />
                </Box>
            </Box>
        </ScrollView>
    );

    try {
        return <CoinContent />;
    } catch (error) {
        console.log("Render error:", error);
        return <ErrorContext err="Something went wrong please try again later..." />
    }
}

export default CoinScreen;