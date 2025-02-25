import React from 'react';
import { TouchableOpacity, Dimensions } from 'react-native';
import { Box } from './ui/box';
import { Text } from './ui/text';

interface ButtonsTrainProps {
    buttons: string[],
    activeButton: string,
    handlePress: (newCategory: string) => void;
}

const ButtonsTrain = ({ buttons, activeButton, handlePress }: ButtonsTrainProps) => {
    const screenWidth = Dimensions.get('window').width - 20; // px-5
    const buttonWidth = screenWidth / buttons.length;
    
    return (
        <Box className="flex flex-row items-center justify-center relative h-12 border border-gray-300 rounded-lg overflow-hidden">
            {buttons.map((category, idx) => {
                const isActive = activeButton === category;
                return (
                    <TouchableOpacity
                        key={category+idx}
                        style={{ width: buttonWidth }}
                        className={`h-full flex justify-center 
                            ${isActive ? 'bg-indigo-600 z-10 rounded-lg' : 'bg-gray-100'}`}
                        onPress={() => handlePress(category)}
                        activeOpacity={0.8}
                    >
                        <Text className={`font-medium text-center ${isActive ? 'text-white' : 'text-black'}`}>
                            {category}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </Box>
    );
};

export default ButtonsTrain;