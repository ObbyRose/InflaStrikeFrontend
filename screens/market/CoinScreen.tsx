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
import DepthChartComponent from '@/components/market/DepthChart';
import CoinInfo from '@/components/market/CoinInfo';
import MyLinearGradient from '@/components/gradient/MyLinearGradient';
import { CryptoData } from '@/utils/api/internal/sql/handleSQLite';
import BuySellSheet from './BuySellSheet';


type RootStackParamList = {
    CoinScreen: { coin: any };
};

type CoinScreenRouteProp = RouteProp<RootStackParamList, 'CoinScreen'>;

function CoinScreen() {
    const route = useRoute<CoinScreenRouteProp>();
    const coin = route.params?.coin as CryptoData;
    
    const { appliedTheme } = useTheme();
    const [ isSheetOpen, setIsSheetOpen ] = useState(false);
    
    const [category, setCategory] = useState("Info");

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
        <MyLinearGradient type='background' color={appliedTheme === 'dark' ? 'dark' : 'light-blue'} className='h-full'>

        <ScrollView
            className={`flex-1`}
            >
            <Box className='flex-1 p-1'>
                <Box className='p-3'>
                    <BackHeader title={coin.symbol} colorScheme='themeBased' />
                </Box>
                {/* Title */}
                <Box className='p-5 gap-6'>
                    <Box className='flex-row justify-between'>
                        <Box className='gap-3'>
                            <Text className={`text-subText-${appliedTheme}`}>{coin.symbol}</Text>
                            <Text className={`text-3xl font-extrabold text-text-${appliedTheme}`}>
                                {formatNumber(parseFloat(coin.price || ""), 2)}
                            </Text>
                        </Box>
                        <Box className='justify-end'>
                            <Text className={`${Number(coin.change) > 0 ? "text-green-500" : "text-red-500"}`}>
                                ({Number(coin.change) > 0 ? '+':''} {coin.change}%)
                            </Text>
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
                { category === "Depth" &&
                    <DepthChartComponent symbol={coin.symbol}/>
                }
                { category === "Info" &&
                    <CoinInfo symbol={coin.symbol}/>
                }
                <Divider />
                <Box className='p-2'> 
                    <CoinOrderHistory onPress={() => setIsSheetOpen(true)}/>
                </Box>
            </Box>
        </ScrollView>
    </MyLinearGradient>
    );

    try {
        return (
        <>
        <BuySellSheet 
            coinData={coin}
            isOpen={isSheetOpen} 
            onClose={() => setIsSheetOpen(false)}/>
        <CoinContent />
        </>
        );
    } catch (error) {
        console.log("Render error:", error);
        return <ErrorContext err="Something went wrong please try again later..." />
    }
}

export default CoinScreen;