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
import InputAuth from './auth/InputAuth';
import { symbol } from 'd3-shape';
import { CryptoData } from '@/utils/api/internal/sql/handleSQLite';
import { formatSymbol } from '@/utils/functions/help';
import { Button, ButtonText } from './ui/button';

interface BuyNSellProps {
  coinData: CryptoData;
  onClose: () => void;
}

export default function BuyNSell({
  coinData,
  onClose,
}: BuyNSellProps) {
  const [buyOrSell, setBuyOrSell] = useState('Buy');
  const [USDTamount, setUSDTamount] = useState<string>('');
  const numericCurrencyValue = parseFloat(coinData.price || "0");
  const newCurrencyAmount = USDTamount
    ? (parseFloat(USDTamount) / numericCurrencyValue).toFixed(6)
    : '';

  const { appliedTheme } = useTheme();

  const selectOptions = [
    "Select transaction type",
    "Market",
    "FOK",
  ]
  const [selectedType, setSelectedType] = useState(selectOptions[0]);

  const userCurrentCurrency = 24; //! need to be fetch from the user
  const userCurrentUSDT = 2000000; //! need to be fetch from the user
  

  function handleBuying() {
    if (selectedType === '') {
      Alert.alert('Please select a transaction type');
      return;
    }
    if (USDTamount === '' || USDTamount === '0') {
      Alert.alert('Please enter the amount');
      return;
    }
    if (buyOrSell === 'buy') {
      Alert.alert(
        `congratulations! You have successfully bought ${newCurrencyAmount} ${coinData.symbol}`
      );
    } else {
      Alert.alert(
        `congratulations! You have successfully sold ${newCurrencyAmount} ${coinData.symbol}`
      );
    }
    onClose();
  }

  function handleSetBuyOrSell(value: string) {
    setSelectedType('');
    setUSDTamount('');
    setBuyOrSell(value);
  }

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

  function handleUSDTIncrement() {
    const currentValue = parseFloat(USDTamount) || 0;
    const newValue = currentValue + 1;
    handleUSDTamountChange(newValue.toString());
  }

  // Function for USDT decrement
  function handleUSDTDecrement() {
    const currentValue = parseFloat(USDTamount) || 0;
    const newValue = Math.max(0, currentValue - 1);
    handleUSDTamountChange(newValue.toString());
  }

  function handleCurrencyIncrement() {
    const currentValue = parseFloat(newCurrencyAmount) || 0;
    const newValue = currentValue + 1;
    handleCurrentCurrencyAmountChange(newValue.toString());
  }

  function handleCurrencyDecrement() {
    const currentValue = parseFloat(newCurrencyAmount) || 0;
    const newValue = Math.max(0, currentValue - 1);
    handleCurrentCurrencyAmountChange(newValue.toString());
  }

  function handleCurrentCurrencyAmountChange(value: string) {
    const limit =
      buyOrSell === 'Buy'
        ? userCurrentUSDT / numericCurrencyValue
        : userCurrentCurrency;
  
    const alertMessage = `Invalid amount. Please enter a valid amount from 0 to ${limit}`;
  
    if (value === '') {
      setUSDTamount(''); // ✅ Allow empty input
      return;
    }
  
    value = value.replace(/[^\d.]/g, '').replace(/\.(?=.*\.)/g, ''); // Only numbers
  
    if (value[0] === '-') {
      Alert.alert(alertMessage);
      return;
    }
  
    const numericValue = parseFloat(value);
  
    if (!isNaN(numericValue)) {
      if (numericValue <= limit) {
        setUSDTamount((numericValue * numericCurrencyValue).toFixed(2));
      } else {
        setUSDTamount((limit * numericCurrencyValue).toFixed(2));
        Alert.alert(alertMessage);
      }
    }
  }
  
  

  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Box className="h-full p-2" >
          <Box className='gap-4'>
            {/* Buy and Sell buttons */}
            <Box className="h-[50px] w-full flex-row justify-around p-2">
              {['Buy', 'Sell'].map((type, index) => (
                <TouchableOpacity
                  key={type}
                  className={`${buyOrSell === type 
                    ? type === 'Buy' ? 'bg-green-500' : 'bg-red-500' 
                    : `bg-background-${appliedTheme}`} 
                    w-1/2 items-center justify-center ${index === 0 ? 'rounded-l-md' : 'rounded-r-md'}`}
                  onPress={() => handleSetBuyOrSell(type)}
                >
                  <Text className={buyOrSell === type ? 'text-white' : `text-text-${appliedTheme}`}>
                    {type}
                  </Text>
                </TouchableOpacity>
              ))}
            </Box>


            {/* transaction type input choosing */}
            <Select
              selectedValue={selectedType ? selectedType : ''}
              
              onValueChange={(value) => setSelectedType(value)}
              className={`bg-background-${appliedTheme}`}>
              <SelectTrigger variant="underlined" size="md" className='w-full justify-center px-2 h-fit'>
                <SelectInput
                  placeholder="Select transaction type"
                  className={`text-text-${appliedTheme}`}
                />
                <SelectIcon className="items-end" as={ChevronDownIcon} />
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop />
                <SelectContent className={`max-h-[400px] bg-card-${appliedTheme}`}>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  { selectOptions.map((option,idx) =>
                  <SelectItem
                    key={option}
                    label={option}
                    value={option}
                    isDisabled={idx === 0}
                    textStyle={{ className: `text-subTextGray-${appliedTheme}` }}
                    style= { { backgroundColor: "transparent"} }
                    />
                  )}
                </SelectContent>
              </SelectPortal>
            </Select>

            {/* Price Input  */}
            <InputAuth
              classNameInput={`bg-background-${appliedTheme} mb-0 h-[50px] rounded-md`}
              type="numeric-control"
              placeholder={formatSymbol(coinData.symbol).split("/")[1]}
              value={USDTamount}
              onChangeText={handleUSDTamountChange}
              onIncrement={handleUSDTIncrement}
              onDecrement={handleUSDTDecrement}
            />
            {/* Amount Input */}
            <InputAuth
              classNameInput={`bg-background-${appliedTheme} mb-0 h-[50px] rounded-md`}
              type="numeric-control"
              placeholder={formatSymbol(coinData.symbol)}
              value={newCurrencyAmount}
              onChangeText={() => {}}
              onIncrement={handleCurrencyIncrement}
              onDecrement={handleCurrencyDecrement}
              isReadOnly={true}
            />
          </Box>

          <Box className='gap-2 mt-4'>
            <Box className='flex-row justify-between'>
              <Text className={`text-inputPlaceholderText-${appliedTheme}`}>Avbl</Text>
              <Box className='flex-row gap-2 items-center'>
                <Text className={`text-inputPlaceholderText-${appliedTheme}`}>{formatSymbol(coinData.symbol).split("/")[1]}</Text>
                <Box className='bg-yellow-500 rounded-full p-1'>
                  <IC_Plus className='h-4 w-4' color='black'/>
                </Box>
              </Box>
            </Box>
            <Button
            className={`items-center rounded-lg p-4 h-fit ${buyOrSell === 'Buy' ? 'bg-green-500':'bg-red-500'}`}
            onPress={handleBuying}
            >
              <ButtonText className="text-white">{buyOrSell}</ButtonText>
            </Button>
          </Box>
        </Box>
      </TouchableWithoutFeedback>
  );
}
