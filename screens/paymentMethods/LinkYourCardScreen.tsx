import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Box } from '@/components/ui/box'
import { useTheme } from '@/utils/Themes/ThemeProvider'
import { useFormInput } from '@/hooks/useFormInput'
import InputAuth from '@/components/auth/InputAuth'
import { Button } from '@/components/ui/button'
import { Props } from '@/types/NavigationTypes'

const LinkYourCardScreen:React.FC<Props> = ({ navigation }) => {
    const { appliedTheme } = useTheme();
    const [isLoading, setIsLoading] = useState(false);

    const { values, errors, handleInputChange, setErrorByFields } = useFormInput({
        cName: '',
        cNumber: '',
        cDate: '',
        CVC: '',
        postalCode: '',
    });

    const { cName, cNumber, cDate, CVC, postalCode } = values;

    function handleSubmitAddCard() {
        let valid = true;
        let newErrors = { cName: "", cNumber: "", cDate: "", CVC: "", postalCode: "" };

        if (!cName.trim()) {
            newErrors.cName = "Name is required.";
            valid = false;
        }

const formattedCardNumber = cNumber.replace(/\s/g, '');
if (!formattedCardNumber) {
    newErrors.cNumber = "Card number is required.";
    valid = false;
} else if (!/^\d{16}$/.test(formattedCardNumber)) {
    newErrors.cNumber = "Card number must be exactly 16 digits.";
    valid = false;
} else if (!/^4\d{15}$/.test(formattedCardNumber) && !/^(5[1-5]\d{14}|2[2-7]\d{14})$/.test(formattedCardNumber)) {
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

const formattedDate = cDate.replace(/\s/g, '');
if (!formattedDate) {
    newErrors.cDate = "Expiry date is required.";
    valid = false;
} else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formattedDate)) {
    newErrors.cDate = "Invalid expiry date format (MM/YY).";
    valid = false;
} else {
    const [month, year] = formattedDate.split('/').map(num => parseInt(num, 10));
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;

    if (year < currentYear || (year === currentYear && month < currentMonth)) {
        newErrors.cDate = "Card is expired.";
        valid = false;
    }
}

        setErrorByFields(newErrors);

        if (valid) {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                navigation.navigate("PaymentMethodAdded");
            }, 1000);
        }
    }

    return (
        <Box className={`bg-background-${appliedTheme} h-full flex-1`}>
            <Box className="p-4 flex-1">
                <Text className="text-black text-[24px] font-extrabold mb-2">Link your card</Text>
                <Text className="text-[#828A99] text-[16px]">By adding a new card, you agree to the</Text>
                <Text className="text-[#6666FF] text-[16px] underline mb-4">credit/debit card terms.</Text>

                <Box>
                    <InputAuth placeholder="Name on card" value={cName} error={errors.cName} onChangeText={(val) => handleInputChange("cName", val)} />
                    <InputAuth placeholder="Card number" value={cNumber} error={errors.cNumber} type='card number' maxLength={19} keyboardType="numeric" onChangeText={(val) => handleInputChange("cNumber", val)} />
                </Box>

                <Box className="flex flex-row gap-2 justify-center">
                    <Box className="w-[50%]">
                        <InputAuth placeholder="MM/YY" value={cDate} error={errors.cDate} type='card date' maxLength={5} keyboardType="numeric" onChangeText={(val) => handleInputChange("cDate", val)} />
                    </Box>
                    <Box className="w-[50%]">
                        <InputAuth placeholder="CVC" value={CVC} error={errors.CVC} keyboardType="numeric" maxLength={3} onChangeText={(val) => handleInputChange("CVC", val)} />
                    </Box>
                </Box>

                <InputAuth placeholder="Postal Code" value={postalCode} error={errors.postalCode} maxLength={10} onChangeText={(val) => handleInputChange("postalCode", val)} />
            </Box>

            <Box className="absolute bottom-4 left-4 right-4">
                <Button onPress={handleSubmitAddCard} className={`bg-button-${appliedTheme} rounded-full h-[4rem]`}>
                    <Text className="text-white text-[16px] font-extrabold">{isLoading ? "Processing..." : "Add Card"}</Text>
                </Button>
            </Box>
        </Box>
    );
}

export default LinkYourCardScreen;
