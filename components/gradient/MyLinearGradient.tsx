import React from 'react';
import { LinearGradient as RNLinearGradient } from 'react-native-linear-gradient';
import { ViewStyle } from 'react-native';

interface LinearGradientProps {
  children?: React.ReactNode;
  variant?: 'light' | 'dark';
  colors?: string[];
  style?: ViewStyle;
}

export const LinearGradient: React.FC<LinearGradientProps> = ({
  children,
  variant = 'light',
  colors,
  style,
  ...props
}) => {
  return (
    <RNLinearGradient
      {...props}
      colors={colors || (variant === 'dark' ? ['#000C2D', '#0650FD'] : ['#0650FD', '#000C2D'])}
      style={[{ borderRadius: 24, padding: 14, alignItems: 'center', justifyContent: 'center' }, style]} // Ensure styling is applied
    >
      {children}
    </RNLinearGradient>
  );
};
