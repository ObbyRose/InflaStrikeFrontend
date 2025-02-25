import React, { useState } from "react";
import { Box } from "@/components/ui/box";
import { useTheme } from "@/utils/Themes/ThemeProvider";
import { Input, InputField } from "@/components/ui/input";
import { Textarea, TextareaInput } from "@/components/ui/textarea";
import { Button, ButtonText } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { ScrollView } from "react-native";
import BackHeader from "@/components/BackHeader";

const SupportScreen: React.FC = () => {
    const { appliedTheme } = useTheme();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        console.log("Support Request Sent:", { name, email, message });
        alert("Support request submitted successfully!");
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Box className={`p-4 h-full bg-background-${appliedTheme}`}>
                <BackHeader title="Contact Support" />
                <Text className="text-xl font-bold mb-2">Support</Text>
                <Text className="text-gray-500 mb-4">Need help? Send us a message.</Text>

                <Text className="text-sm font-semibold mb-1">Full Name</Text>
                <Input className="mb-4">
                    <InputField 
                        placeholder="Enter your name"
                        value={name}
                        onChangeText={setName}
                    />
                </Input>

                <Text className="text-sm font-semibold mb-1">Email</Text>
                <Input className="mb-4">
                    <InputField 
                        placeholder="Enter your email"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                </Input>

                <Text className="text-sm font-semibold mb-1">Message</Text>
                <Textarea className="mb-4">
                    <TextareaInput 
                        placeholder="Describe your issue..."
                        multiline
                        numberOfLines={4}
                        value={message}
                        onChangeText={setMessage}
                    />
                </Textarea>

                <Button className={`w-full bg-button-${appliedTheme} rounded-lg`} onPress={handleSubmit}>
                    <ButtonText className="text-white">Submit</ButtonText>
                </Button>
            </Box>
        </ScrollView>
    );
};

export default SupportScreen;
