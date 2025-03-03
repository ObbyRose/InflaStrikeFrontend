import { View, Text } from 'react-native'
import React from 'react'
import { blue } from 'react-native-reanimated/lib/typescript/Colors'
import { LinearGradient } from '../ui/linear-gradient';
import { cn } from '../ui/cn';
import { Button } from 'react-native';

interface MyLinearGradientProps {
  type: "button" | "background";
  color: "blue" | "purple" | "blue-purple" | "light-blue";
  children: React.ReactNode;
}

const MyLinearGradient = ({ children, type, color}: MyLinearGradientProps) => {

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
        
        
        "default": { colors: ["#0091FF", "#00C3FF"], start: [0, 0], end: [1, 1] }
    };
    return gradientPositions[color] || gradientPositions["default"];
  }

  return (
    <LinearGradient
      className={cn("w-full",`
        ${type === "button" ? "rounded-3xl p-2 h-fit items-center" : ""}
        ${type === "background" ? "" : ""}
        `)}
        {...getOptions(color)}
      
    >
      {modifiedChildren}
    </LinearGradient>
  )
}

export default MyLinearGradient