import { View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from '../ui/linear-gradient';
import { cn } from '../ui/cn';
import { useTheme } from '@/utils/Themes/ThemeProvider';

interface MyLinearGradientProps {
  type: "button" | "background" | "text";
  color: "blue" | "purple" | "blue-purple" | "light-blue" | "disabled-button" | "dark";
  children: React.ReactNode;
  className?: string;
}

const MyLinearGradient = ({ children, type, color, className}: MyLinearGradientProps) => {
  const { appliedTheme } = useTheme();

  const modifiedChildren = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      const childWithClassName = child as React.ReactElement<{ className?: string }>;

      // Apply only to the first child
      if (index === 0) {
        return React.cloneElement(childWithClassName, {
          className: cn(childWithClassName.props.className, "bg-transparent"),
        });
      }
    }
    return child;
  });

  function getOptions(color: MyLinearGradientProps["color"]) {
    // Define the start and end points for the gradient
    const gradientPositions = {
        "purple": { colors: ["#5506FD", "#330497"], start: [0, 1], end: [1, 0] },
        "blue": { colors: ["#0650FD", "#000C2D"], start: [0, 1], end: [1, 0]},
        "light-blue": { colors: ["#e8ebf5", "#fbfcff"], start: [0.5, 0], end: [0.5, 1], locations:[0.8, 1] },
        "blue-purple": { colors: ["#091abb", "#007ce6", "#00C3FF", "#00aeee", "#7072f3", "#7971f5"], start: [0, 0], end: [1, 1] },
        "disabled-button": { 
          colors: appliedTheme === "dark" ? ["#161C2C", "#161C2C"] : ["#E8EBEE", "#E8EBEE"],
          start: [0, 0], end: [1, 1] },
        "dark": { colors: ["#090D19", "#090D19"], start: [0, 0], end: [1, 1] },
        "default": { colors: ["#0091FF", "#00C3FF"], start: [0, 0], end: [1, 1] }
    };
    return gradientPositions[color] || gradientPositions["default"];
  }

  return (
    <LinearGradient
      className={cn("w-full",`
        ${type === "button" ? "rounded-full p-2 h-fit items-center" : ""}
        ${type === "background" ? "" : ""}
        `, className)}
        {...getOptions(color)}
      
    >
      {modifiedChildren}
    </LinearGradient>
  )
}

export default MyLinearGradient