import { create } from 'zustand';

interface DataState {
    isDataLoaded: boolean;
    setDataLoaded: (loaded: boolean) => void;
}

export const useDataStore = create<DataState>((set) => ({
    isDataLoaded: false,
    setDataLoaded: (loaded) => set({ isDataLoaded: loaded }),
}));
