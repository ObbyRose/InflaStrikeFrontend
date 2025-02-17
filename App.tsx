import './global.css';
import 'react-native-gesture-handler';
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

import StackNavigator from 'screens/StackNavigator';



export default function App() {
  return <GluestackUIProvider mode="light"><StackNavigator /></GluestackUIProvider>;
}
