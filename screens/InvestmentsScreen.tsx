import { View, Text, ScrollView, ImageBackground } from 'react-native';
import React from 'react';
import { Props } from 'types/NavigationTypes';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import BackHeader from '@/components/BackHeader';
import { Badge, BadgeText } from '@/components/ui/badge';
import { Box } from '@/components/ui/box';
import { IC_Bitcoin, IC_Ethereum, IC_Tothor_Logo_Only_White } from '@/utils/constants/Icons';

interface BundleData {
  title: string;
  description: string;
  bestBundleTitle: string;
  bundleName: string;
  ytd: string;
  risk: string;
  additionalInfo: string;
  icons: React.ComponentType[];
}

const icons = [IC_Bitcoin, IC_Ethereum, IC_Tothor_Logo_Only_White];

const dummyBundleData: BundleData = {
  title: 'Make America Great Again',
  description: 'Invest in the future of America with our exclusive bundle.',
  bestBundleTitle: 'Top Performing Bundle',
  bundleName: 'Make America Great Again',
  ytd: '10% YTD',
  risk: 'Medium Risk',
  additionalInfo: `+ ${icons.length.toString()}`,
  icons: icons,
};

const InvestmentsScreen: React.FC<Props> = ({ navigation }) => {
  const [currentCategory, setCurrentCategory] = React.useState<string>('Available');
  const [currentInvestmentID, setCurrentInvestmentID] = React.useState<number | undefined>(undefined);

  const { appliedTheme } = useTheme();
  const bundleData = dummyBundleData;

  return (
    <Box className='h-full bg-white'>
      <ScrollView>
        <Box className={`bg-purple-500 h-[70%] p-4`}>
          <BackHeader title='investments' />
          <Box className='gap-4'>
            <Box className='p-4 justify-center gap-2 items-center'>
              <Text className={`text-white font-bold text-[36px] text-center`}>Bundles</Text>
              <Text className={`text-white text-[16px] text-center`}>Diversify your portfolio by investing in the most promising crypto themes</Text>
            </Box>

            <Box>
              <Text className={`text-white text-[24px] font-bold flex self-start text-center`}>Best Bundles</Text>
            </Box>

            <Box className='relative z-50 bottom-0 p-4 w-full h-60 rounded-3xl'>
              <ImageBackground source={require('@/utils/constants/America.png')} className='h-full w-full rounded-3xl' imageStyle={{ borderRadius: 20 }}>
                <Text className={`text-white text-[24px] font-bold flex items-center text-center p-4`}>{bundleData.bundleName}</Text>
                <Box className='absolute top-1/3 gap-4 flex-row p-2 ml-2'>
                  <Badge variant='solid' action='info' className='rounded-full'>
                    <BadgeText className='text-sm'>{bundleData.ytd}</BadgeText>
                  </Badge>
                  <Badge variant='solid' action='info' className='rounded-full'>
                    <BadgeText className='text-sm'>{bundleData.risk}</BadgeText>
                  </Badge>
                  <Text className={`text-white text-[18px] font-bold flex items-center text-center`}>{bundleData.additionalInfo}</Text>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false} className='overflow-x'>
                    {bundleData.icons.map((Icon, index) => (
                      <View key={index} style={{ width: 32, height: 32 }}>
                        <Icon />
                      </View>
                    ))}
                  </ScrollView>
                </Box>
              </ImageBackground>
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default InvestmentsScreen;
