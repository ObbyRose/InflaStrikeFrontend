import React from 'react'
import { Box } from '@/components/ui/box'
import { useTheme } from '@/utils/Themes/ThemeProvider'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import { IC_AddCard } from '@/utils/constants/Icons'
import { Props } from '@/types/NavigationTypes'
import { TouchableOpacity } from 'react-native'
import BackHeader from '@/components/BackHeader'
import { useTranslation } from 'react-i18next'

const PaymentMethodScreen: React.FC<Props> = ({ navigation }) => {
	const { appliedTheme } = useTheme()
	const { t } = useTranslation()

	return (
		<Box className={`bg-background-${appliedTheme} h-full`}>
			<Box className="p-4">
				<BackHeader title={t('paymentMethods.title')} />

				{/* Credit / Debit Card */}
				<TouchableOpacity onPress={() => navigation.navigate('LinkYourCard')} activeOpacity={0.7}>
					<Box className={`p-4 bg-card-${appliedTheme} rounded-2xl mb-4`}>
						<Box className="flex gap-2 mt-4 mb-4 flex-row items-center">
							<Icon as={IC_AddCard} className="w-6 h-6" />
							<Box className="flex-1 flex-col">
								<Text className={`font-extrabold text-text-${appliedTheme} text-[14px]`}>
									{t('paymentMethods.cardTitle')}
								</Text>
								<Text className={`text-subText-${appliedTheme} text-[12px]`}>
									{t('paymentMethods.cardSubtitle')}
								</Text>
							</Box>
						</Box>
					</Box>
				</TouchableOpacity>

				{/* Wire Transfer / SEPA */}
				<TouchableOpacity onPress={() => navigation.navigate('WireTransfer')} activeOpacity={0.7}>
					<Box className={`p-4 bg-card-${appliedTheme} rounded-2xl mb-4`}>
						<Box className="flex gap-2 mt-4 mb-4 flex-row items-center">
							<Icon as={IC_AddCard} className="w-6 h-6" />
							<Box className="flex-1 flex-col">
								<Text className={`font-extrabold text-text-${appliedTheme} text-[14px]`}>
									{t('paymentMethods.wireTitle')}
								</Text>
								<Text className={`text-subText-${appliedTheme} text-[12px]`}>
									{t('paymentMethods.wireSubtitle')}
								</Text>
							</Box>
						</Box>
					</Box>
				</TouchableOpacity>
			</Box>
		</Box>
	)
}

export default PaymentMethodScreen
