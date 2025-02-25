import { create } from 'zustand';

interface PinState {
    pin: string;
    setPin: (digit: string) => void;
    clearPin: () => void;
    deleteLastDigit: () => void;
    }

    const usePinStore = create<PinState>((set) => ({
    pin: '',
    setPin: (digit) =>
        set((state) => ({
        pin: state.pin.length < 4 ? state.pin + digit : state.pin,
        })),
    clearPin: () => set({ pin: '' }),
    deleteLastDigit: () =>
        set((state) => ({
        pin: state.pin.slice(0, -1),
        })),
}));

export default usePinStore;
