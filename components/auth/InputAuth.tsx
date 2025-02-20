import React from 'react'
import { Box } from '../ui/box'
import { Input, InputField } from '../ui/input'
import { getIconByString, IconsMap } from '@/utils/constants/Icons';

interface InputAuthProps {
    icon: string,
    placeholder?: string,
    isPassword?: boolean;
}

function InputAuth({ icon, placeholder, isPassword } : InputAuthProps) {
    const IconComponent = getIconByString(icon);

    return (<>

    <Input className='relative'>
        {IconComponent && <IconComponent className='absolute left-2 w-5 h-5'/>}
            <InputField 
            className='pl-10'
            placeholder={placeholder}
            
            />
        </Input>
    </>
        
    )
}

export default InputAuth