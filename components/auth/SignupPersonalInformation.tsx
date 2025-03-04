import React, { useEffect, useState } from 'react'
import { Box } from '../ui/box'
import { Text } from '../ui/text'
import InputAuth from './InputAuth'
import { Button, ButtonSpinner, ButtonText } from '../ui/button'
import { useFormInput } from '@/hooks/useFormInput'
import { SignUpScreensProps } from '@/types/NavigationTypes'
import { useTheme } from '@/utils/Themes/ThemeProvider'
import { validateAndConvertBirthday } from '@/utils/functions/help'
import GooglePlacesInput from './GooglePlacesInput'

interface SignupPersonalInformationProps extends SignUpScreensProps {
    setHeaderStep: React.Dispatch<React.SetStateAction<number>>;
}

function SignupPersonalInformation({ handleScreenChange, setHeaderStep }: SignupPersonalInformationProps) {
    const { appliedTheme } = useTheme();
    const [isLoading, setIsLoading] = useState(false);
    const [address, setAddress] = useState({});
    const { values, errors, handleInputChange, setErrorByFields } = useFormInput({
        birthday: '',
        api: ''
    });

    const { birthday } = values;

    useEffect(() => {
        setHeaderStep(prev => (prev !== 1 ? 1 : prev));
    }, []);
    
    function handleSubmit() {
        let valid = true;
        let newErrors = { birthday: ""};
        let birthdayDate = null;

        if(!birthday.trim()) {
            newErrors.birthday = "birthday is required.";
            valid = false;
        } else {
            birthdayDate = validateAndConvertBirthday(birthday);
            if (!birthdayDate) {
                newErrors.birthday = "birthday format is invalid.";
                valid = false;
            }
        }

        setErrorByFields(newErrors)

        if (valid) {
            setIsLoading(true);
            setTimeout(() => { 
                setIsLoading(false);
                handleScreenChange('next', { 
                    birthday: birthdayDate?.toLocaleDateString("en-US"), 
                    address });
            }, 1000);
        }
    }

    return (
    <Box className='flex-1 justify-between'>
        {/* Title */}
        <Box className='mb-10 gap-2'>
            <Text className='text-4xl text-black font-bold mb-5'>Personal information</Text>
            {/* Inputs */}
            <Text>Birthday</Text>
            <InputAuth 
                type='birthday'
                value={birthday}
                onChangeText={(val) => handleInputChange("birthday", val)}
                error={errors.birthday}
            />
            <Text>Address</Text>

            <GooglePlacesInput setAddress={setAddress}/>
            {/* <InputAuth 
                placeholder='Residential address'
                value={address}
                onChangeText={(val) => handleInputChange("address", val)}
                error={errors.address}
            />
            <InputAuth 
                placeholder='Apartment number'
                maxLength={10}
                value={apartmentNumber}
                onChangeText={(val) => handleInputChange("apartmentNumber", val)}
                error={errors.apartmentNumber}
            />
            <InputAuth 
                placeholder='City or town' 
                value={city}
                onChangeText={(val) => handleInputChange("city", val)}
                error={errors.city}
            />
            <InputAuth 
                placeholder='Postal code' 
                keyboardType='numeric'
                maxLength={10}
                value={postal}
                onChangeText={(val) => handleInputChange("postal", val)}
                error={errors.postal}
            /> */}

            <Text className={`text-gray-${appliedTheme} text-[12px]`}>
            We use 128-bit encryption for added security, and this information is only used for identity verification purposes.
            </Text>

            { errors.api && <Text className="text-red-500 text-sm ps-3 mb-1 -mt-1">{errors.api}</Text>}
        </Box>
        {/* Submit Button */}
        <Box>
            <Button variant={`rounded-solid-${appliedTheme}`} className="h-fit"
            onPress={handleSubmit}
            >
                <ButtonText className="text-white">{isLoading ? <ButtonSpinner color="white" className='h-6'/> : "Continue"}</ButtonText>
            </Button>
        </Box>
    </Box>
    )
}

export default SignupPersonalInformation;