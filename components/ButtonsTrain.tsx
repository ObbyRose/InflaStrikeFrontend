import React from 'react';
import { TouchableOpacity,  } from 'react-native';
import { Box } from './ui/box';
import { Text } from './ui/text';

interface ButtonsTrainProps {
    buttons: string[],
    activeButton: string,
    handlePress: (category: string) => void;
}

const ButtonsTrain = ({ buttons, activeButton, handlePress }: ButtonsTrainProps) => {
    return (
        <Box className="flex flex-row items-center justify-center h-[100px]">
            {buttons.map((category, idx) => (
                <TouchableOpacity
                key={category+idx}
                className={`px-4 py-2 border-black border-r-[1.5px] border-b-[1.5px] border-t-[1.5px]
                    ${activeButton === category ? 'bg-[#94baf0] text-white' : 'bg-white text-gray-700'} 
                    ${idx === 0 ? "rounded-l-lg border-l-[1.5px]" : ""}
                    ${idx === buttons.length - 1 ? "rounded-r-lg border-r-[1.5px] border-b-[1.5px] border-t-[1.5px]" : ""}
                    items-center justify-center`}
                onPress={() => handlePress(category)}
                activeOpacity={0.75}
                >
                <Text className={`font-medium ${activeButton === category ? 'text-white' : 'text-gray-700'}`}>
                    {category}
                </Text>
                </TouchableOpacity>
            ))}
        </Box>
    );
};

export default ButtonsTrain;
