import React from 'react';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
} from '@/components/ui/actionsheet';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import { CryptoData } from '@/utils/api/internal/sql/handleSQLite';
import CardUpRounded from '@/components/CardUpRounded';
import { IC_BTCUSDT, IC_Options } from '@/utils/constants/Icons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatSymbol } from '@/utils/functions/help';
import BuySellOrderBook from '@/components/BuySellOrderBook';
import BuyNSell from '@/components/BuyNSell';

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
        <Box className="w-full flex-row items-center justify-between px-4 py-2">
          <Box className="flex-row items-center gap-3">
            <IC_BTCUSDT className="h-7 w-7" />
            <Text className={`text-text-${appliedTheme} my-2 text-xl font-bold`}>
              {formatSymbol(coinData.symbol)}
            </Text>
            <Text className={`${Number(coinData.change) > 0 ? 'text-green-500' : 'text-red-500'}`}>
              {Number(coinData.change) > 0 ? '+' : ''} {coinData.change}%
            </Text>
          </Box>
          {/* Icons */}
          <Box className="flex-row items-center gap-4">
            <Icon name="candlestick-chart" size={24} color="gray" />
            <Icon name="attach-money" size={24} color="gray" />
            <IC_Options className="h-5 w-5" />
          </Box>
        </Box>

        <CardUpRounded className="mt-0 rounded-2xl" variant="card">
          <Box className="flex-1">
            {/* Top Section */}
            <Box className="h-3/4 flex-row">
              <Box className="h-full w-[50%] rounded-l-lg bg-gray-700">
                <BuySellOrderBook />
              </Box>
              <Box className="w-[50%] rounded-r-lg bg-gray-800">
                <BuyNSell
                  currentCurrencySymbol={coinData.symbol}
                  currentCurrencyValue={coinData.price as string}
                  onClose={onClose}
                />
              </Box>
            </Box>
          </Box>
        </CardUpRounded>
      </ActionsheetContent>
    </Actionsheet>
  );
};

export default BuySellSheet;
