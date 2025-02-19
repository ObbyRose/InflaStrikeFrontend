import './global.css';
import 'react-native-gesture-handler';
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import StackNavigator from 'screens/StackNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './utils/Themes/ThemeProvider';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
      <GluestackUIProvider>
        <StackNavigator />
      </GluestackUIProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
