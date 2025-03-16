import { useEffect, useState } from 'react';
import { Box } from './ui/box';
import { Text } from './ui/text';
import { Alert, TextInput, TouchableOpacity } from 'react-native';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectItem,
} from '@/components/ui/select';
import { ChevronDownIcon } from './ui/icon';
import { IC_Minus, IC_Plus } from '@/utils/constants/Icons';

interface BuyNSellProps {
  currentCurrencyValue: string;
  currentCurrencySymbol: string;
}

export default function BuyNSell({ currentCurrencyValue, currentCurrencySymbol }: BuyNSellProps) {
  const [isAtBuying, setIsAtBuying] = useState(true);
  const [transactionType, setTransactionType] = useState<string>('');
  const [USDTamount, setUSDTamount] = useState<string>('');
  const numericCurrencyValue = parseFloat(currentCurrencyValue);
  const newCurrencyAmount = USDTamount
    ? (parseFloat(USDTamount) / numericCurrencyValue).toFixed(6)
    : '0'; // derived from the USDT amount state

  const { appliedTheme } = useTheme();

  const userCurrentCurrency = 1000000; //! need to be fetch from the user
  const userCurrentUSDT = 2000000; //! need to be fetch from the user

  function handleUSDTamountChange(value: string) {
    if (value === '-1') {
      Alert.alert(`Invalid amount. Please enter a valid amount from 0 to ${userCurrentUSDT}`);
      return;
    }

    value = value.replace(/[^\d.]/g, '').replace(/\.(?=.*\.)/g, '');

    if (value === '' || value === '0') {
      setUSDTamount('');
      return;
    }
    const numericValue = parseFloat(value);

    if (!isNaN(numericValue) && numericValue <= userCurrentUSDT && numericValue >= 0) {
      setUSDTamount(value);
    } else {
      Alert.alert(`Invalid amount. Please enter a valid amount from 0 to ${userCurrentUSDT}`);
    }
  }

  function handleBuying() {
    if (transactionType === '') {
      Alert.alert('Please select a transaction type');
      return;
    }
    if (USDTamount === '' || USDTamount === '0') {
      Alert.alert('Please enter the amount');
      return;
    }
    Alert.alert(
      `congratulations! You have successfully bought ${newCurrencyAmount} ${currentCurrencySymbol}`
    );
  }

  return (
    <>
      <Box className="gap-4">
        {/* Buy and Sell buttons */}
        <Box className="h-fit w-full flex-row p-2">
          <TouchableOpacity
            className={`${isAtBuying ? 'bg-green-500' : `bg-card-${appliedTheme}`} p-2`}
            onPress={() => setIsAtBuying(true)}>
            <Text className={isAtBuying ? 'text-white' : `text-text-${appliedTheme}`}>Buy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`${isAtBuying ? `bg-card-${appliedTheme}` : 'bg-red-500'} p-2`}
            onPress={() => setIsAtBuying(false)}>
            <Text className={isAtBuying ? `text-text-${appliedTheme}` : 'text-white'}>Sell</Text>
          </TouchableOpacity>
        </Box>

        {/* transaction type input choosing */}
        <Select onValueChange={(value) => setTransactionType(value)}>
          <SelectTrigger variant="outline" size="md">
            <SelectInput placeholder="Select transaction type" />
            <SelectIcon className="mr-3" as={ChevronDownIcon} />
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <SelectItem label="FOK" value="FOK" />
            </SelectContent>
          </SelectPortal>
        </Select>

        <Box className="flex-row items-center gap-2">
          <TouchableOpacity onPress={() => handleUSDTamountChange((+USDTamount - 1).toString())}>
            <IC_Minus className="h-4 w-4" />
          </TouchableOpacity>
          <TextInput
            value={USDTamount}
            keyboardType="numeric"
            placeholder="Amount (USDT)"
            onChangeText={handleUSDTamountChange}
          />
          <TouchableOpacity onPress={() => handleUSDTamountChange((+USDTamount + 1).toString())}>
            <IC_Plus className="h-4 w-4" />
          </TouchableOpacity>
        </Box>

        <TouchableOpacity className="bg-green-500 p-2" onPress={handleBuying}>
          <Text>
            Buy {newCurrencyAmount}
            {currentCurrencySymbol}
          </Text>
        </TouchableOpacity>
      </Box>
    </>
  );
}
