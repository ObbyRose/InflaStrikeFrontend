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
    gradientCenterColor: '#FFFFFF',
    symbol: 'BTCUSDT',
    amount: 3000,
    focused: true,
  },
  {
    value: 40,
    color: '#7D8198',
    gradientCenterColor: '#FFFFFF',
    symbol: 'ETHUSDT',
    amount: 2500,
  },
  {
    value: 16,
    color: '#FFB800',
    gradientCenterColor: '#FFFFFF',
    symbol: 'BNBUSDT',
    amount: 1200,
  },
  {
    value: 3,
    color: '#1C9ABB',
    gradientCenterColor: '#FFFFFF',
    symbol: 'XRPUSDT',
    amount: 500,
  },
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
              setHistoryData(data);
          } catch (error) {
              console.error("Error fetching market data:", error);
          } finally {
              setLoading(false);
          }
      }

      fetchData();
  }, []);


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

  const renderDot = (color:string) => {
      return (
      <Box 
        className={`h-2.5 w-2.5 rounded-full mr-2.5`} 
        style={{
          backgroundColor: color
        }}
      />
      );
  };
    
  const renderLegendComponent = () => {
      return (
        <>
        <Box className="flex flex-row justify-center mb-2.5 flex-wrap gap-5">
          { pieData.map((item) =>
          <Box className='flex-row items-center'>
            {renderDot(item.color)}
            <Text className="text-black">{item.symbol}: {item.value}%</Text>
          </Box>
          )}

        </Box>
      </>
      );
    };


  return (
    <ScrollView className={`flex-1 bg-background-${appliedTheme}`}>
      <Box className={`flex flex-1 px-4 py-6`}>
        <BackHeader title='Portfolio' colorScheme='themeBased'/>
        <Box className='gap-1 mt-2'>
          <Text className={`text-3xl font-bold text-text-${appliedTheme}`}>Spending & history</Text>
          <Text className={`text-subText-${appliedTheme}`}>Total value: {formatNumber(0)}</Text>
        </Box>

        {/* Chart Container */}
        <Box className="flex-row justify-center">
          <PieChart
              data={pieData}
              donut
              // showTooltip
              // showText
              showValuesAsLabels
              textSize={20}
              // showGradient
              sectionAutoFocus
              focusOnPress
              radius={120}
              innerRadius={80}
              innerCircleColor={appliedTheme==="dark" ? '#161C2C' : '#FFFFFF'}
              extraRadius={9}
              centerLabelComponent={(idx: number) => {
                return (
                <Box className='justify-center items-center'>
                    <Text className={`font-bold text-2xl text-text-${appliedTheme}`}>{pieData[idx].symbol}</Text>
                    <Text className={`font-semibold text-2xl`}>{formatNumber(pieData[idx].amount)}</Text>
                    <Text className={`font-bold text-subTextGray-${appliedTheme} text-2xl`}>{pieData[idx].value + "%"}</Text>
                </Box>
                );
            }}
            />
        </Box>

        {/* Chart Details */}
        <Box>
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

      </Box>
    </ScrollView>
  );
};

export default PortfolioScreen;