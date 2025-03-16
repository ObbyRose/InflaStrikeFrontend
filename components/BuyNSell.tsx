import { useEffect, useState } from 'react';
import { Box } from './ui/box';
import { Text } from './ui/text';
import {
  Alert,
  Keyboard,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
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
import ButtonsTrain from './ButtonsTrain';

interface BuyNSellProps {
  currentCurrencyValue: string;
  currentCurrencySymbol: string;
  onClose: () => void;
}

export default function BuyNSell({
  currentCurrencyValue,
  currentCurrencySymbol,
  onClose,
}: BuyNSellProps) {
  const [buyOrSell, setBuyOrSell] = useState('Buy');
  const [transactionType, setTransactionType] = useState<string>('');
  const [USDTamount, setUSDTamount] = useState<string>('');
  const numericCurrencyValue = parseFloat(currentCurrencyValue);
  const newCurrencyAmount = USDTamount
    ? (parseFloat(USDTamount) / numericCurrencyValue).toFixed(6)
    : ''; // derived from the USDT amount state

  const { appliedTheme } = useTheme();

  const userCurrentCurrency = 24; //! need to be fetch from the user
  const userCurrentUSDT = 2000000; //! need to be fetch from the user

  function handleUSDTamountChange(value: string) {
    const limit =
      buyOrSell === 'Buy'
        ? userCurrentUSDT // Buying: Maximum USDT available
        : userCurrentCurrency * numericCurrencyValue; // Selling: Maximum current currency converted to USDT
    const alertMessage = `Invalid amount. Please enter a valid amount from 0 to ${limit.toFixed(2)}`;

    // if trying to go to minus - reset to 0
    if (value[0] === '-') {
      Alert.alert(alertMessage);
      setUSDTamount('');
      return;
    }

    value = value.replace(/[^\d.]/g, '').replace(/\.(?=.*\.)/g, '');

    if (value === '' || value === '0') {
      setUSDTamount('');
      return;
    }
    const numericValue = parseFloat(value);

    if (!isNaN(numericValue)) {
      if (numericValue <= limit) {
        setUSDTamount(value);
      } else {
        setUSDTamount(limit.toFixed(2).toString());
        Alert.alert(alertMessage);
      }
    } else {
      Alert.alert(alertMessage);
    }
  }

  function handleCurrentCurrencyAmountChange(value: string) {
    const limit =
      buyOrSell === 'Buy'
        ? userCurrentUSDT / numericCurrencyValue // Buying: Maximum USDT available
        : userCurrentCurrency; // Selling: Maximum BTC converted to USDT

    const alertMessage = `Invalid amount. Please enter a valid amount from 0 to ${limit}`;

    // if trying to go to minus - reset to 0
    if (value[0] === '-') {
      Alert.alert(alertMessage);
      setUSDTamount('');
      return;
    }
    value = value.replace(/[^\d.]/g, '').replace(/\.(?=.*\.)/g, ''); // remove all non numeric characters

    // if empty or 0 - reset to 0
    if (value === '' || value === '0') {
      setUSDTamount('');
      return;
    }

    const numericValue = parseFloat(value);

    if (!isNaN(numericValue)) {
      let calculatedUSDT = '';
      if (numericValue <= limit) {
        calculatedUSDT = (numericValue * numericCurrencyValue).toFixed(2); // Keeping 2 decimal places
      } else {
        calculatedUSDT = (limit * numericCurrencyValue).toFixed(2); // Keeping 2 decimal places
        Alert.alert(alertMessage);
      }
      //   console.log(`baba is : ${value}`);
      //   console.log('calculatedUSDT', calculatedUSDT);

      // } numericValue >= 0 && numericValue <= maxCurrencyPossibleForBuying) {
      // Convert currency back to USDT
      //   const calculatedUSDT = (numericValue * numericCurrencyValue).toFixed(2); // Keeping 2 decimal places

      setUSDTamount(calculatedUSDT);
    } else {
      Alert.alert(alertMessage);
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
    if (buyOrSell === 'buy') {
      Alert.alert(
        `congratulations! You have successfully bought ${newCurrencyAmount} ${currentCurrencySymbol}`
      );
    } else {
      Alert.alert(
        `congratulations! You have successfully sold ${newCurrencyAmount} ${currentCurrencySymbol}`
      );
    }
    onClose();
  }

  function handleSetBuyOrSell(value: string) {
    setTransactionType('');
    setUSDTamount('');
    setBuyOrSell(value);
  }

  console.log(transactionType);

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Box className="h-full justify-around gap-4 p-2">
          {/* Buy and Sell buttons */}
          <Box className="h-fit w-full flex-row justify-around p-2">
            <TouchableOpacity
              className={`${buyOrSell === 'Buy' ? 'bg-green-500' : `bg-card-${appliedTheme}`} w-1/2 items-center rounded-l-xl p-4`}
              onPress={() => handleSetBuyOrSell('Buy')}>
              <Text className={buyOrSell === 'Buy' ? 'text-white' : `text-text-${appliedTheme}`}>
                Buy
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`${buyOrSell === 'Buy' ? `bg-card-${appliedTheme}` : 'bg-red-500'} w-1/2 items-center rounded-r-xl p-4`}
              onPress={() => handleSetBuyOrSell('Sell')}>
              <Text className={buyOrSell === 'Buy' ? `text-text-${appliedTheme}` : 'text-white'}>
                Sell
              </Text>
            </TouchableOpacity>
          </Box>

          {/* transaction type input choosing */}
          <Select
            selectedValue={transactionType ? transactionType : ''}
            onValueChange={(value) => setTransactionType(value)}
            className={`bg-card-${appliedTheme}`}>
            <SelectTrigger variant="outline" size="md">
              <SelectInput
                placeholder="Select transaction type"
                className={`text-text-${appliedTheme} `}
              />
              <SelectIcon className="mr-3" as={ChevronDownIcon} />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem label="Select transaction type" value="" isDisabled={true} />
                <SelectItem label="FOK" value="FOK" />
              </SelectContent>
            </SelectPortal>
          </Select>

          {/* USDT amount input  */}
          <Box>
            <Text className={` text-subText-${appliedTheme} mb-2`}>
              How much USDT you want to {buyOrSell === 'Buy' ? 'sell' : 'buy'}:
            </Text>
            <Box className={`flex-row items-center justify-around gap-2 rounded-lg  border`}>
              <TouchableOpacity
                onPress={() =>
                  handleUSDTamountChange((+(USDTamount ? USDTamount : 0) - 1).toString())
                }>
                <IC_Minus className="h-4 w-4" color={appliedTheme === 'dark' ? '#ffffff' : ''} />
              </TouchableOpacity>
              <TextInput
                className={`text-text-${appliedTheme} `}
                value={USDTamount}
                keyboardType="numeric"
                placeholder="USDT"
                onChangeText={handleUSDTamountChange}
              />
              <TouchableOpacity
                onPress={() =>
                  handleUSDTamountChange((+(USDTamount ? USDTamount : 0) + 1).toString())
                }>
                <IC_Plus className="h-4 w-4" color={appliedTheme === 'dark' ? '#ffffff' : ''} />
              </TouchableOpacity>
            </Box>
          </Box>

          {/* current currency amount input  */}
          <Box className="">
            <Text className={` text-subText-${appliedTheme} mb-2`}>
              How much {currentCurrencySymbol} you want to {buyOrSell === 'Buy' ? 'buy' : 'sell'}:
            </Text>
            <Box className={`flex-row items-center justify-around gap-2  rounded-lg border`}>
              <TouchableOpacity
                onPress={() =>
                  handleCurrentCurrencyAmountChange(
                    (+(newCurrencyAmount ? newCurrencyAmount : 0) - 1).toString()
                  )
                }>
                <IC_Minus className="h-4 w-4" color={appliedTheme === 'dark' ? '#ffffff' : ''} />
              </TouchableOpacity>
              <TextInput
                className={`text-text-${appliedTheme} `}
                value={newCurrencyAmount}
                keyboardType="numeric"
                placeholder={currentCurrencySymbol}
                onChangeText={handleCurrentCurrencyAmountChange}
              />
              <TouchableOpacity
                onPress={() =>
                  handleCurrentCurrencyAmountChange(
                    (+(newCurrencyAmount ? newCurrencyAmount : 0) + 1).toString()
                  )
                }>
                <IC_Plus className="h-4 w-4" color={appliedTheme === 'dark' ? '#ffffff' : ''} />
              </TouchableOpacity>
            </Box>
          </Box>

          <TouchableOpacity
            className="items-center rounded-lg bg-green-500 p-2"
            onPress={handleBuying}>
            <Text className="text-white">{buyOrSell}</Text>
          </TouchableOpacity>
        </Box>
      </TouchableWithoutFeedback>
    </>
  );
}
