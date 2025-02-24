import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import InvestmentsScreen from './InvestmentsScreen';
import NotificationsScreen from './NotificationsScreen';
import ProfileScreen from './Profile/ProfileScreen';
import SavingsScreen from './SavingsScreen';
import SettingsScreen from './SettingsScreen';
import TokenScreen from './TokenScreen';
import TransactionsScreen from './transactions/TransactionsScreen';
import Layout from './Layout';
import ChatScreen from './ChatScreen';
import Login from './auth/Login';
import Signup from './auth/Signup';
import PreferencesScreen from './PreferencesScreen';
import SupportScreen from './SupportScreen';
import NotificationSettingsScreen from './NotificationSettingsScreen';
import MarketsScreen from './MarketsScreen';
import PortfolioScreen from './PortfolioScreen';
import ProfileSettingsScreen from './ProfileSettingsScreen';
import PaymentMethodScreen from './paymentMethods/PaymentMethodScreen';
import LinkYourCardScreen from './paymentMethods/LinkYourCardScreen';
import PaymentMethodAddedScreen from './paymentMethods/PaymentMethodAddedScreen';


const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainApp">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />

        <Stack.Screen name="MainApp" options={{ headerShown: false }}>
          {({ navigation }) => (
            <Layout navigation={navigation}>
              <Stack.Navigator initialRouteName="PaymentMethodAdded" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Investment" component={InvestmentsScreen} />
                <Stack.Screen name="Notifications" component={NotificationsScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Savings" component={SavingsScreen} />

                 {/*Settings Section */}
                <Stack.Screen name="Settings" component={SettingsScreen} />
                <Stack.Screen name="Preferences" component={PreferencesScreen} />
                <Stack.Screen name="Support" component={SupportScreen} />
                <Stack.Screen name="NotificationSettings" component={NotificationSettingsScreen} />
                <Stack.Screen name="ProfileSettings" component={ProfileSettingsScreen} />

                {/*Settings-Profile Settings-Payment Methods Section */}
                <Stack.Screen name="PaymentMethod" component={PaymentMethodScreen} />
                <Stack.Screen name="LinkYourCard" component={LinkYourCardScreen} />
                <Stack.Screen name="PaymentMethodAdded" component={PaymentMethodAddedScreen} />

                <Stack.Screen name="Markets" component={MarketsScreen} />
                <Stack.Screen name="Chat" component={ChatScreen} />
                <Stack.Screen name="Token" component={TokenScreen} />
                <Stack.Screen name="Transactions" component={TransactionsScreen} />
                <Stack.Screen name="Portfolio" component={PortfolioScreen} />
              </Stack.Navigator>
            </Layout>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
