import { View, Text, TouchableOpacity, FlatList, RefreshControl } from 'react-native'
import React, { useCallback, useState } from 'react'
import { Props } from 'types/NavigationTypes'
import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'
import { Divider } from '@/components/ui/divider'

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
  const [activeButton, setActiveButton] = useState('fiat');
  const [data, setData] = useState(dummyData);
  const [refreshing, setRefreshing] = useState(false);

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


  return (
    <Box className='bg-white h-full p-5'>
      {/* Top Buttons */}
      <Box className='flex flex-row items-center justify-center h-[100px]'>
        { ['fiat', 'crypto'].map(category =>
          <TouchableOpacity
          className={`px-4 py-2 border-black 
            ${activeButton === category ? 'bg-[#94baf0] text-white' : 'bg-white text-gray-700'} 
            ${category === "fiat" ? "rounded-l-lg border-[1.5px]" : "rounded-r-lg border-r-[1.5px] border-b-[1.5px] border-t-[1.5px]"}
            items-center justify-center`}
          onPress={() => handlePress(category)}
          activeOpacity={0.75}
        >
          <Text className={`font-medium ${activeButton ===  category ? 'text-white' : 'text-gray-700'}`}>
            {category.toUpperCase()}
          </Text>
        </TouchableOpacity>
        )
        }
      </Box>

      {/* Deposit Withdrawal Buttons */}
      <Box className='flex flex-row justify-between'>
        <Button variant='rounded' className='bg-[#009d21]'>
          <Text className='text-white'>+ Deposit</Text>
        </Button>
        <Button variant='rounded' className='bg-[#c92f2d]'>
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
          <Box className="border-b border-gray-300 py-4 px-2">
            <Box className="flex flex-row justify-between items-center">
              <Text className="text-gray-500 text-left w-1/4 text-sm">{item.date}</Text>
              <Text className={`${getColorByStatus(item.status)} font-semibold text-left w-[30%] text-sm`}>
                {item.status}
              </Text>
              <Text className="text-left w-[20%] text-sm">{item.amount}</Text>
              <Text className="text-left w-1/4 text-sm">{item.account}</Text>
            </Box>
          </Box>
      }
      
      showsVerticalScrollIndicator={false}
    />

    </Box>
  )
}

export default TransactionsScreen