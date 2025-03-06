import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import InvestmentsScreen from './InvestmentsScreen';
import NotificationsScreen from './NotificationsScreen';
import ProfileScreen from './Profile/ProfileScreen';
import SavingsScreen from './SavingsScreen';
import SettingsScreen from './settings/SettingsScreen';
import TokenScreen from './TokenScreen';
import TransactionsScreen from './transactions/TransactionsScreen';
import Layout from './Layout';
import ChatScreen from './ChatScreen';
import Login from './auth/Login';
import Signup from './auth/Signup';
import PreferencesScreen from './settings/PreferencesScreen';
import SupportScreen from './SupportScreen';
import NotificationSettingsScreen from './settings/NotificationSettingsScreen';
import MarketsScreen from './market/MarketsScreen';
import PortfolioScreen from './PortfolioScreen';
import ProfileSettingsScreen from './settings/ProfileSettingsScreen';
import PaymentMethodScreen from './paymentMethods/PaymentMethodScreen';
import LinkYourCardScreen from './paymentMethods/LinkYourCardScreen';
import PaymentMethodAddedScreen from './paymentMethods/PaymentMethodAddedScreen';
import CoinScreen from './market/CoinScreen';
import SecuritySettingsScreen from './settings/securitySettings/SecuritySettingsScreen';
import PinSettingsScreen from './settings/securitySettings/PinSettingsScreen';
import PasswordSettings from './settings/securitySettings/PasswordSettingsScreen';
import PinScreen from './PinScreen/ChangePinScreen';
import ChangePinScreen from './PinScreen/ChangePinScreen';
import CreatePinScreen from './PinScreen/CreatePinScreen';
import ConfirmPinScreen from './PinScreen/ConfirmPinScreen';
import EnterChangePinScreen from './PinScreen/EnterChangePinScreen';
import testscreen from './testscreen';

const Stack = createStackNavigator();
const SettingsStack = createStackNavigator(); // New Stack for Settings Screens

// 🎯 New Stack for Settings Screens (Not Wrapped by Layout)
const SettingsNavigator = () => (
  <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
    <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    <SettingsStack.Screen name="Preferences" component={PreferencesScreen} />
    <SettingsStack.Screen name="Support" component={SupportScreen} />
    <SettingsStack.Screen name="NotificationSettings" component={NotificationSettingsScreen} />
    <SettingsStack.Screen name="ProfileSettings" component={ProfileSettingsScreen} />
    <SettingsStack.Screen name="PaymentMethod" component={PaymentMethodScreen} />
    <SettingsStack.Screen name="LinkYourCard" component={LinkYourCardScreen} />
    <SettingsStack.Screen name="PaymentMethodAdded" component={PaymentMethodAddedScreen} />
    <SettingsStack.Screen name="SecuritySettings" component={SecuritySettingsScreen} />
    <SettingsStack.Screen name="PinSettings" component={PinSettingsScreen} />
    <SettingsStack.Screen name="PasswordSettings" component={PasswordSettings} />
  <SettingsStack.Screen name="CreatePin" component={CreatePinScreen} />
  <SettingsStack.Screen name="ConfirmPin" component={ConfirmPinScreen} />
  <SettingsStack.Screen name="EnterChangePin" component={EnterChangePinScreen} />
  <SettingsStack.Screen name="ChangePin" component={ChangePinScreen} />
  </SettingsStack.Navigator>
);

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainApp">
        {/* Auth Screens */}
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />

        {/* Main App with Layout */}
        <Stack.Screen name="MainApp" options={{ headerShown: false }}>
          {({ navigation }) => (
            <Layout navigation={navigation}>
              <Stack.Navigator initialRouteName="Investment" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Investment" component={InvestmentsScreen} />
                <Stack.Screen name="test" component={testscreen} />
                <Stack.Screen name="Notifications" component={NotificationsScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Savings" component={SavingsScreen} />
                <Stack.Screen name="Markets" component={MarketsScreen} />
                <Stack.Screen name="Coin" component={CoinScreen} />
                <Stack.Screen name="Chat" component={ChatScreen} />
                <Stack.Screen name="Token" component={TokenScreen} />
                <Stack.Screen name="Transactions" component={TransactionsScreen} />
                <Stack.Screen name="Portfolio" component={PortfolioScreen} />
              </Stack.Navigator>
            </Layout>
          )}
        </Stack.Screen>

        {/* Separate Settings Stack (Not Wrapped by Layout) */}
        <Stack.Screen name="SettingsStack" component={SettingsNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
