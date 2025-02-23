import React, { useState } from 'react'
import { Box } from '../ui/box'
import { Input, InputField } from '../ui/input'
import { getIconByString, IC_Eye, IC_EyeOff, IconsMap } from '@/utils/constants/Icons';
import { Pressable } from 'react-native';
import { Text } from '../ui/text';

interface InputAuthProps {
    icon: string,
    placeholder?: string,
    isPass?: boolean;
    value: string;
    onChangeText: (text: string) => void;
    error: string;
}

function InputAuth({ icon, placeholder, isPass: isPass, value, onChangeText, error } : InputAuthProps) {
    const [showPass, setShowPass] = useState(false);
    const IconComponent = getIconByString(icon);

    const togglePasswordVisibility = () => {
        setShowPass(!showPass);
    };

    return (
    <Box>
        <Input 
            className={`relative rounded-xl h-14 mb-4`}
            isInvalid={!!error}
        >
            {IconComponent && <IconComponent className='absolute left-2 w-7 h-7'/>}
            <InputField
                className={`px-12`}
                placeholder={placeholder}
                secureTextEntry={isPass && !showPass}
                value={value}
                onChangeText={onChangeText}
                maxLength={undefined}
            />
            {isPass && (
                <Pressable 
                    onPress={togglePasswordVisibility}
                    className='absolute right-3'
                >
                    {showPass ? 
                        <IC_Eye className='w-7 h-7' /> :
                        <IC_EyeOff className='w-7 h-7' />
                    }
                </Pressable>
            )}
        </Input>
    {error && <Text className="text-red-500 text-sm ps-3 mb-1 -mt-1">{error}</Text>}
    </Box>
    )
}

export default InputAuth