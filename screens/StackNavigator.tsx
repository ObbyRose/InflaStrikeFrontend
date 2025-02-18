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

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Layout>
        <Stack.Navigator initialRouteName="Settings">
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen
            name="Investment"
            component={InvestmentsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Notification" component={NotificationsScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Savings" component={SavingsScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen}  options={{ headerShown: false }} />
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
