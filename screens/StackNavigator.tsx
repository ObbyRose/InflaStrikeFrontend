import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import InvestmentsScreen from './InvestmentsScreen';
import NotificationsScreen from './NotificationsScreen';
import ProfileScreen from './ProfileScreen';
import SavingsScreen from './SavingsScreen';
import SettingsScreen from './SettingsScreen';
import TokenScreen from './TokenScreen';
import TransactionsScreen from './transactions/TransactionsScreen';
import Layout from './Layout';
import ChatScreen from './ChatScreen';
import Login from './auth/Login';
import Signup from './auth/Signup';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Layout>
        <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen
            name="Investment"
            component={InvestmentsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Notifications"
            component={NotificationsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Savings" component={SavingsScreen} options={{ headerShown: false }} />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Token" component={TokenScreen} />
          <Stack.Screen
            name="Transactions"
            component={TransactionsScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </Layout>
    </NavigationContainer>
  );
};

export default StackNavigator;
