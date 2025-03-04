import React, { useEffect, useState } from 'react'
import { Box } from '../ui/box'
import { Text } from '../ui/text'
import { Button, ButtonSpinner, ButtonText } from '../ui/button'
import { SignUpScreensProps } from '@/types/NavigationTypes'
import { useTheme } from '@/utils/Themes/ThemeProvider'
import MyLinearGradient from '../gradient/MyLinearGradient'
import AddressSearch from './AddressSearchSheet'

interface SignupPersonalInformationProps extends SignUpScreensProps {
    setHeaderStep: React.Dispatch<React.SetStateAction<number | null>>;
}

function SignupAddress({ handleScreenChange, setHeaderStep }: SignupPersonalInformationProps) {
    const { appliedTheme } = useTheme();
    const [isLoading, setIsLoading] = useState(false);
    const [ address, setAddress] = useState({});
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const isActive = !!address;

    useEffect(() => setHeaderStep(prev => prev !== 2 ? 2: prev), [])
    
    function handleSubmit() {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            handleScreenChange('next', {address });
        }, 1000);
    }


    return (
    <Box className='flex-1 justify-between'>
        {/* Title */}
        <Box className='mb-10 gap-7 flex-1'>
            <Box className='gap-2'>
                <Text className={`text-3xl text-text-${appliedTheme} font-bold`}>Home address</Text>
                <Text className={`text-subText-${appliedTheme} text-lg`}>
                    Let us know where we should send your
                    Juta Mastercard® Debit Card.
                </Text>
            </Box>
            {/* Address Input */}
            <Button onPress={() => setIsSheetOpen(true)}>
                <ButtonText>Search Address</ButtonText>
            </Button>

            <AddressSearch 
                isOpen={isSheetOpen}
                onClose={() => setIsSheetOpen(false)}
                setAddress={setAddress}
            />
        </Box>

        {/* Submit Button */}
        <MyLinearGradient type='button' color={ isActive ? 'purple' : "disabled-button"}>
            <Button 
                onPress={() => isActive ? handleSubmit() : null} 
                className='w-full'
                style={{ backgroundColor: 'initial' }}
            >
                <ButtonText className={ isActive ? `text-buttonText-${appliedTheme}` : `text-buttonDisableText-${appliedTheme}`}>
                    {isLoading ? <ButtonSpinner color="white" className='h-6'/> : "Continue"}
                    </ButtonText>
            </Button>
        </MyLinearGradient>
    </Box>
    )
}

export default SignupAddress;