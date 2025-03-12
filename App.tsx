import './global.css';
import 'react-native-gesture-handler';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import StackNavigator from '@screens/StackNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './utils/Themes/ThemeProvider';
import { ToastProvider } from '@gluestack-ui/toast';
import 'react-native-get-random-values';
import { PaperProvider } from 'react-native-paper';
import { StatusBar } from 'react-native';

export default function App() {

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <PaperProvider>
          <GluestackUIProvider>
            <ToastProvider>
              <StackNavigator />
              <StatusBar backgroundColor="#5506FD" barStyle="light-content" />
            </ToastProvider>
          </GluestackUIProvider>
        </PaperProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
