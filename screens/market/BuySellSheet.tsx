import React from 'react'
import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetItem, ActionsheetItemText } from '@/components/ui/actionsheet';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import { CryptoData } from '@/utils/api/internal/sql/handleSQLite';
import CardUpRounded from '@/components/CardUpRounded';
import { IC_BTCUSDT, IC_Options } from '@/utils/constants/Icons';

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
                    <Text className={`text-text-${appliedTheme} font-bold my-2 text-lg`}>
                        {coinData.symbol}
                    </Text>
                    <Text className={`${Number(coinData.change) > 0 ? "text-green-500" : "text-red-500"}`}>
                        {Number(coinData.change) > 0 ? '+':''} {coinData.change}%
                    </Text>
                </Box>
                {/* Icons */}
                <Box className='flex-row gap-4'>
                    <IC_Options className='w-5 h-5'/>
                    <IC_Options className='w-5 h-5'/>
                    <IC_Options className='w-5 h-5'/>
                </Box>
            </Box>
            

            <CardUpRounded className='mt-0 rounded-[40px]' variant='card'>
                
                <Box className="flex-1 py-4 px-6">
                    <Text className={`text-2xl font-bold text-text-${appliedTheme} mb-1`}>Address</Text>

                </Box>
            </CardUpRounded>
            

        </ActionsheetContent>
        
    </Actionsheet>
    )
}

export default BuySellSheet;