import React, { useEffect, useState } from 'react'
import { TouchableOpacity, Platform, Alert } from 'react-native'
import * as LocalAuthentication from 'expo-local-authentication'
import usePinStore from '../../context/pinStore'
import { VStack } from '@/components/ui/vstack'
import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import { Button, ButtonText } from '@/components/ui/button'
import { useTheme } from '@/utils/Themes/ThemeProvider'
import BackHeader from '@/components/BackHeader'
import MyLinearGradient from '@/components/gradient/MyLinearGradient'
import { Props } from '@/types/NavigationTypes'
import { IC_FaceID_Group } from '@/utils/constants/Icons'
import { useTranslation } from 'react-i18next'

const FaceId: React.FC<Props> = ({ navigation }) => {
	const { t } = useTranslation()
	const { appliedTheme } = useTheme()
	const { setBiometricAuth } = usePinStore()
	const [isBiometricSupported, setIsBiometricSupported] = useState(false)

	useEffect(() => {
		checkDeviceSupport()
	}, [])

	const checkDeviceSupport = async () => {
		const compatible = await LocalAuthentication.hasHardwareAsync()
		setIsBiometricSupported(compatible)
	}

	const handleSetupFaceID = async () => {
		if (!isBiometricSupported) {
			Alert.alert(t('faceId.alertTitle'), t('faceId.notSupported'))
			return
		}

		const savedBiometrics = await LocalAuthentication.isEnrolledAsync()
		if (!savedBiometrics) {
			Alert.alert(t('faceId.alertTitle'), t('faceId.notEnrolled'))
			return
		}

		const result = await LocalAuthentication.authenticateAsync({
			promptMessage: t('faceId.prompt'),
			fallbackLabel: t('faceId.fallback'),
		})

		if (result.success) {
			setBiometricAuth(true)
			Alert.alert(t('faceId.successTitle'), t('faceId.successMessage'))
			navigation.reset({ index: 0, routes: [{ name: 'MainApp', params: { screen: 'Home' } }] })
		} else {
			Alert.alert(t('faceId.failTitle'), t('faceId.failMessage'))
		}
	}

	return (
		<MyLinearGradient type="background" color={appliedTheme === 'dark' ? 'dark' : 'light-blue'}>
			<Box className="p-4 h-full flex">
				<BackHeader title={t('faceId.header')} />
				<VStack className="flex gap-4 justify-center items-center">
					<IC_FaceID_Group />
					<Text className={`text-2xl font-bold text-text-${appliedTheme}`}>
						{t('faceId.title')}
					</Text>
					<Text className={`text-subText-${appliedTheme} mt-2 text-center text-[16px]`}>
						{t('faceId.subtitle')}
					</Text>

					<Box className="mt-6 gap-6 px-6">
						<MyLinearGradient type="button" color="purple">
							<Button onPress={handleSetupFaceID}>
								<ButtonText className="w-full flex text-center text-lg items-center justify-center">
									{t('faceId.enable')}
								</ButtonText>
							</Button>
						</MyLinearGradient>

						<TouchableOpacity onPress={() => navigation.navigate('MainApp', { screen: 'Home' })}>
							<Box>
								<Text className={`text-center text-subText-${appliedTheme} text-[16px]`}>
									{t('faceId.skip')}
								</Text>
							</Box>
						</TouchableOpacity>
					</Box>
				</VStack>
			</Box>
		</MyLinearGradient>
	)
}

export default FaceId
