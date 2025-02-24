import React, { useState } from 'react'
import { Box } from '../ui/box'
import { Text } from '../ui/text'
import InputAuth from './InputAuth'
import { Button, ButtonSpinner, ButtonText } from '../ui/button'
import { useFormInput } from '@/hooks/useFormInput'
import { Checkbox, CheckboxIcon, CheckboxIndicator, CheckboxLabel } from '../ui/checkbox'
import { CheckIcon } from '../ui/icon'
import { SignUpScreensProps } from '@/types/NavigationTypes'
import { useTheme } from '@/utils/Themes/ThemeProvider'
import { validateAndConvertBirthday } from '@/utils/functions/help'

function SignupPersonalInformation({ handleScreenChange }: SignUpScreensProps) {
    const { appliedTheme } = useTheme();
    const [isLoading, setIsLoading] = useState(false);
    const { values, errors, handleInputChange, setErrorByFields } = useFormInput({
        birthday: '',
        address: '',
        apartmentNumber: '',
        city: '',
        postal: '',
        api: ''
    });

    const { birthday, address, apartmentNumber, city, postal } = values;
    
    function handleSubmit() {
        let valid = true;
        let newErrors = { birthday: "", address: "", apartmentNumber: "", city: "", postal: ""};
        let birthdayDate;

        if(!birthday.trim()) {
            newErrors.birthday = "birthday is required.";
            valid = false;
        } else {
            birthdayDate = validateAndConvertBirthday(birthday);
            if (!birthdayDate) {
                newErrors.address = "birthday format is invalid.";
                valid = false;
            }
        }
        
        if (!address.trim()) {
            newErrors.address = "Address is required.";
            valid = false;
        } 
        if (!apartmentNumber.trim()) {
            newErrors.apartmentNumber = "Apartment Number is required.";
            valid = false;
        }
        if (!city.trim()) {
            newErrors.city = "City or Town is required.";
            valid = false;
        }
        if (!postal.trim()) {
            newErrors.postal = "Postal is required.";
            valid = false;
        }

        setErrorByFields(newErrors)

        if (valid) {
            setIsLoading(true);
            console.log({ birthday: birthdayDate?.toLocaleDateString("en-US"), address, apartmentNumber, city, postal });
            setTimeout(() => { 
                setIsLoading(false);
                handleScreenChange(7);
            }, 1000);
        }
    }

    return (
    <Box className='flex-1 justify-between'>
        {/* Title */}
        <Box className='mb-10 gap-2'>
            <Text className='text-4xl text-black font-bold mb-5'>Personal information</Text>
            {/* Inputs */}
            <InputAuth 
                type='birthday'
                value={birthday}
                onChangeText={(val) => handleInputChange("birthday", val)}
                error={errors.birthday}
            />
            <InputAuth 
                placeholder='Residential address'
                value={address}
                onChangeText={(val) => handleInputChange("address", val)}
                error={errors.address}
            />
            <InputAuth 
                placeholder='Apartment number'
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
                value={postal}
                onChangeText={(val) => handleInputChange("postal", val)}
                error={errors.postal}
            />

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