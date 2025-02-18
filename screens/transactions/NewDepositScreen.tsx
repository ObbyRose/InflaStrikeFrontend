import React, { useRef, useState } from 'react'
import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input, InputField } from '@/components/ui/input'
import { Text } from '@/components/ui/text'
import { Feather } from '@expo/vector-icons'
import { KeyboardAvoidingView, Platform, ScrollView, TextInput } from 'react-native'

const dummyData = {
    currency: "USD",
    bank: "SG France",
    accountNumber: "943049304930",
    branch: "Paris - 003",
    IBAN: "7438274983798AGH"
};

interface NewDepositScreenProps {
    setIsNewDeposit: React.Dispatch<React.SetStateAction<boolean>>;
}

function NewDepositScreen({ setIsNewDeposit }: NewDepositScreenProps) {
    const [data, setData] = useState(dummyData);
    const [searchText, setSearchText] = useState("");
    const [idText, setIdText] = useState("");


    function handleSearch() {
        console.log(searchText)
    }

    function handleSubmit() {
        console.log(idText)
    }

    return (
    <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 20}
        className="flex-1"
    >
        <ScrollView 
            contentContainerStyle={{ flexGrow: 1 }} 
            keyboardShouldPersistTaps="handled"
        >
            <Box className='bg-white h-full p-5 gap-7'>
                {/* Top Title & Back */}
                <Box className='flex flex-row items-end justify-center h-[70px] relative'>
                    <Button className="px-4 py-2 absolute top-1 left-1" onPress={() => setIsNewDeposit(false)}>
                        <Text className={`font-medium text-white`}>Back</Text>
                    </Button>
                    <Text className='font-bold text-2xl'>New Deposit</Text>
                </Box>

                {/* Search */}
                <Box>
                    <Input className="border rounded-3xl relative w-5/6 mx-auto">
                    <Feather name="search" size={24} className='absolute left-2 z-50' 
                        onPress={handleSearch} />
                        <InputField
                            value={searchText}
                            onChangeText={setSearchText}
                            placeholder="Currency"
                            placeholderTextColor="gray"
                            className="text-black text-base pl-10"
                            onChange={handleSearch}
                        />
                    </Input>
                </Box>

                {/* Information */}
                <Card variant='outline' size="lg" className='border-2 gap-4'>
                    <Text className='absolute -top-5 left-2 bg-white p-1'>Information</Text>
                    <Text>Bank: {data.bank}</Text>
                    <Text>Account number: {data.accountNumber}</Text>
                    <Text>Branch: {data.branch}</Text>
                    <Text>IBAN: {data.IBAN}</Text>
                </Card>

                {/* Confirmation */}
                <Card variant='outline' size="lg" className='border-2 gap-4'>
                    <Text className='absolute -top-5 left-2 bg-white p-1'>Confirmation</Text>
                    <Input className="border-gray-500 rounded-lg">
                        <InputField
                            value={idText}
                            onChangeText={setIdText}
                            placeholder="ID"
                            placeholderTextColor="gray"
                            className="text-black text-base"
                        />
                    </Input>
                    <Button variant='rounded' action='positive' className='self-center px-4 py-2'
                        onPress={handleSubmit}>
                        <Text className='text-white font-semibold'>Submit</Text>
                    </Button>
                </Card>
            </Box>
        </ScrollView>
    </KeyboardAvoidingView>

    )
}

export default NewDepositScreen