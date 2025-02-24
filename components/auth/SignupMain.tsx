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

function SignupMain({ handleScreenChange }: SignUpScreensProps) {
    const { appliedTheme } = useTheme();
    const [isLoading, setIsLoading] = useState(false);
    const { values, errors, handleInputChange, setErrorByFields } = useFormInput({
        email: '',
        pass: '',
        fName: '',
        lName: '',
        checkbox: false,
        api: ''
    });

    const { email, pass, fName, lName, checkbox } = values;

    function handleSubmitSignup() {
        let valid = true;
        let newErrors = { email: "", pass: "", fName: "", lName: "", checkbox: ""};

        // Validate email format
        if (!email.trim()) {
            newErrors.email = "Email is required.";
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Invalid email format.";
            valid = false;
        }

        // Validate password
        if (!pass.trim()) {
            newErrors.pass = "Password is required.";
            valid = false;
        } else if (pass.length < 6) {
            newErrors.pass = "Password must be at least 6 characters.";
            valid = false;
        }
        // Validate names not empty
        if (!fName.trim()) {
            newErrors.fName = "First Name is required.";
            valid = false;
        }
        if (!lName.trim()) {
            newErrors.lName = "Last Name is required.";
            valid = false;
        }

        if (!checkbox) {
            newErrors.checkbox = "You must agree to Terms of service";
            valid = false;
        }

        setErrorByFields(newErrors)

        if (valid) {
            setIsLoading(true);
            console.log({ fName, lName, email, pass });
            setTimeout(() => { 
                setIsLoading(false);
                handleScreenChange(1);
            }, 1000);
        }
    }

    const handleCheckboxChange = (val: boolean) => {
        handleInputChange('checkbox', val);
        if (errors.checkbox) {
            handleInputChange('checkbox', val);
        }
    };

    return (
    <Box>
        {/* Title */}
        <Box className='my-10 gap-2'>
            <Text className='text-4xl text-black font-bold'>Join InflaStrike</Text>
            <Text className={`text-gray-${appliedTheme} text-lg`}>
                Create your account.
                <Text className={`text-link-${appliedTheme} mx-auto font-bold tracking-wide`}
                onPress={() => console.log("LeanMore IMPLEMENT LATER")}
                > 
                    Learn more
                </Text>
            </Text>
        </Box>
        {/* Main Login */}
        <Box className='gap-2'>
            {/* Inputs */}
            <InputAuth 
                icon="IC_Person" 
                placeholder='First Name'
                value={fName}
                onChangeText={(val) => handleInputChange("fName", val)}
                error={errors.fName}
            />
            <InputAuth 
                icon="IC_Person" 
                placeholder='Last Name'
                value={lName}
                onChangeText={(val) => handleInputChange("lName", val)}
                error={errors.lName}
            />
            <InputAuth 
                icon="IC_Email" 
                placeholder='Email'
                value={email}
                onChangeText={(val) => handleInputChange("email", val)}
                error={errors.email}
            />
            <InputAuth 
                icon="IC_Lock" 
                placeholder='Password' 
                isPass={true}
                value={pass}
                onChangeText={(val) => handleInputChange("pass", val)}
                error={errors.pass}
            />

            <Checkbox 
                size="md" 
                value='agree'
                isChecked={checkbox}
                onChange={() => handleCheckboxChange(!checkbox)}
                isInvalid={!!errors.checkbox}
                >
                <CheckboxIndicator className='mb-auto mt-3'>
                    <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel className='w-[90%] p-2'>
                    I certify that I am 18 years of age or older, and I agree to the 
                    <Text className={`text-link-${appliedTheme} mx-auto font-bold tracking-wide`}
                    onPress={() => console.log("User Agreement IMPLEMENT LATER")}
                    > 
                        {" User Agreement "}
                    </Text>
                    and
                    <Text className={`text-link-${appliedTheme} mx-auto font-bold tracking-wide`}
                    onPress={() => console.log("Privacy Policy IMPLEMENT LATER")}
                    > 
                        {" Privacy Policy "}
                    </Text>
                    </CheckboxLabel>
            </Checkbox>
            { errors.checkbox && <Text className="text-red-500 text-sm ps-3 mb-1 -mt-1">{errors.checkbox}</Text>}


            { errors.api && <Text className="text-red-500 text-sm ps-3 mb-1 -mt-1">{errors.api}</Text>}
            {/* Login Button & Forgot Pass */}
            <Button variant={`rounded-solid-${appliedTheme}`}  className="h-fit"
            onPress={handleSubmitSignup}
            >
                <ButtonText className="text-white">{isLoading ? <ButtonSpinner color={"white"} className='h-6'/> : "Sign Up"}</ButtonText>
            </Button>
        </Box>
    </Box>
    )
}

export default SignupMain