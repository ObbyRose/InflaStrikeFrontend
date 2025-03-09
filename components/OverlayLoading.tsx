import React, { useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import { Portal } from 'react-native-paper';
import { Box } from './ui/box';
import { useTheme } from '@/utils/Themes/ThemeProvider';

const OverlayLoading = () => {
    const { appliedTheme } = useTheme();
    const animations = [new Animated.Value(0), new Animated.Value(0), new Animated.Value(0)];

    const animateDots = () => {
        const animationsSequence = animations.map((dotAnimation, index) =>
            Animated.timing(dotAnimation, {
                toValue: 1,
                duration: 250,
                delay: index * 200,
                easing: Easing.bezier(0.175, 0.385, 0.82, 1.275),
                useNativeDriver: true,
            })
        );

        Animated.sequence([
            Animated.parallel(animations.map(dotAnimation =>
                Animated.timing(dotAnimation, {
                    toValue: 0,
                    duration: 0,
                    useNativeDriver: true,
                })
            )),
            
            ...animationsSequence,
            
            Animated.delay(150),
        ]).start(() => {
            animateDots();
        });
    };

    useEffect(() => {
        animateDots();
        
        return () => {
            animations.forEach(dotAnimation => dotAnimation.stopAnimation());
        };
    }, []);
    
    const translateY = animations.map(dotAnimation =>
        dotAnimation.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, -10, 0],
        })
    );

    return (
        <Portal>
            <Box className='absolute inset-0 z-[1000] bg-overlay justify-center items-center'>
                <Box className={`w-24 h-24 bg-card-${appliedTheme} rounded-full flex-row justify-evenly items-center px-2`}>
                    <Animated.View style={{ transform: [{ translateY: translateY[0] }] }}>
                        <Box className='h-4 w-4 bg-purple-50 rounded-full'/>
                    </Animated.View>
                    
                    <Animated.View style={{ transform: [{ translateY: translateY[1] }] }}>
                        <Box className='h-4 w-4 bg-purple-300 rounded-full'/>
                    </Animated.View>
                    
                    <Animated.View style={{ transform: [{ translateY: translateY[2] }] }}>
                        <Box className='h-4 w-4 bg-purple-600 rounded-full'/>
                    </Animated.View>
                </Box>
            </Box>
        </Portal>
    );
};

export default OverlayLoading;
