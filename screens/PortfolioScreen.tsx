import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, ScrollView } from 'react-native';
import BackHeader from '@/components/BackHeader';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import { Props } from '@/types/NavigationTypes';
import CryptoMarketCard from '@/components/CryptoMarketCard';
import { IC_BTCUSDT, IC_Doge, IC_ETHUSDT, IC_Tothor_Logo_Only, IC_XRPUSDT } from '@/utils/constants/Icons';
import { Divider } from '@/components/ui/divider';
import { CryptoData, handleSQLiteSelect } from '@/utils/api/internal/sql/handleSQLite';
import { formatNumber } from '@/utils/functions/help';
import { PieChart } from 'react-native-gifted-charts';
import MyLinearGradient from '@/components/gradient/MyLinearGradient';
import CardUpRounded from '@/components/CardUpRounded';

interface PortfolioData {
  value: number;
  color: string;
  gradientCenterColor: string;
  symbol: string,
  amount: number,
  focused?: boolean;
}

const pieData: PortfolioData[] = [
  {
    value: 47,
    color: '#453ABD',
    gradientCenterColor: '#1A0DAB', // Deep blue with a rich contrast
    symbol: 'BTCUSDT',
    amount: 3000,
    focused: true,
  },
  {
    value: 40,
    color: '#7D8198',
    gradientCenterColor: '#2E2F38', // Dark charcoal for a bold metallic look
    symbol: 'ETHUSDT',
    amount: 2500,
  },
  {
    value: 16,
    color: '#FFB800',
    gradientCenterColor: '#FF4500', // Fiery orange to enhance the gold
    symbol: 'BNBUSDT',
    amount: 1200,
  },
  {
    value: 3,
    color: '#1C9ABB',
    gradientCenterColor: '#003366', // Deep ocean blue for sharp contrast
    symbol: 'XRPUSDT',
    amount: 500,
  },
];

const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'
];
function getAppropriateColor(currencyName: string) {
  const topCryptocurrencies = [
    { name: 'Available Money', color: 'purple' },
    { name: 'Bitcoin', symbol: 'BTC', color: '#f7931a' }, // Bitcoin Orange
    { name: 'Ethereum', symbol: 'ETH', color: '#3c3c3d' }, // Ethereum Gray
    { name: 'Tether', symbol: 'USDT', color: '#26a17b' }, // Tether Green
    { name: 'BNB', symbol: 'BNB', color: '#f3ba2f' }, // BNB Yellow
    { name: 'USD Coin', symbol: 'USDC', color: '#2775c9' }, // USD Coin Blue
    { name: 'XRP', symbol: 'XRP', color: '#006097' }, // Ripple Blue
    { name: 'Cardano', symbol: 'ADA', color: '#0033ad' }, // Cardano Blue
    { name: 'Solana', symbol: 'SOL', color: '#00ffa3' }, // Solana Green
    { name: 'Dogecoin', symbol: 'DOGE', color: '#c2a633' }, // Dogecoin Gold
    { name: 'Polkadot', symbol: 'DOT', color: '#e6007a' }, // Polkadot Pink
    { name: 'Shiba Inu', symbol: 'SHIB', color: '#fda32b' }, // Shiba Inu Orange
    { name: 'Litecoin', symbol: 'LTC', color: '#bfbbbb' }, // Litecoin Gray
    { name: 'Chainlink', symbol: 'LINK', color: '#2a5ada' }, // Chainlink Blue
    { name: 'Stellar', symbol: 'XLM', color: '#000000' }, // Stellar Black
    { name: 'USD Coin', symbol: 'USDC', color: '#2775c9' }, // USD Coin Blue
    { name: 'Avalanche', symbol: 'AVAX', color: '#e84142' }, // Avalanche Red
    { name: 'TRON', symbol: 'TRX', color: '#eb0029' }, // TRON Red
    { name: 'Uniswap', symbol: 'UNI', color: '#ff007a' }, // Uniswap Pink
    { name: 'Wrapped Bitcoin', symbol: 'WBTC', color: '#242d3d' }, // Wrapped Bitcoin Dark Blue
    { name: 'Dai', symbol: 'DAI', color: '#f4b731' }, // Dai Yellow
  ];
  const currency = topCryptocurrencies.find((crypto) => crypto.name === currencyName);
  return currency ? currency.color : 'grey';
}
const dummyQuickBuy = [
  IC_BTCUSDT,
  IC_ETHUSDT,
  IC_XRPUSDT,
  IC_Doge,
  IC_Tothor_Logo_Only,
]

