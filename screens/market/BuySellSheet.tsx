import React from 'react'
import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetItem, ActionsheetItemText } from '@/components/ui/actionsheet';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import { CryptoData } from '@/utils/api/internal/sql/handleSQLite';
import CardUpRounded from '@/components/CardUpRounded';
import { IC_BTCUSDT, IC_Options } from '@/utils/constants/Icons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatSymbol } from '@/utils/functions/help';

interface BuySellSheetProps {
    isOpen: boolean;
    onClose: () => void;
    coinData: CryptoData;
}

const BuySellSheet = ({ isOpen, onClose, coinData }: BuySellSheetProps) => {
    const { appliedTheme } = useTheme();

    return (
        <Actionsheet isOpen={isOpen} onClose={onClose} snapPoints={[90]}>
        <ActionsheetBackdrop />

        <ActionsheetContent className={`bg-background-${appliedTheme} px-0`}>
            <ActionsheetDragIndicatorWrapper>
                <ActionsheetDragIndicator />
            </ActionsheetDragIndicatorWrapper>

            {/* Title */}
            <Box className='flex-row w-full px-4 py-2 justify-between items-center'>
                <Box className='flex-row items-center gap-3'>
                    <IC_BTCUSDT className='w-7 h-7' />
                    <Text className={`text-text-${appliedTheme} font-bold my-2 text-xl`}>
                        {formatSymbol(coinData.symbol)}
                    </Text>
                    <Text className={`${Number(coinData.change) > 0 ? "text-green-500" : "text-red-500"}`}>
                        {Number(coinData.change) > 0 ? '+':''} {coinData.change}%
                    </Text>
                </Box>
                {/* Icons */}
                <Box className='flex-row gap-4 items-center'>
                    <Icon name="candlestick-chart" size={24} color="gray" />
                    <Icon name="attach-money" size={24} color="gray" />
                    <IC_Options className='w-5 h-5'/>
                </Box>
            </Box>
            

            <CardUpRounded className='mt-0 rounded-[40px]' variant='card'>
                
                <Box className="flex-1 p-1">
                    {/* Top Section */}
                    <Box className='flex-row h-1/2'>
                        <Box className='w-[40%] bg-gray-700'>
                            
                        </Box>
                        <Box className='w-[60%] bg-gray-800'>
                        
                        </Box>
                    </Box>

                </Box>
            </CardUpRounded>
            

        </ActionsheetContent>
        
    </Actionsheet>
    )
}

export default BuySellSheet;