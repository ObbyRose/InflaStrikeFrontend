import React from 'react'
import { Box } from '@/components/ui/box'
import { useTheme } from '@/utils/Themes/ThemeProvider'
import { Icon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import { IC_AddCard } from '@/utils/constants/Icons'
import { Props } from '@/types/NavigationTypes'
import { TouchableOpacity } from 'react-native'

const PaymentMethodScreen: React.FC<Props> = ({ navigation }) => {
    const { appliedTheme } = useTheme()
    
    return (
        <Box className={`bg-background-${appliedTheme} h-full`}>
            <Box className="p-4">
                
                {/* Credit / Debit Card */}
                <TouchableOpacity onPress={() => navigation.navigate("LinkYourCard")} activeOpacity={0.7}>
                    <Box className="p-4 bg-[#F2F2F7] rounded-2xl mb-4">
                        <Box className="flex gap-2 mt-4 mb-4 flex-row items-center">
                            <Icon as={IC_AddCard} className="w-6 h-6" />
                            <Box className="flex-1 flex-col">
                                <Text className="font-extrabold text-black text-[14px]">
                                    Credit / Debit Card
                                </Text>
                                <Text className="text-[#828A99] text-[12px]">
                                    Use any Visa or Mastercard to make small investments
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                </TouchableOpacity>

                {/* Wire Transfer / SEPA */}
                <TouchableOpacity onPress={() => navigation.navigate("WireTransfer")} activeOpacity={0.7}>
                    <Box className="p-4 bg-[#F2F2F7] rounded-2xl">
                        <Box className="flex gap-2 mt-4 mb-4 flex-row items-center">
                            <Icon as={IC_AddCard} className="w-6 h-6" />
                            <Box className="flex-1 flex-col">
                                <Text className="font-extrabold text-black text-[14px]">
                                    Wire Transfer / SEPA
                                </Text>
                                <Text className="text-[#828A99] text-[12px]">
                                    Send funds via bank wire transfer or SEPA transactions.
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
