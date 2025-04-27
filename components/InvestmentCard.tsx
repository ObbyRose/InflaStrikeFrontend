import { Text, ImageBackground, ScrollView } from 'react-native';
import React from 'react';
// ui components
import { Badge, BadgeText } from '@/components/ui/badge';
import { Box } from '@/components/ui/box';

// type
import { type BundleData } from '@/screens/InvestmentsScreen';
// theme
import { useTheme } from '@/utils/Themes/ThemeProvider';

type InvestmentCardProps = {
  bundleData: BundleData;
};

const InvestmentCard = ({ bundleData }: InvestmentCardProps) => {
  const { appliedTheme } = useTheme();
  return (
    <Box className="relative bottom-0 z-[50] h-60 items-center overflow-hidden rounded-3xl ">
      <ImageBackground source={require('@assets/images/America.png')} className="h-full w-full ">
        <Text className="items-center p-4 text-center text-[24px] font-bold text-white">
          {bundleData.bundleName}
        </Text>
        <Box className="absolute top-1/3 ml-2 flex-row items-center gap-2 p-2">
          <Badge variant="solid" action="info" className={`rounded-full bg-card-${appliedTheme}`}>
            <BadgeText className="text-sm">{bundleData.ytd}</BadgeText>
          </Badge>
          <Badge variant="solid" action="info" className={`rounded-full bg-card-${appliedTheme}`}>
            <BadgeText className="text-sm">{bundleData.risk}</BadgeText>
          </Badge>

          <Text className="self-center text-[18px] font-bold text-white">
            {bundleData.additionalInfo}
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="overflow-x">
            {bundleData.icons.map((Icon, index) => (
              <Box key={index} style={{ width: 32, height: 32 }}>
                <Icon />
              </Box>
            ))}
          </ScrollView>
        </Box>
      </ImageBackground>
    </Box>
  );
};

export default InvestmentCard;
