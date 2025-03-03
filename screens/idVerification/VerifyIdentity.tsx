import React from 'react'
import { Box } from '@/components/ui/box'
import BackHeader from '@/components/BackHeader'
import RoundedBox from '@/components/RoundedBox'
import { IC_Passport_Photo } from '@/utils/constants/Icons'
import MyLinearGradient from '@/components/gradient/MyLinearGradient'
import { Text } from '@/components/ui/text'
import { useTheme } from '@/utils/Themes/ThemeProvider'
import { Button } from '@/components/ui/button'

const VerifyIdentity = () => {
    const { appliedTheme, setTheme } = useTheme()
    return (
    <MyLinearGradient type='background' color={appliedTheme === 'dark' ? 'dark' : 'light-blue'}>
        <Box className={`p-4 h-full`}>
            <BackHeader title="Verify Identity" icons={["IC_Help"]} />
            <Box>
                <RoundedBox>
                    <IC_Passport_Photo />
                    <Box>
                        <Text>Government ID</Text>
                        <Button onPress={() => setTheme(appliedTheme === "dark" ? "light" : "dark")}></Button>
                    </Box>
                </RoundedBox>
            </Box>
        </Box>
    </MyLinearGradient>
    )
}

export default VerifyIdentity