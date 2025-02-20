import InputAuth from '@/components/auth/InputAuth'
import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import { Props } from '@/types/NavigationTypes'
import React from 'react'


const Login: React.FC<Props> = ({ navigation }) => {


    return (
    <Box className='h-full p-10'>
        <Box className='mt-10 gap-2'>
            <Text className='text-4xl text-black font-semibold'>Welcome</Text>
            <Text className='text-xl'>Sign in to your account</Text>
        </Box>
        <Box className='mt-10'>
        <InputAuth icon="IC_Email" />


        </Box>
    </Box>
    )
}

export default Login