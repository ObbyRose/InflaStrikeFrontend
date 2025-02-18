import React from 'react';
import { View, Text } from 'react-native';
import { Switch } from '@/components/ui/switch';
import { Box } from '@/components/ui/box';
import { Card } from '@/components/ui/card';
import { Image } from '../ui/image';

interface ComputedInterestsProps {
    units: number;
    valuation: number;
    percentage: number;
    lossPercentage?: number;
    isEnabled: boolean;
    onToggle: () => void;
}

const ComputedInterests: React.FC<ComputedInterestsProps> = ({
    units,
    valuation,
    percentage,
    lossPercentage,
    isEnabled,
    onToggle
    }) => {

    return (
    <Box className='w-full'>
        {/* Top Row */}
        <Box className="flex flex-row items-center justify-between mb-4">
            {/* toggle */}
            <Box className="flex flex-row items-center space-x-2">
                <Image className='h-10 w-10'
                    source="https://i.imgur.com/eP9oMgd.png" alt='hammer'/>
                <Switch isChecked={isEnabled} onChange={onToggle} />
            </Box>
            {/* percentage */}
            <Box>
                <Text className="text-green-500 text-xl font-semibold">
                    {percentage.toFixed(1)}%
                </Text>
            </Box>
            {/* lossPercentage */}
            <Box className="flex flex-row items-center">
                
                {lossPercentage && (
                    <Text className="text-red-500 text-sm ml-2">
                    ({lossPercentage.toFixed(1)}% if cancel)
                    </Text>
                )}
            </Box>
        </Box>

        {/* Bottom Row */}
        { isEnabled &&
        <Box className="flex flex-row justify-between mt-1">
            <Box className='flex-row items-center gap-2'>
                <Text className="text-gray-500 mb-1">Units:</Text>
                <Image className='h-5 w-5'
                    source="https://i.imgur.com/eP9oMgd.png" alt='hammer'/>
                <Text>{units.toLocaleString()}</Text>
            </Box>
            <Box className='flex-row items-center gap-2'>
                <Text className="text-gray-500 mb-1">Valuation:</Text>
                <Text className="text-gray-800 text-lg font-medium">
                    ${valuation.toLocaleString()}
                </Text>
            </Box>
        </Box>
        }
    </Box>
    );
};

export default ComputedInterests;