import React, { createContext, useContext, useState, useEffect } from "react";
import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View } from "react-native";

const ThemeContext = createContext<{ theme: "light" | "dark"; toggleTheme: () => void } | undefined>(
    undefined
);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const systemTheme = useColorScheme();
    const [theme, setTheme] = useState<"light" | "dark">(systemTheme || "light");

    useEffect(() => {
        const loadTheme = async () => {
            const savedTheme = await AsyncStorage.getItem("theme");
            if (savedTheme) {
                setTheme(savedTheme as "light" | "dark");
            }
        };
        loadTheme();
    }, []);

    const toggleTheme = async () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        await AsyncStorage.setItem("theme", newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <View className={theme}>
                {children}
            </View>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
