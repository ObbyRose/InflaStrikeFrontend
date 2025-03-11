import React from 'react';
import { Modal, ModalBackdrop, ModalBody, ModalContent } from '../ui/modal';
import { Box } from '../ui/box';
import { PartyPopper } from 'lucide-react-native';
import { Text } from '../ui/text';
import { Button, ButtonText } from '../ui/button';
import { IM_PARTY } from '@/utils/constants/Images';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import MyLinearGradient from '../gradient/MyLinearGradient';

interface MembershipModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}
const MembershipModal = ({ isOpen, onClose, onSuccess }: MembershipModalProps) => {
    const { appliedTheme } = useTheme();
    return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalBackdrop />
        <ModalContent 
            className={`w-[90%] rounded-xl bg-card-${appliedTheme} p-6 items-center`}
        >
            <ModalBody>
                <Box className='items-center'>
                    <Box className="mb-4">
                        <IM_PARTY className='h-[200px] '/>
                    </Box>

                    {/* Congratulations Title */}
                    <Text 
                        className="text-xl font-bold text-purple-600 mb-2"
                    >
                        Congratulations
                    </Text>

                    {/* Subtext */}
                    <Text 
                        className="text-center text-gray-600 mb-6"
                    >
                        You are member now! 
                        Get ready to start using Juto for your daily financial app.
                    </Text>

                    {/* Submit Button */}
                    <MyLinearGradient type='button' color='purple' className='w-fit'>
                        <Button 
                            className="w-fit px-10 justify-center items-center"
                            onPress={() => {onClose(); onSuccess()}}
                        >
                            <ButtonText className={`text-white`}>
                            I'm ready to start
                            </ButtonText>
                        </Button>
                    </MyLinearGradient>
                </Box>
            </ModalBody>
        </ModalContent>
    </Modal>
    );
};

export default MembershipModal;