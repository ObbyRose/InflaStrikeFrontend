import React from 'react';

import { ScrollView } from 'react-native';

// types
import { type Props } from 'types/NavigationTypes';

// theme
import { useTheme } from '@/utils/Themes/ThemeProvider';

//  components
import BackHeader from '@/components/BackHeader';
import MyLinearGradient from '@/components/gradient/MyLinearGradient';
import InvestmentCard from '@/components/InvestmentCard';

// ui components
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';

// icons
import { IC_BTCUSDT, IC_ETHUSDT, IC_Tothor_Logo_Only_Bold } from '@/utils/constants/Icons';

// i18
import { useTranslation } from 'react-i18next';

export type BundleData = {
  title: string;
  description: string;
  bestBundleTitle: string;
  bundleName: string;
  ytd: string;
  risk: string;
  additionalInfo: string;
  icons: React.ComponentType[];
};

const icons = [IC_BTCUSDT, IC_ETHUSDT, IC_Tothor_Logo_Only_Bold];

const InvestmentsScreen: React.FC<Props> = ({ navigation }) => {
  const { appliedTheme } = useTheme();
  const { t } = useTranslation();

  const bundleData: BundleData = {
    title: t('investments.bundleTitle'),
    description: t('investments.bundleDescription'),
    bestBundleTitle: t('investments.bestBundles'),
    bundleName: 'Make America Great Again!',
    ytd: t('investments.ytd'),
    risk: t('investments.risk'),
    additionalInfo: `+ ${icons.length.toString()}`,
    icons,
  };

  return (
    <MyLinearGradient
      type="background"
      color={appliedTheme === 'dark' ? 'dark' : 'light-blue'}
      className="h-full">
      <ScrollView>
        <MyLinearGradient
          type="background"
          color={appliedTheme === 'dark' ? 'blue' : 'purple'}
          className="h-[30vh] p-4">
          <BackHeader title={t('investments.header')} colorScheme="alwaysWhite" />

          <Box className="relative z-[50] items-center ">
            <Box className="items-center justify-center gap-2 p-4">
              <Text className="text-center text-[36px] font-bold text-white">
                {t('investments.bundlesTitle')}
              </Text>
              <Text className="text-center text-[16px] text-white">
                {t('investments.bundlesSubtitle')}
              </Text>
            </Box>
            <Text className={` w-auto text-center text-[24px] font-bold text-white`}>
              {bundleData.bestBundleTitle}
            </Text>
          </Box>
        </MyLinearGradient>
        <Box className=" mt-3 px-3">
          <InvestmentCard bundleData={bundleData} />
        </Box>
      </ScrollView>
    </MyLinearGradient>
  );
};

export default InvestmentsScreen;
