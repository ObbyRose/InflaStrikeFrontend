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
                if (newPin.length === 4 && onComplete) {
                    setTimeout(() => onComplete(newPin), 0);
                }
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
