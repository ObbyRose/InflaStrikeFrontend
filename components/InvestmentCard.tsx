import { Text, ImageBackground, ScrollView } from 'react-native';
import React from 'react';
// ui components
import { Badge, BadgeText } from '@/components/ui/badge';
import { Box } from '@/components/ui/box';

// type
import { type BundleData } from '@/screens/InvestmentsScreen';
// theme
import { useTheme } from '@/utils/Themes/ThemeProvider';
import { cn } from './ui/cn';
import { Heading } from './ui/heading';

type InvestmentCardProps = {
  bundleData: BundleData;
};

const InvestmentCard = ({ bundleData }: InvestmentCardProps) => {
  const { appliedTheme } = useTheme();
  return (
    <Box className={`relative bottom-0 min-h-[260px] items-center overflow-hidden rounded-3xl `}>
      <ImageBackground
        source={require('@assets/images/America.png')}
        className="absolute z-[-20]  h-full w-full object-cover"
      />
      <Box
        className={`absolute bottom-0 h-2/3 w-full  px-4 bg-card-${appliedTheme} flex flex-col justify-around pb-4 pt-2`}>
        {/* header */}
        <Heading className={`text-[24px] font-normal bg-card-${appliedTheme} mb-4 `}>
          {bundleData.bundleName}
        </Heading>
        <Box>
          <Box className="mb-2 flex-row items-center gap-2">
            <Badge variant="gray" className={`rounded-full`}>
              <BadgeText className="text-sm text-[#828F9B]">{bundleData.ytd}</BadgeText>
            </Badge>
            <Badge variant="gray" action="gray" className={`rounded-full`}>
              <BadgeText className="text-sm" action="gray">
                {bundleData.risk}
              </BadgeText>
            </Badge>
            <Badge variant="gray" action="gray" className={`rounded-full`}>
              <BadgeText className="text-sm">{bundleData.additionalInfo}</BadgeText>
            </Badge>
          </Box>

          <Box className="flex-row items-center gap-2 ">
            {bundleData.icons.map((Icon, index) => (
              <Box
                key={index}
                className={cn('rounded-full', index === 2 ? 'bg-blue-600 p-1' : '')}
                style={{ width: 32, height: 32 }}>
                {/* how to change the icon color */}
                <Icon />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InvestmentCard;
