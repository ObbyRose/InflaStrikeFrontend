import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import { Icon } from '@/components/ui/icon'
import { IC_CardAdded } from '@/utils/constants/Icons'
import { Button, ButtonText } from '@/components/ui/button'
import { useTheme } from '@/utils/Themes/ThemeProvider'
import { Props } from '@/types/NavigationTypes'
import MyLinearGradient from '@/components/gradient/MyLinearGradient'

const PaymentMethodAddedScreen: React.FC<Props> = ({ navigation }) => {
	const { t } = useTranslation()
	const { appliedTheme } = useTheme()

	return (
		<MyLinearGradient
			type='background'
			color={appliedTheme === 'light' ? 'light-blue' : 'dark'}
			className='flex-1 justify-between items-center gap-2'
		>
			<Box className='flex-1 justify-center items-center'>
				<Icon as={IC_CardAdded} />
				<Box className='w-[80%]'>
					<Text className={`font-extrabold text-text-${appliedTheme} text-[24px] text-center`}>
						{t('cardAdded.title')}
					</Text>
					<Text className={`font-extrabold text-subText-${appliedTheme} text-[16px] text-center mt-4`}>
						{t('cardAdded.description')}
					</Text>
				</Box>
			</Box>

			<MyLinearGradient type='button' color='purple' className='mb-4 w-[90%]'>
				<Button onPress={() => navigation.navigate('MainApp', { screen: 'Home' })}>
					<ButtonText>{t('cardAdded.done')}</ButtonText>
				</Button>
			</MyLinearGradient>
		</MyLinearGradient>
	)
}

export default PaymentMethodAddedScreen
