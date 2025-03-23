import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { lazy, Suspense, useEffect, useState } from 'react';
import OverlayLoading from '@/components/OverlayLoading';
import { useDataStore } from '@/context/dataStore';
import { handleSQLiteIInsert } from '@/utils/api/internal/sql/handleSQLite';
import React from 'react';
import { useFocusEffect } from '@react-navigation/native';

// 🚀 Lazy Load Screens (Except Settings, which loads instantly)
const ChatScreen = lazy(() => import('./ChatScreen'));
const CoinScreen = lazy(() => import('./market/CoinScreen'));
const PortfolioScreen = lazy(() => import('./PortfolioScreen'));
const ExchangeScreen = lazy(() => import('./ExchangeScreen'));

// 📌 Regular Imports (SettingsScreen Now Loads Instantly)
import HomeScreen from './HomeScreen';
import InvestmentsScreen from './InvestmentsScreen';
import NotificationsScreen from './NotificationsScreen';
import ProfileScreen from './Profile/ProfileScreen';
import TokenScreen from './TokenScreen';
import TransactionsScreen from './transactions/TransactionsScreen';
import Layout from './Layout';
import Login from './auth/Login';
import Signup from './auth/Signup';
import PreferencesScreen from './settings/PreferencesScreen';
import SupportScreen from './SupportScreen';
import NotificationSettingsScreen from './settings/NotificationSettingsScreen';
import MarketsScreen from './market/MarketsScreen';
import ProfileSettingsScreen from './settings/ProfileSettingsScreen';
import PaymentMethodScreen from './paymentMethods/PaymentMethodScreen';
import LinkYourCardScreen from './paymentMethods/LinkYourCardScreen';
import PaymentMethodAddedScreen from './paymentMethods/PaymentMethodAddedScreen';
import SecuritySettingsScreen from './settings/securitySettings/SecuritySettingsScreen';
import PinSettingsScreen from './settings/securitySettings/PinSettingsScreen';
import PasswordSettingsScreen from './settings/securitySettings/PasswordSettingsScreen';
import ChangePinScreen from './PinScreen/ChangePinScreen';
import CreatePinScreen from './PinScreen/CreatePinScreen';
import ConfirmPinScreen from './PinScreen/ConfirmPinScreen';
import EnterChangePinScreen from './PinScreen/EnterChangePinScreen';
import VerifyIdentity from './idVerification/VerifyIdentity';
import TouchId from './idVerification/TouchId';
import FaceId from './idVerification/FaceId';
import TothorScreen from './TothorScreen';
import SimulatorScreen from './SimulatorScreen';
import testscreen from './testscreen';
import SettingsScreen from './settings/SettingsScreen';
import { useNavigation as useReactNavigation } from '@react-navigation/native';
import { TNavigation } from '../types/NavigationTypes';

const MemoizedLayout = React.memo(Layout);

const Stack = createStackNavigator();

const useFetchMarketData = () => {
  const { isDataLoaded, setDataLoaded, setData } = useDataStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const newData = await handleSQLiteIInsert();
        if (isMounted) {
          setData(newData);
          setDataLoaded(true);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching market data:', error);
      }
    };

    fetchData();

    const interval = setInterval(() => {
      if (isMounted) fetchData();
    }, 60000);

    return () => {
      clearInterval(interval);
      isMounted = false;
    };
  }, [setData, setDataLoaded]);

  return { loading, isDataLoaded };
};

const InvestmentsScreenWrapper = () => {
  const [data, setData] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      console.log("📌 Investment Screen Mounted");

      return () => {
        console.log("📌 Investment Screen Unmounted");
        setData([]); // Clears state when unmounted
      };
    }, [])
  );

  function useNavigation(): TNavigation {
    return useReactNavigation<TNavigation>();
  }

  return <InvestmentsScreen navigation={useNavigation()} />;
};

// ✅ Main Stack Navigator
const StackNavigator = () => {
  const { loading, isDataLoaded } = useFetchMarketData();

  if (loading && !isDataLoaded) return <OverlayLoading />;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainApp"
        screenOptions={{
          detachPreviousScreen: true,
          headerShown: false,
        }}
      >
        {/* 🏆 Auth Screens */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="VerifyIdentity" component={VerifyIdentity} />

        {/* 🏆 Main App with Layout */}
        <Stack.Screen name="MainApp" options={{ headerShown: false }}>
          {({ navigation }) => (
            <MemoizedLayout navigation={navigation}>
              <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                  headerShown: false,
                  detachPreviousScreen: true,
                }}
              >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Investment" component={InvestmentsScreenWrapper} />
                <Stack.Screen name="Notifications" component={NotificationsScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Tothor" component={TothorScreen} />
                <Stack.Screen name="Markets" component={MarketsScreen} />
                <Stack.Screen name="Token" component={TokenScreen} />
                <Stack.Screen name="Transactions" component={TransactionsScreen} />
                <Stack.Screen name="Portfolio" component={PortfolioScreen} />
                <Stack.Screen name="Simulator" component={SimulatorScreen} />
                <Stack.Screen name="test" component={testscreen} />

                {/* 🚀 Lazy Loaded Screens (Except Settings) */}
                <Stack.Screen name="Chat">
                  {() => (
                    <Suspense fallback={<OverlayLoading />}>
                      <ChatScreen navigation={navigation} />
                    </Suspense>
                  )}
                </Stack.Screen>

                <Stack.Screen name="Coin">
                  {() => (
                    <Suspense fallback={<OverlayLoading />}>
                      <CoinScreen />
                    </Suspense>
                  )}
                </Stack.Screen>

                <Stack.Screen name="TradingHistory">
                  {() => (
                    <Suspense fallback={<OverlayLoading />}>
                      <ExchangeScreen />
                    </Suspense>
                  )}
                </Stack.Screen>
              </Stack.Navigator>
            </MemoizedLayout>
          )}
        </Stack.Screen>

        {/* 🏆 Settings Screens (Instant Load) */}
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Preferences" component={PreferencesScreen} />
        <Stack.Screen name="Support" component={SupportScreen} />
        <Stack.Screen name="NotificationSettings" component={NotificationSettingsScreen} />
        <Stack.Screen name="ProfileSettings" component={ProfileSettingsScreen} />
        <Stack.Screen name="PaymentMethod" component={PaymentMethodScreen} />
        <Stack.Screen name="LinkYourCard" component={LinkYourCardScreen} />
        <Stack.Screen name="PaymentMethodAdded" component={PaymentMethodAddedScreen} />
        <Stack.Screen name="SecuritySettings" component={SecuritySettingsScreen} />
        <Stack.Screen name="PinSettings" component={PinSettingsScreen} />
        <Stack.Screen name="PasswordSettings" component={PasswordSettingsScreen} />
        <Stack.Screen name="CreatePin" component={CreatePinScreen} />
        <Stack.Screen name="ConfirmPin" component={ConfirmPinScreen} />
        <Stack.Screen name="EnterChangePin" component={EnterChangePinScreen} />
        <Stack.Screen name="ChangePin" component={ChangePinScreen} />
        <Stack.Screen name="TouchId" component={TouchId} />
        <Stack.Screen name="FaceId" component={FaceId} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
