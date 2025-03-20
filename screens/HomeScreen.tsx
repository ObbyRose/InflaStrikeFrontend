import React from 'react';
import { Text, ScrollView, TouchableOpacity } from 'react-native';
import { Box } from '@/components/ui/box';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import { Divider } from '@/components/ui/divider';
import { useUserStore } from '@/context/userStore'; // Import the Zustand store
import {
  IC_BTCUSDT,
  IC_Bell_White,
  IC_Info,
  IC_Top_Up,
  IC_Transaction,
  IC_History,
  IC_Tothor,
  IC_Tothor_Logo_Only,
  IC_Tothor_Logo_Only_Bold,
  IC_Gold,
  IC_DOGEUSDT,
  IC_PieGraph,
} from '@/utils/constants/Icons';
import { Props } from '@/types/NavigationTypes';
import MyLinearGradient from '@/components/gradient/MyLinearGradient';
import OptionCard from '@/components/OptionCard';
import { FlashList } from '@shopify/flash-list';

type BundleItem = {
  id: string;
  icon: React.ReactNode;
  name: string;
  timeframe: string;
  performance: string;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { appliedTheme } = useTheme();
  const { user } = useUserStore();

  const getBundleData = () => {
    return [
      {
        id: '1',
        icon: <IC_BTCUSDT className="h-12 w-12" />,
        name: 'MAGA Bundle',
        timeframe: 'Past Month',
        performance: '+15%',
      },
      {
        id: '2',
        icon: appliedTheme === 'dark' ? (
          <IC_Tothor_Logo_Only_Bold className="h-12 w-12" />
        ) : (
          <IC_Tothor_Logo_Only className="h-12 w-12" />
        ),
        name: 'Tothor Bundle',
        timeframe: 'Past Month',
        performance: '+24%',
      },
      {
        id: '3',
        icon: <IC_Gold className="h-12 w-12" />,
        name: 'Earth Bundle',
        timeframe: 'Past Month',
        performance: '+35%',
      },
      {
        id: '4',
        icon: <IC_DOGEUSDT className="h-12 w-12" />,
        name: 'DOGE Bundle',
        timeframe: 'Past Month',
        performance: '+4%',
      },
    ] as BundleItem[];
  };

  return (
    <ScrollView>
      {/* Header Section */}
      <MyLinearGradient type="background" color={appliedTheme === 'dark' ? 'blue' : 'purple'}>
        <Box className=" h-[40%] p-4">
          <Box className="flex flex-row items-center justify-between">
            <IC_Tothor className="h-16 w-40" />
            <Box className="flex-row gap-4">
              <TouchableOpacity onPress={() => navigation.navigate('Portfolio')}>
                <IC_PieGraph color="#ffff" className="h-7 w-7" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                <IC_Bell_White className="h-7 w-7" />
              </TouchableOpacity>
            </Box>
          </Box>
          <Box className="flex flex-col gap-4 p-4">
            <Text className="text-[17px] font-medium text-white">Safe-to-spend</Text>
            <Box className="flex-row items-center gap-4">
              <Text className="text-4xl font-medium text-white">${user?.nlve || 0}</Text>
              <IC_Info className="h-6 w-6" />
            </Box>
            <Text className="text-[14px] text-white">Updated 2 mins ago</Text>
          </Box>

          <Box className=" h-full items-center">
            <Box className={`bg-card-${appliedTheme} z-10 w-full rounded-full p-2`}>
              <Box className={`flex flex-row justify-evenly`}>
                <Box className="flex-col items-center text-center">
                  <IC_Top_Up className="h-12 w-12" />
                  <Text className={`text-text-${appliedTheme} font-bold`}> Top up</Text>
                </Box>
                <Box className="p-2">
                  <Box
                    className={` border-s-[1px] border-divider-${appliedTheme} mx-2 h-full  justify-center`}
                  />
                </Box>
                <Box className="flex-col items-center text-center">
                  <IC_Transaction className="h-12 w-12" />
                  <Text className={`text-text-${appliedTheme} font-bold`}> Transfer </Text>
                </Box>
                <Box className="p-2">
                  <Box
                    className={` border-s-[1px] border-divider-${appliedTheme} mx-2 h-full  justify-center`}
                  />
                </Box>
                <Box className="flex-col items-center text-center">
                  <IC_History className="h-12 w-12" />
                  <Text className={`text-text-${appliedTheme} font-bold`}> History </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </MyLinearGradient>
      <MyLinearGradient type="background" color={appliedTheme === 'dark' ? 'dark' : 'light-blue'}>
        <Box className={`p-4 bg-background-${appliedTheme} h-full`}>
          {/* Recommended Bundles Section */}
          <Box>
            <Box className="mt-10 flex-row items-center justify-between">
              <Text className={`text-[22px] font-semibold text-text-${appliedTheme}`}>
                Recommended Bundles
              </Text>
            </Box>
            <Text className={`mb-4 mt-2 font-medium text-subText-${appliedTheme}`}>
              There are 4 recommended bundles
            </Text>
            <FlashList
                data={getBundleData()}
                renderItem={({ item }) =>
                  <OptionCard>
                    <Box className="gap-1">
                      {item.icon}
                      <Text className={`text-text-${appliedTheme} text-[17px] font-medium`}>
                        {item.name}
                      </Text>
                      <Text className={`text-subText-${appliedTheme} text-[14px] font-medium`}>
                        {item.timeframe}
                      </Text>
                      <Text className={`text-text-${appliedTheme} text-[17px] font-medium`}>
                        {item.performance}
                      </Text>
                    </Box>
                  </OptionCard>
                }
                estimatedItemSize={150}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <Box className="w-4" />}
              />
          </Box>
          <Divider className={`bg-divider-${appliedTheme} mt-4`} />
        </Box>
      </MyLinearGradient>
    </ScrollView>
  );
};

export default HomeScreen;
