import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//Screen imports
import HomeScreen from './screens/HomeScreen';
import TokenScreen from 'screens/TokenScreen';
import SavingsScreen from 'screens/SavingsScreen';
import InvestmentsScreen from 'screens/InvestmentsScreen';
import TransactionsScreen from 'screens/TransactionsScreen';
import SettingsScreen from 'screens/SettingsScreen';
import ProfileScreen from 'screens/ProfileScreen';
import NotificationsScreen from 'screens/NotificationsScreen';

export type RootStackParamList = {
    Home: undefined;
    Token: undefined;
    Savings: undefined;
    Investments: undefined;
    Transactions: undefined;
    Settings: undefined;
    Profile: undefined;
    Notification: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigation: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{  }} />
                <Stack.Screen name="Token" component={TokenScreen} />
                <Stack.Screen name="Savings" component={SavingsScreen} />
                <Stack.Screen name="Investments" component={InvestmentsScreen} />
                <Stack.Screen name="Transactions" component={TransactionsScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Notification" component={NotificationsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
