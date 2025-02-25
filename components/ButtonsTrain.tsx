import React from 'react';
import { TouchableOpacity, Animated, Dimensions } from 'react-native';
import { Box } from './ui/box';
import { Text } from './ui/text';

interface ButtonsTrainProps {
    buttons: string[],
    activeButton: string,
    handlePress: (newCategory: string) => void;
}

const ButtonsTrain = ({ buttons, activeButton, handlePress }: ButtonsTrainProps) => {
    const screenWidth = Dimensions.get('window').width;
    const buttonWidth = screenWidth / buttons.length;
    
    return (
        <Box className="flex flex-row items-center justify-center relative h-12 border border-gray-300 rounded-lg overflow-hidden">
            {/* Background container */}
            <Box className="absolute top-0 left-0 right-0 bottom-0 flex flex-row">
                {buttons.map((category, idx) => {
                    const isActive = activeButton === category;
                    return (
                        <TouchableOpacity
                            key={category+idx}
                            style={{ width: buttonWidth }}
                            className={`h-full flex items-center justify-center
                                ${isActive ? 'bg-indigo-600 z-10 shadow-lg' : 'bg-gray-100'}`}
                            onPress={() => handlePress(category)}
                            activeOpacity={0.8}
                        >
                            <Text className={`font-medium ${isActive ? 'text-white' : 'text-gray-700'}`}>
                                {category}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </Box>
        </Box>
    );
};

export default ButtonsTrain;