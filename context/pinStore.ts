import { create } from 'zustand';

interface PinState {
    pin: string;
    setPin: (digit: string, onComplete?: (updatedPin: string) => void) => void;
    clearPin: () => void;
    deleteLastDigit: () => void;
}

const usePinStore = create<PinState>((set, get) => ({
    pin: '',
    setPin: (digit, onComplete) =>
        set((state) => {
            if (state.pin.length < 4) {
                const newPin = state.pin + digit;
                setTimeout(() => {
                    if (newPin.length === 4 && onComplete) {
                        onComplete(newPin); // Now correctly typed
                    }
                }, 0); // Ensure state is updated before checking
                return { pin: newPin };
            }
            return state;
        }),
    clearPin: () => set({ pin: '' }),
    deleteLastDigit: () =>
        set((state) => ({
            pin: state.pin.slice(0, -1),
        })),
}));

export default usePinStore;
