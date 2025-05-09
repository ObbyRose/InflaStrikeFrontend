import React, { useEffect } from 'react'
import { TouchableOpacity, Vibration } from 'react-native'
import usePinStore from '../../context/pinStore'
import { VStack } from '@/components/ui/vstack'
import { HStack } from '@/components/ui/hstack'
import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import MyLinearGradient from '@/components/gradient/MyLinearGradient'
import { useTheme } from '@/utils/Themes/ThemeProvider'
import BackHeader from '@/components/BackHeader'
import { Props } from '@/types/NavigationTypes'
import { useTranslation } from 'react-i18next'

const CreatePinScreen: React.FC<Props> = ({ navigation }) => {
	const { t } = useTranslation()
	const { pin, setPin, deleteLastDigit, clearPin } = usePinStore()
	const { appliedTheme } = useTheme()

	useEffect(() => {
		clearPin()
	}, [])

	useEffect(() => {
		if (pin.length === 4) {
			Vibration.vibrate(50)
			const enteredPin = pin

			setTimeout(() => {
				navigation.navigate('ConfirmPin', { createdPin: enteredPin })
			}, 300)
		}
	}, [pin])

	const handlePinPress = (digit: string) => {
		if (digit === '<') {
			deleteLastDigit()
		} else if (pin.length < 4) {
			setPin(digit)
		}
	}

	return (
		<MyLinearGradient type="background" color={appliedTheme === 'dark' ? 'dark' : 'light-blue'}>
			<Box className="p-4 h-full flex">
				<BackHeader title={t('createPin.header')} />
				<VStack className="flex-1 items-center justify-between">
					{/* Title */}
					<VStack className="items-center">
						<Text className={`text-3xl font-bold text-text-${appliedTheme}`}>
							{t('createPin.title')}
						</Text>
						<Text className={`text-subText-${appliedTheme} mt-2`}>
							{t('createPin.subtitle')}
						</Text>
					</VStack>

					{/* PIN Dots */}
					<HStack className="gap-4 justify-center">
						{[0, 1, 2, 3].map((index) => (
							<Box
								key={index}
								className={`w-14 h-16 border-2 rounded-lg flex items-center justify-center bg-card-${appliedTheme} ${
									pin.length === index
										? appliedTheme === 'dark'
											? 'border-white'
											: 'border-purple-500'
										: 'border-transparent'
								}`}
							>
								{pin.length > index && (
									<Box
										className={`w-3 h-3 ${appliedTheme === 'light' ? 'bg-purple-500' : 'bg-white'} rounded-full`}
									/>
								)}
							</Box>
						))}
					</HStack>

					{/* Numpad */}
					<VStack className="space-y-6 mt-6">
						{[
							['1', '2', '3'],
							['4', '5', '6'],
							['7', '8', '9'],
							['', '0', '<'],
						].map((row, rowIndex) => (
							<HStack key={rowIndex} className="justify-center gap-14">
								{row.map((digit, index) => (
									<TouchableOpacity
										key={index}
										onPress={() => handlePinPress(digit)}
										className="w-20 h-20 rounded-lg flex items-center justify-center"
									>
										<Text className={`text-3xl font-semibold text-text-${appliedTheme}`}>
											{digit}
										</Text>
									</TouchableOpacity>
								))}
							</HStack>
						))}
					</VStack>

					<Box className="mt-4" />
				</VStack>
			</Box>
		</MyLinearGradient>
	)
}

export default CreatePinScreen
