import './global.css';
import 'react-native-gesture-handler';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import StackNavigator from '@screens/StackNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './utils/Themes/ThemeProvider';
import { ToastProvider } from '@gluestack-ui/toast';
import 'react-native-get-random-values';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <PaperProvider>
          <GluestackUIProvider>
            <ToastProvider>
              <StackNavigator />
            </ToastProvider>
          </GluestackUIProvider>
        </PaperProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
