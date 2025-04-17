import React from 'react'
import { Text, ScrollView, TouchableOpacity } from 'react-native'
import { Box } from '@/components/ui/box'
import { useTheme } from '@/utils/Themes/ThemeProvider'
import { Divider } from '@/components/ui/divider'
import { useUserStore } from '@/context/userStore'
import {
	IC_BTCUSDT,
	IC_Bell_White,
	IC_Info,
	IC_Top_Up,
	IC_Transaction,
	IC_History,
	IC_Tothor,
	IC_Tothor_Logo_Only,
	IC_Tothor_Logo_Only_Bold,
	IC_Gold,
	IC_DOGEUSDT,
	IC_PieGraph
} from '@/utils/constants/Icons'
import { Props } from '@/types/NavigationTypes'
import MyLinearGradient from '@/components/gradient/MyLinearGradient'
import OptionCard from '@/components/OptionCard'
import { FlashList } from '@shopify/flash-list'
import { useTranslation } from 'react-i18next'
import { FlatList } from 'react-native-gesture-handler'

type BundleItem = {
	id: string
	icon: React.ReactNode
	name: string
	timeframe: string
	performance: string
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
	const { appliedTheme } = useTheme()
	const { user } = useUserStore()
	const { t } = useTranslation()

	const getBundleData = (): BundleItem[] => {
		return [
			{
				id: '1',
				icon: <IC_BTCUSDT className="h-12 w-12" />,
				name: t('home.bundles.maga'),
				timeframe: t('home.timeframe'),
				performance: '+15%'
			},
			{
				id: '2',
				icon: appliedTheme === 'dark'
					? <IC_Tothor_Logo_Only_Bold className="h-12 w-12" />
					: <IC_Tothor_Logo_Only className="h-12 w-12" />,
				name: t('home.bundles.tothor'),
				timeframe: t('home.timeframe'),
				performance: '+24%'
			},
			{
				id: '3',
				icon: <IC_Gold className="h-12 w-12" />,
				name: t('home.bundles.earth'),
				timeframe: t('home.timeframe'),
				performance: '+35%'
			},
			{
				id: '4',
				icon: <IC_DOGEUSDT className="h-12 w-12" />,
				name: t('home.bundles.doge'),
				timeframe: t('home.timeframe'),
				performance: '+4%'
			}
		]
	}

	return (
		<ScrollView>
            <MyLinearGradient type="background" color={appliedTheme === 'dark' ? 'blue' : 'purple'}>
				<Box className="h-[40%] mb-4 p-4">
					<Box className="flex flex-row items-center justify-between">
						<IC_Tothor className="h-16 w-40" />
						<Box className="flex-row gap-4">
							<TouchableOpacity onPress={() => navigation.navigate('Portfolio')}>
								<IC_PieGraph color="#fff" className="h-7 w-7" />
							</TouchableOpacity>
							<TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
								<IC_Bell_White className="h-7 w-7" />
							</TouchableOpacity>
						</Box>
					</Box>

					<Box className="flex flex-col gap-4 p-4">
						<Text className="text-[17px] font-medium text-white">{t('home.safeToSpend')}</Text>
						<Box className="flex-row items-center gap-4">
							<Text className="text-4xl font-medium text-white">${user?.nlve || 0}</Text>
							<IC_Info className="h-6 w-6" />
						</Box>
						<Text className="text-[14px] text-white">{t('home.lastUpdated')}</Text>
					</Box>

					<Box className={`bg-card-${appliedTheme} z-50 w-full h-[80px] rounded-full p-2 flex flex-row justify-evenly`}>
						<Box className="flex-col items-center ">
							<IC_Top_Up className="h-12 w-12" />
							<Text className={`text-text-${appliedTheme} font-bold`}>
								{t('home.actions.topup')}
							</Text>
						</Box>
						<Box className="p-2">
							<Box className={`border-s-[1px] border-divider-${appliedTheme} mx-2 h-full`} />
						</Box>
						<Box className="flex-col items-center text-center">
							<IC_Transaction className="h-12 w-12" />
							<Text className={`text-text-${appliedTheme} font-bold`}>
								{t('home.actions.transfer')}
							</Text>
						</Box>
						<Box className="p-2">
							<Box className={`border-s-[1px] border-divider-${appliedTheme} mx-2 h-full`} />
						</Box>
						<Box className="flex-col items-center text-center">
							<IC_History className="h-12 w-12" />
							<Text className={`text-text-${appliedTheme} font-bold`}>
								{t('home.actions.history')}
							</Text>
						</Box>
					</Box>
				</Box>
			</MyLinearGradient>

            <MyLinearGradient type="background" color={appliedTheme === 'dark' ? 'dark' : 'light-blue'} className="">
				<Box className={`p-4 h-full bg-background-${appliedTheme}`}>
					<Box>
						<Box className="flex-row items-center justify-between">
							<Text className={`text-[22px] font-semibold text-text-${appliedTheme}`}>
								{t('home.recommended')}
							</Text>
						</Box>
						<Box className="flex-row gap-4 p-4 flex-wrap justify-between">
							{getBundleData().map((item) => (
								<Box
								key={item.id}
								className={`bg-card-${appliedTheme} p-4 rounded-lg w-[47%]`}
								>
								<Box className="items-center">
									{item.icon}
								</Box>
								<Text className={`text-text-${appliedTheme} mt-2 text-center font-semibold`}>
									{item.name}
								</Text>
								<Text className={`text-subText-${appliedTheme} text-center`}>
									{item.timeframe}
								</Text>
								<Text className={`text-green-500 text-center font-bold`}>
									{item.performance}
								</Text>
								</Box>
							))}
							</Box>
					</Box>
					<Divider className={`bg-divider-${appliedTheme} mt-4`} />
				</Box>
			</MyLinearGradient>
		</ScrollView>
	)
}

export default HomeScreen
