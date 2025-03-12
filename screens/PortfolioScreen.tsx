import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import React, { useEffect, useState } from 'react';
import { PieChart } from 'react-native-svg-charts';
import { FlatList, Pressable, ScrollView, View } from 'react-native';
import { Button, ButtonText } from '@/components/ui/button';
import BackHeader from '@/components/BackHeader';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import { Props } from '@/types/NavigationTypes';
import CryptoMarketCard from '@/components/CryptoMarketCard';
import { IC_BTCUSDT, IC_Doge, IC_ETHUSDT, IC_Tothor_Logo_Only, IC_XRPUSDT } from '@/utils/constants/Icons';
import { Divider } from '@/components/ui/divider';
import { CryptoData, handleSQLiteSelect } from '@/utils/api/internal/sql/handleSQLite';
import { formatNumber } from '@/utils/functions/help';

interface PortfolioData {
  key: string;
  value: number;
  color: string;
}

const dummyPieData: PortfolioData[] = [
  { key: 'Available Money', value: 1000, color: 'red' },
  { key: 'Bitcoin', value: 500, color: 'blue' },
  { key: 'Ethereum', value: 200, color: 'green' },
  { key: 'XRP', value: 100, color: 'yellow' },
];

const dummyQuickBuy = [
  IC_BTCUSDT,
  IC_ETHUSDT,
  IC_XRPUSDT,
  IC_Doge,
  IC_Tothor_Logo_Only,
]


const PortfolioScreen = ({navigation}: Props) => {
  const { appliedTheme } = useTheme();
  const [selectedSlice, setSelectedSlice] = useState<PortfolioData | null>(null);
  const [historyData, setHistoryData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
      async function fetchData() {
          try {
              setLoading(true);

              const data = await handleSQLiteSelect(['BTCUSDT', 'ETHUSDT', 'XRPUSDT']);
              console.log("DATA", JSON.stringify(data, null, 2));
              setHistoryData(data);
          } catch (error) {
              console.error("Error fetching market data:", error);
          } finally {
              setLoading(false);
          }
      }

      fetchData();
  }, []);

  function handleSetSelectedSlice(prev: PortfolioData | null, item: PortfolioData) {
    if (!prev) {
      return item;
    }
    return prev.key === item.key ? null : item;
  }

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

  const pieData = dummyPieData.map((item) => {
    const currentColor = getAppropriateColor(item.key);
    return {
      value: item.value,
      svg: {
        fill: selectedSlice
          ? selectedSlice.key === item.key
            ? currentColor
            : 'grey'
          : currentColor,
        onPress: () => {
          setSelectedSlice((prev) => handleSetSelectedSlice(prev, item));
        },
        stroke: '#ffffff',
        strokeWidth: 1,
        scale: selectedSlice?.key === item.key ? 1.1 : 1,
      },
      key: item.key,
    };
  });

  const totalValue = dummyPieData.reduce((acc, item) => acc + item.value, 0);

  return (
    <ScrollView className={`flex-1 bg-background-${appliedTheme}`}>
      <Box className={`flex flex-1 px-4 py-6`}>
        <BackHeader title='Portfolio' colorScheme='themeBased'/>
        <Box className='gap-1 mt-2'>
          <Text className={`text-3xl font-bold text-text-${appliedTheme}`}>Spending & history</Text>
          <Text className={`text-subText-${appliedTheme}`}>Total value: {formatNumber(totalValue)}</Text>
        </Box>

        {/* Chart Container */}
        <Box className="items-center">
          <PieChart
            style={{ height: 225, width: 225 }}
            data={pieData}
            innerRadius="50%"
            outerRadius="90%"
            padAngle={0.01}
            >
              <View className="flex items-center justify-center">
                <View className="flex h-1/3 w-1/3 items-center justify-center ">
                  {selectedSlice ? (
                    <>
                      <Text className="text-center ">{selectedSlice.key}</Text>
                      <Text className="text-center ">{formatNumber(selectedSlice.value)}</Text>
                    </>
                  ) : (
                    <></>
                  )}
                </View>
              </View>
          </PieChart>
        </Box>

        {/* Chart Details */}
        <Box>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dummyPieData}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <View className="flex-grow-0 items-center p-2">
                <Button
                  variant="outline"
                  className={`border-none bg-background-${appliedTheme}`}
                  onPress={() => setSelectedSlice((prev) => handleSetSelectedSlice(prev, item))}>
                  <Box
                    className="h-[16px] w-[16px] rounded-full border border-black"
                    style={{ backgroundColor: getAppropriateColor(item.key) }}
                  />
                  <ButtonText className={`text-text-${appliedTheme}`}>{item.key}</ButtonText>
                </Button>
              </View>
            )}
          />
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

      </Box>
    </ScrollView>
  );
};

export default PortfolioScreen;