import React, { useRef, useState } from 'react'
import { Box } from '@/components/ui/box'
import { Button } from '@/components/ui/button'
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input'
import { Text } from '@/components/ui/text'
import { Feather } from '@expo/vector-icons'
import { KeyboardAvoidingView, Platform, ScrollView, TextInput } from 'react-native'
import OutlinedCard from '@/components/OutlinedCard'
import { SearchIcon } from "@/components/ui/icon"

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
            <Box className='h-full p-5 gap-7'>
                {/* Top Title & Back */}
                <Box className='flex flex-row items-end justify-center h-[70px] relative'>
                    <Button className="px-4 py-2 absolute top-1 left-1" onPress={() => setIsNewDeposit(false)}>
                        <Text className={`font-medium text-white`}>Back</Text>
                    </Button>
                    <Text className='font-bold text-2xl'>New Deposit</Text>
                </Box>

                {/* Search */}
                <Box>
                    <Input className="border rounded-3xl relative w-5/6 mx-auto bg-white">
                        <InputSlot className='absolute left-2 z-50' onPress={handleSearch}>
                            <InputIcon as={SearchIcon} color='black'/>
                        </InputSlot>
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
                <OutlinedCard title='Information' className='gap-4'>
                    <Text>Bank: {data.bank}</Text>
                    <Text>Account number: {data.accountNumber}</Text>
                    <Text>Branch: {data.branch}</Text>
                    <Text>IBAN: {data.IBAN}</Text>
                </OutlinedCard>

                {/* Confirmation */}
                <OutlinedCard title='Confirmation' className='gap-4'>
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
                </OutlinedCard>
            </Box>
        </ScrollView>
    </KeyboardAvoidingView>

    )
}

export default NewDepositScreen