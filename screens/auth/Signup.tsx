import BackAuth from '@/components/auth/BackAuth'
import InputAuth from '@/components/auth/InputAuth'
import SignupMain from '@/components/auth/SignupMain'
import { Box } from '@/components/ui/box'
import { Button, ButtonSpinner, ButtonText } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { Props } from '@/types/NavigationTypes'
import { useTheme } from '@/utils/Themes/ThemeProvider'
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'


const Signup: React.FC<Props> = ({ navigation }) => {
    const { appliedTheme } = useTheme();
    const [screenStep , setScreenStep ] = useState(0);
    const insets = useSafeAreaInsets();


    return (
    <Box className={`flex-1 bg-background-${appliedTheme}`}>
        <BackAuth screenStep={screenStep} setScreenStep={setScreenStep} navigation={navigation}/>
        <Box className={`flex-1 p-10 pt-5 justify-between`}>
        { screenStep === 0 && <SignupMain appliedTheme={appliedTheme} />}
        </Box>
    </Box>
    )
}

export default Signup