const PortfolioScreen = ({navigation}: Props) => {
  const { appliedTheme } = useTheme();
  const [selectedSlice, setSelectedSlice] = useState(pieData[0].symbol);
  const [historyData, setHistoryData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedMonth, setSelectedMonth] = useState(months[0]);
  
  useEffect(() => {
      async function fetchData() {
          try {
              setLoading(true);

              const data = await handleSQLiteSelect(['BTCUSDT', 'ETHUSDT', 'XRPUSDT']);
              setHistoryData(data);
          } catch (error) {
              console.error("Error fetching market data:", error);
          } finally {
              setLoading(false);
          }
      }

      fetchData();
  }, []);


  const renderLegendComponent = () => {
    return (
      <FlatList
        data={pieData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, idx) => item.color + idx}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        renderItem={({ item }) => (
          <Pressable 
            className="flex-row items-center mr-5"
            onPress={() => setSelectedSlice(item.symbol)}
          >
            <Box
              className="h-2.5 w-2.5 rounded-full mr-2.5"
              style={{ backgroundColor: item.color }}
            />
            <Text className={`text-text-${appliedTheme}`}>{item.symbol}: {item.value}%</Text>
          </Pressable>
        )}
      />
    );
  };
  

  return (
    <ScrollView className={`flex-1 bg-background-${appliedTheme}`}>
      <MyLinearGradient type='background' color={appliedTheme === 'dark' ? 'blue' : 'purple'} className='h-[18%] p-4'>
        <BackHeader title='Portfolio' colorScheme='alwaysWhite'/>
        <Box className='mt-2'>
          <FlatList
          data={months}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          contentContainerStyle={{ paddingHorizontal: 20 }}
          renderItem={({ item }) => {
            const isSelected = item === selectedMonth;
            return (
              <Pressable onPress={() => setSelectedMonth(item)} style={{ marginHorizontal: 10 }}>
                <Text 
                style={{
                  fontSize: isSelected ? 22 : 17,
                  fontWeight: isSelected ? 'bold' : 'normal',
                  color: isSelected ? 'white' : '#a9afc2',
                }}>
                  {item}
                </Text>
              </Pressable>
            );
          }}
          />
      </Box>
      </MyLinearGradient>

      <CardUpRounded className={`flex flex-1 px-4 py-6`}>
        <Box className='gap-1 mt-2'>
          <Text className={`text-3xl font-bold text-text-${appliedTheme}`}>Expenses Details</Text>
          <Text className={`text-subText-${appliedTheme}`}>You've spent $289.23 more than last month</Text>
        </Box>

        {/* Chart Container */}
        <Box className="flex-row justify-center m-3">
          <PieChart
              data={pieData}
              donut
              // showTooltip
              // showText
              showValuesAsLabels
              textSize={20}
              showGradient
              sectionAutoFocus
              focusOnPress
              focusedPieIndex={pieData.findIndex((item) => item.symbol === selectedSlice)}
              radius={120}
              innerRadius={80}
              innerCircleColor={appliedTheme==="dark" ? '#161C2C' : '#FFFFFF'}
              extraRadius={9}
              centerLabelComponent={(idx: number) => {
                return (
                <Box className='justify-center items-center'>
                    <Text className={`font-bold text-2xl text-text-${appliedTheme}`}>{pieData[idx].symbol}</Text>
                    <Text className={`font-bold text-2xl text-subText-${appliedTheme}`}>{formatNumber(pieData[idx].amount)}</Text>
                    <Text className={`font-semibold text-subTextGray-${appliedTheme} text-2xl`}>{pieData[idx].value + "%"}</Text>
                </Box>
                );
            }}
            />
        </Box>

        {/* Chart Details */}
        <Box className='my-2'>
          {renderLegendComponent()}
        </Box>

        {/* Portfolio Value */}
        <Box className='gap-3 my-3'>
          <Box className='flex-row justify-between'>
            <Text className={`text-xl font-semibold text-text-${appliedTheme}`}>Portfolio Value</Text>
            <Text className={`text-subTextGray-${appliedTheme}`} onPress={() => navigation.navigate("MainApp", { screen: "Markets" })}>
                See All
            </Text>
          </Box>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dummyQuickBuy}
            keyExtractor={(item,idx) => String(idx)}
            renderItem={({ item: Icon }) => (
              <Pressable className="flex-grow-0 items-center p-4 mx-3 bg-gray-200 rounded-2xl">
                <Icon className='w-12 h-12'/>
              </Pressable>
            )}
          />
        </Box>

        {/* Transactions History */}
        <Box>
            <Box className="flex-row items-center justify-between mt-4">
                <Text className={`text-xl font-semibold text-text-${appliedTheme}`}>Transactions History</Text>
                <Text className="text-[#0A6CFF]" onPress={() => {}}>
                    See All
                </Text>
            </Box>

            {/* Transactions History */}
            {loading ? (
                  <Text>Loading...</Text>
              ) : (
                  historyData.map((crypto:CryptoData, index) => (
                      <React.Fragment key={crypto.symbol}>
                          <CryptoMarketCard {...crypto} />
                          {index < historyData.length - 1 && <Divider className={`bg-divider-${appliedTheme}`} />}
                      </React.Fragment>
                  ))
              )}
        </Box>

      </CardUpRounded>
    </ScrollView>
  );
};

export default PortfolioScreen;