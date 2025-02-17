import './global.css';
import 'react-native-gesture-handler';
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

import StackNavigator from 'screens/StackNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider mode="light">
        <StackNavigator />
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
}
