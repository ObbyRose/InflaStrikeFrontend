import React, { useState } from 'react'
import { Box } from '../ui/box'
import { Input, InputField } from '../ui/input'
import { getIconByString, IC_Eye, IC_EyeOff, IconsMap } from '@/utils/constants/Icons';
import { Pressable } from 'react-native';

interface InputAuthProps {
    icon: string,
    placeholder?: string,
    isPass?: boolean;
    value: string;
    onChangeText: (text: string) => void;
}

function InputAuth({ icon, placeholder, isPass: isPass, value, onChangeText } : InputAuthProps) {
    const [showPass, setShowPass] = useState(false);
    const IconComponent = getIconByString(icon);

    const togglePasswordVisibility = () => {
        setShowPass(!showPass);
    };

    return (
        <Input className='relative rounded-xl h-14 mb-4'>
        {IconComponent && 
            <IconComponent className='absolute left-2 w-7 h-7'/>
        }
        <InputField
            className='pl-12 pr-12'
            placeholder={placeholder}
            secureTextEntry={isPass && !showPass}
            value={value}
            onChangeText={onChangeText}
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
    )
}

export default InputAuth