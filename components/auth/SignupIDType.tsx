import React, { useState } from 'react'
import { Box } from '../ui/box'
import { Text } from '../ui/text'
import { useFormInput } from '@/hooks/useFormInput'
import { SignUpScreensProps } from '@/types/NavigationTypes'
import { useTheme } from '@/utils/Themes/ThemeProvider'
import { validateAndConvertBirthday } from '@/utils/functions/help'
import { Card } from '../ui/card'

function SignupIDType({ handleScreenChange }: SignUpScreensProps) {
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
            {/* background: #F2F2F7; */}
            <Card className={`bg-gray-${appliedTheme}`} > 
                <Text>ID Card</Text>
            </Card>

            <Text className={`text-gray-${appliedTheme} text-[12px]`}>
            Your photo ID and actions captured during the ID verification process may constitute biometric data. Please see our Privacy Policy for more information about how we store and use your biometric data.
            </Text>
        </Box>
    </Box>
    )
}

export default SignupIDType;