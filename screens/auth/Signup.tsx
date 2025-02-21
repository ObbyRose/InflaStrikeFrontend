import BackAuth from '@/components/auth/BackAuth'
import SignupMain from '@/components/auth/SignupMain'
import VerifyEmail from '@/components/auth/VerifyEmail'
import { Box } from '@/components/ui/box'
import { Props } from '@/types/NavigationTypes'
import { useTheme } from '@/utils/Themes/ThemeProvider'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const Signup: React.FC<Props> = ({ navigation }) => {
    const { appliedTheme } = useTheme();
    const [screenStep , setScreenStep ] = useState(0);

    return (
    <SafeAreaView>
        <ScrollView 
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        >
        <Box className={`flex-1 bg-background-${appliedTheme}`}>
            <BackAuth screenStep={screenStep} setScreenStep={setScreenStep} navigation={navigation}/>
            <Box className={`flex-1 p-10 pt-5 justify-between`}>
            { screenStep === 0 && <SignupMain appliedTheme={appliedTheme} setScreenStep={setScreenStep} />}
            { screenStep === 1 && <VerifyEmail appliedTheme={appliedTheme} setScreenStep={setScreenStep} />}
            </Box>
        </Box>
    </ScrollView>
    </SafeAreaView>
    )
}

export default Signup