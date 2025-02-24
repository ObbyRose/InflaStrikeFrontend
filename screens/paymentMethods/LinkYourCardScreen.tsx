import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Box } from '@/components/ui/box'
import { useTheme } from '@/utils/Themes/ThemeProvider'
import { useFormInput } from '@/hooks/useFormInput'
import InputAuth from '@/components/auth/InputAuth'

const LinkYourCardScreen = () => {
    const { appliedTheme }= useTheme()
    const [isLoading, setIsLoading] = useState(false);
        const { values, errors, handleInputChange, setErrorByFields } = useFormInput({
            cName: '',
            cNumber: '',
            cDate: '',
            CVC: '',
            postalCode: '',
            api: ''
        });
    
        const { cName, cNumber, cDate, CVC, postalCode } = values;
    
        function handleSubmitSignup() {
            let valid = true;
            let newErrors = { cName: "", cNumber: "", cDate: "", CVC: "", postalCode: ""};
    
            // Validate email format
            if (!cName.trim()) {
                newErrors.cName = "Name is required.";
                valid = false;
            }
    
            // Validate password
            if (!cNumber.trim()) {
                newErrors.cNumber = "Card number is required.";
                valid = false;
            } else if (!/^\d{16}$/.test(cNumber)) {
                newErrors.cNumber = "Card number must be exactly 16 digits.";
                valid = false;
            } else if (!/^4\d{15}$/.test(cNumber) && !/^(5[1-5]\d{14}|2[2-7]\d{14})$/.test(cNumber)) {
                newErrors.cNumber = "Invalid card number. Only Visa and Mastercard are accepted.";
                valid = false;
            }
            
            if (!postalCode.trim()) {
                newErrors.postalCode = "Please enter a postal code.";
                valid = false;
            } else if (!/^[A-Za-z0-9\s-]{3,10}$/.test(postalCode)) {
                newErrors.postalCode = "Invalid postal code format.";
                valid = false;
            }

            // Validate Expiry Date (MM/YY)
            if (!cDate.trim()) {
                newErrors.cDate = "Expiry date is required.";
                valid = false;
            } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(cDate)) {
                newErrors.cDate = "Invalid expiry date format (MM/YY).";
                valid = false;
            }

            // Validate CVC
            if (!CVC.trim()) {
                newErrors.CVC = "CVC is required.";
                valid = false;
            } else if (!/^\d{3}$/.test(CVC)) {
                newErrors.CVC = "Invalid CVC. Must be exactly 3 digits.";
                valid = false;
            }

            setErrorByFields(newErrors)
    
            if (valid) {
                setIsLoading(true);
                setTimeout(() => { 
                    setIsLoading(false);
                }, 1000);
            }
        }
    return (
        <Box className={`bg-background-${appliedTheme} h-full`}>
            <Box>
                <Text>Link your card</Text>

                <InputAuth placeholder='Name on card' value={cName} error={errors.cName} onChangeText={(val) => handleInputChange("cName", val) } />
            </Box>
        </Box>
    )
}

export default LinkYourCardScreen