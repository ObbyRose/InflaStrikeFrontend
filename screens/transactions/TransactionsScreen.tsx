import { View, Text, TouchableOpacity, FlatList, RefreshControl, BackHandler } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { Props } from 'types/NavigationTypes'
import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'
import { Divider } from '@/components/ui/divider'
import NewDepositScreen from './NewDepositScreen'
import ButtonsTrain from '@/components/ButtonsTrain'
import OutlinedCard from '@/components/OutlinedCard'
import { useTheme } from '@/utils/Themes/ThemeProvider'

const dummyData = [
  {
    id: "txn_001",
    date: "01/01/2025",
    status: "PENDING",
    amount: "$3,000",
    account: "Account Person"
  },
  {
    id: "txn_002",
    date: "01/01/2025",
    status: "TRANSFERED",
    amount: "-$3,000",
    account: "Account Person"
  },
  {
    id: "txn_003",
    date: "01/01/2025",
    status: "RECEIVED",
    amount: "$3,000",
    account: "Account Person"
  },
  {
    id: "txn_004",
    date: "01/01/2025",
    status: "PENDING",
    amount: "$3,000",
    account: "Account Person"
  },
  {
    id: "txn_005",
    date: "01/01/2025",
    status: "TRANSFERED",
    amount: "-$3,000",
    account: "Account Person"
  },
  {
    id: "txn_006",
    date: "01/01/2025",
    status: "RECEIVED",
    amount: "$3,000",
    account: "Account Person"
  },
  {
    id: "txn_007",
    date: "01/01/2025",
    status: "RECEIVED",
    amount: "$3,000",
    account: "Account Person"
  },
  {
    id: "txn_008",
    date: "01/01/2025",
    status: "RECEIVED",
    amount: "$3,000",
    account: "Account Person"
  },
  {
    id: "txn_009",
    date: "01/01/2025",
    status: "RECEIVED",
    amount: "$3,000",
    account: "Account Person"
  }
];

const TransactionsScreen: React.FC<Props> = ({ navigation })=> {
  const [activeButton, setActiveButton] = useState('FIAT');
  const [data, setData] = useState(dummyData);
  const [refreshing, setRefreshing] = useState(false);
  const [isNewDeposit, setIsNewDeposit] = useState(false);
  const { appliedTheme } = useTheme();

  useEffect(() => {
    const backAction = () => {
      if(isNewDeposit)
        setIsNewDeposit(false);
      return true;
    };

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => backHandler.remove();
  }, [isNewDeposit]);

  const handlePress = (button: string) => {
    setActiveButton(button);
  };

  const getColorByStatus = (status: string) => {
    status = status.toLowerCase();
    if(status === "pending") return "text-[#f79d35]"
    else if(status === "received") return "text-[#30a976]"
    return "text-[#cc353a]"
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    
    setTimeout(() => {
      // random sort for dummy refreshing
      setData(prevData => [...prevData].sort(() => Math.random() - 0.5));
      setRefreshing(false);
    }, 1000);
  }, []);

  // New Deposit Screen
  if(isNewDeposit)
    return <NewDepositScreen setIsNewDeposit={setIsNewDeposit}/>

  console.log("appliedTheme", appliedTheme);
  // Transaction Screen
  return (
    <Box className={`h-full p-5 bg-background-${appliedTheme}`}>
      {/* Top Buttons */}
      <ButtonsTrain
        buttons={['FIAT', 'CRYPTO']} 
        activeButton={activeButton}
        handlePress={handlePress}
      />

      {/* Deposit Withdrawal Buttons */}
      <Box className='flex flex-row justify-between'>
        <Button variant='rounded' action='positive' onPress={() => setIsNewDeposit(true)}>
          <Text className='text-white'>+ Deposit</Text>
        </Button>
        <Button variant='rounded' action='negative'>
          <Text className='text-white'>- Withdrawal</Text>
        </Button>
      </Box>

      <Divider className='mt-4'/>
      {/* Transactions */}
      <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['#94baf0']} // Android
          tintColor="#94baf0" // iOS
        />
      }
      renderItem={
        ({ item }) =>
          <OutlinedCard className='my-1'>
            <Box className="flex flex-row justify-between items-center">
              <Text className="text-gray-500 text-left w-1/4 text-sm">{item.date}</Text>
              <Text className={`${getColorByStatus(item.status)} font-semibold text-left w-[30%] text-sm`}>
                {item.status}
              </Text>
              <Text className="text-left w-[20%] text-sm">{item.amount}</Text>
              <Text className="text-left w-1/4 text-sm">{item.account}</Text>
            </Box>
          </OutlinedCard>

          // <Box className="border-b border-gray-300 py-4 px-2">
          // <Box className="flex flex-row justify-between items-center">
          //   <Text className="text-gray-500 text-left w-1/4 text-sm">{item.date}</Text>
          //   <Text className={`${getColorByStatus(item.status)} font-semibold text-left w-[30%] text-sm`}>
          //     {item.status}
          //   </Text>
          //   <Text className="text-left w-[20%] text-sm">{item.amount}</Text>
          //   <Text className="text-left w-1/4 text-sm">{item.account}</Text>
          // </Box>
          // </Box>
      }
      
      showsVerticalScrollIndicator={false}
    />

    </Box>
  )
}

export default TransactionsScreen