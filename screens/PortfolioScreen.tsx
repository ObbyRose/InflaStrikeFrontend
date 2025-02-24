import { Box } from '@/components/ui/box';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import { PieChart } from 'react-native-svg-charts';

const PortfolioScreen = () => {
  const widthAndHeight = 250;

  const data = [
    { key: 'Available Money', value: 1000, color: '#fbd203' },
    { key: 'Bitcoin', value: 500, color: '#ffb300' },
    { key: 'Ethereum', value: 200, color: '#ff9100' },
    { key: 'XRP', value: 100, color: '#ff6c00' },
  ];

  const totalValue = data.reduce((sum, slice) => sum + slice.value, 0);
  console.log('Total Pie Value:', totalValue);

  // Track which slice is selected
  const [selectedSlice, setSelectedSlice] = useState<string | null>(null);

  const getValueInPercentages = (value: number, totalValue: number) => {
    const percentageValue = (value / totalValue) * 100;
    return percentageValue;
  };

  const handleSlicePress = (label: string, value: number) => {
    Alert.alert(`${label}`, `Value: $${value.toFixed(2)}`);
    setSelectedSlice(label);
  };

  const pieData = data.map((slice) => ({
    key: String(slice.key), // Ensure key is a string
    value: getValueInPercentages(slice.value, totalValue),
    svg: {
      fill: slice.color,
      onPress: () => handleSlicePress(slice.key, slice.value),
    },
  }));

  return (
    
    <Box style={styles.container}>
      <Svg>
      {/* <Text style={styles.title}>Your Portfolio</Text> */}
      <PieChart
        style={{ height: widthAndHeight }}
        data={data.map((slice) => ({
          key: String(slice.key),
          value: getValueInPercentages(slice.value, totalValue),
          svg: {
            fill: slice.color,
            onPress: () => handleSlicePress(slice.key, slice.value), // Each slice is now pressable!
          },
        }))}
        innerRadius={50}
        outerRadius={100}
        />
      </Svg>

      {/* {selectedSlice && <Text style={styles.selectedSliceText}>Selected: {selectedSlice}</Text>} */}
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  selectedSliceText: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default PortfolioScreen;

// Error that was received after wrapping the PieChart in Svg: ⬇️
// Warning: Error: Exception in HostFunction: TypeError: expected dynamic type `string', but had type `boolean'

// This error is located at:
//     in RNSVGSvgView (created by Svg)
//     in Svg (created by PieChart)
//     in RCTView (created by View)
//     in View (created by CssInterop.View)
//     in CssInterop.View (created by PieChart)
//     in RCTView (created by View)
//     in View (created by CssInterop.View)
//     in CssInterop.View (created by PieChart)
//     in PieChart (created by PortfolioScreen)
//     in RNSVGGroup (created by G)
//     in G (created by Svg)
//     in RNSVGSvgView (created by Svg)
//     in Svg (created by PortfolioScreen)
//     in RCTView (created by View)
//     in View (created by CssInterop.View)
//     in CssInterop.View (created by PortfolioScreen)
//     in PortfolioScreen (created by SceneView)
//     in StaticContainer
//     in EnsureSingleNavigator (created by SceneView)
//     in SceneView (created by StackNavigator)
//     in RCTView (created by View)
//     in View (created by CardContainerInner)
//     in RCTView (created by View)
//     in View (created by CardContainerInner)
//     in RCTView (created by View)
//     in View
//     in CardSheet (created by Card)
//     in RCTView (created by View)
//     in View (created by CssInterop.View)
//     in CssInterop.View (created by Animated(View))
//     in Animated(View) (created by PanGestureHandler)
//     in PanGestureHandler (created by PanGestureHandler)
//     in PanGestureHandler (created by Card)
//     in RCTView (created by View)
//     in View (created by CssInterop.View)
//     in CssInterop.View (created by Animated(View))
//     in Animated(View) (created by Card)
//     in RCTView (created by View)
//     in View (created by Card)
//     in Card (created by CardContainerInner)
//     in CardContainerInner (created by CardStack)
//     in RNSScreen (created by Animated(Anonymous))
//     in Animated(Anonymous)
//     in Suspender (created by Freeze)
//     in Suspense (created by Freeze)
//     in Freeze (created by DelayedFreeze)
//     in DelayedFreeze
//     in InnerScreen (created by Screen)
//     in Screen (created by MaybeScreen)
//     in MaybeScreen (created by CardStack)
//     in RNSScreenContainer (created by ScreenContainer)
//     in ScreenContainer (created by MaybeScreenContainer)
//     in MaybeScreenContainer (created by CardStack)
//     in RCTView (created by View)
//     in View (created by CardStack)
//     in CardStack (created by HeaderShownContext)
//     in RCTView (created by View)
//     in View (created by SafeAreaProviderCompat)
//     in SafeAreaProviderCompat (created by StackView)
//     in RCTView (created by View)
//     in View (created by CssInterop.View)
//     in CssInterop.View (created by GestureHandlerRootView)
//     in GestureHandlerRootView (created by StackView)
//     in StackView (created by StackNavigator)
//     in PreventRemoveProvider (created by NavigationContent)
//     in NavigationContent
//     in Unknown (created by StackNavigator)
//     in StackNavigator (created by SceneView)
//     in RCTView (created by View)
//     in View (created by CssInterop.View)
//     in CssInterop.View (created by Layout)
//     in RNCSafeAreaView
//     in Unknown (created by CssInterop.unknown)
//     in CssInterop.unknown (created by Layout)
//     in Layout (created by SceneView)
//     in StaticContainer
//     in EnsureSingleNavigator (created by SceneView)
//     in SceneView (created by StackNavigator)
//     in RCTView (created by View)
//     in View (created by CardContainerInner)
//     in RCTView (created by View)
//     in View (created by CardContainerInner)
//     in RCTView (created by View)
//     in View
//     in CardSheet (created by Card)
//     in RCTView (created by View)
//     in View (created by CssInterop.View)
//     in CssInterop.View (created by Animated(View))
//     in Animated(View) (created by PanGestureHandler)
//     in PanGestureHandler (created by PanGestureHandler)
//     in PanGestureHandler (created by Card)
//     in RCTView (created by View)
//     in View (created by CssInterop.View)
//     in CssInterop.View (created by Animated(View))
//     in Animated(View) (created by Card)
//     in RCTView (created by View)
//     in View (created by Card)
//     in Card (created by CardContainerInner)
//     in CardContainerInner (created by CardStack)
//     in RNSScreen (created by Animated(Anonymous))
//     in Animated(Anonymous)
//     in Suspender (created by Freeze)
//     in Suspense (created by Freeze)
//     in Freeze (created by DelayedFreeze)
//     in DelayedFreeze
//     in InnerScreen (created by Screen)
//     in Screen (created by MaybeScreen)
//     in MaybeScreen (created by CardStack)
//     in RNSScreenContainer (created by ScreenContainer)
//     in ScreenContainer (created by MaybeScreenContainer)
//     in MaybeScreenContainer (created by CardStack)
//     in RCTView (created by View)
//     in View (created by CardStack)
//     in CardStack (created by HeaderShownContext)
//     in RCTView (created by View)
//     in View (created by SafeAreaProviderCompat)
//     in SafeAreaProviderCompat (created by StackView)
//     in RCTView (created by View)
//     in View (created by CssInterop.View)
//     in CssInterop.View (created by GestureHandlerRootView)
//     in GestureHandlerRootView (created by StackView)
//     in StackView (created by StackNavigator)
//     in PreventRemoveProvider (created by NavigationContent)
//     in NavigationContent
//     in Unknown (created by StackNavigator)
//     in StackNavigator (created by StackNavigator)
//     in ThemeProvider
//     in EnsureSingleNavigator
//     in BaseNavigationContainer
//     in NavigationContainerInner (created by StackNavigator)
//     in StackNavigator (created by App)
//     in ToastProvider (created by GluestackUIProvider)
//     in PortalProvider (created by GluestackUIProvider)
//     in RCTView (created by View)
//     in View (created by CssInterop.View)
//     in CssInterop.View (created by GluestackUIProvider)
//     in GluestackUIProvider (created by App)
//     in RCTView (created by View)
//     in View (created by CssInterop.View)
//     in CssInterop.View (created by ThemeProvider)
//     in ThemeProvider (created by App)
//     in SafeAreaEnv (created by SafeAreaProviderShim)
//     in RNCSafeAreaProvider (created by SafeAreaProvider)
//     in SafeAreaProvider (created by SafeAreaProviderShim)
//     in SafeAreaProviderShim (created by App)
//     in App (created by withDevTools(App))
//     in withDevTools(App)
//     in RCTView (created by View)
//     in View (created by CssInterop.View)
//     in CssInterop.View (created by AppContainer)
//     in RCTView (created by View)
//     in View (created by CssInterop.View)
//     in CssInterop.View (created by AppContainer)
//     in AppContainer
//     in main(RootComponent)
// ⬆️

// const pieData: PieChartData[] = [
//   {
//     key: 'slice1',
//     value: 40,
//     svg: {
//       fill: 'red',
//       onPress: () => console.log('Slice 1 clicked!'),
//     },
//   },
//   {
//     key: 'slice2',
//     value: 30,
//     svg: {
//       fill: 'blue',
//       onPress: () => console.log('Slice 2 clicked!'),
//     },
//   },
//   {
//     key: 'slice3',
//     value: 20,
//     svg: {
//       fill: 'green',
//       onPress: () => console.log('Slice 3 clicked!'),
//     },
//   },
// ];

// <PieChart style={{ height: 200 }} data={pieData} innerRadius={'50%'} outerRadius={'100%'} />;
