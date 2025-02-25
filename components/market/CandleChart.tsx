import React from 'react';
import { CandlestickChart } from 'react-native-wagmi-charts';
import { Box } from '../ui/box';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import { Dimensions } from 'react-native';


const data = [
    { timestamp: 1625945400000, open: 33575.25, high: 33600.52, low: 33475.12, close: 33520.11 },
    { timestamp: 1625946300000, open: 33545.25, high: 33560.52, low: 33510.12, close: 33520.11 },
    { timestamp: 1625947200000, open: 33510.25, high: 33515.52, low: 33250.12, close: 33250.11 },
    { timestamp: 1625948100000, open: 33215.25, high: 33430.52, low: 33215.12, close: 33420.11 },
    { timestamp: 1625949000000, open: 33420.11, high: 33550.88, low: 33390.22, close: 33510.75 },
    { timestamp: 1625949900000, open: 33510.75, high: 33620.30, low: 33480.15, close: 33595.40 },
    { timestamp: 1625950800000, open: 33595.40, high: 33700.90, low: 33580.60, close: 33680.20 },
    { timestamp: 1625951700000, open: 33680.20, high: 33750.55, low: 33650.35, close: 33720.80 },
    { timestamp: 1625952600000, open: 33720.80, high: 33800.10, low: 33690.70, close: 33780.45 },
    { timestamp: 1625953500000, open: 33780.45, high: 33850.65, low: 33760.25, close: 33830.90 },
    { timestamp: 1625954400000, open: 33830.90, high: 33900.20, low: 33810.50, close: 33880.30 },
    { timestamp: 1625955300000, open: 33880.30, high: 33950.80, low: 33860.10, close: 33930.70 },
    { timestamp: 1625956200000, open: 33930.70, high: 34000.40, low: 33910.30, close: 33980.55 },
    { timestamp: 1625957100000, open: 33980.55, high: 34050.95, low: 33960.65, close: 34030.20 },
    { timestamp: 1625958000000, open: 34030.20, high: 34100.50, low: 34010.80, close: 34080.60 },
    { timestamp: 1625958900000, open: 34080.60, high: 34150.10, low: 34060.40, close: 34130.90 },
    { timestamp: 1625959800000, open: 34130.90, high: 34200.70, low: 34110.20, close: 34180.35 },
    { timestamp: 1625960700000, open: 34180.35, high: 34250.30, low: 34160.90, close: 34230.80 },
    { timestamp: 1625961600000, open: 34230.80, high: 34300.95, low: 34210.55, close: 34280.20 },
    { timestamp: 1625962500000, open: 34280.20, high: 34350.50, low: 34260.80, close: 34330.60 },
    { timestamp: 1625963400000, open: 34330.60, high: 34400.10, low: 34310.40, close: 34380.90 },
    { timestamp: 1625964300000, open: 34380.90, high: 34450.70, low: 34360.20, close: 34430.35 },
    { timestamp: 1625965200000, open: 34430.35, high: 34500.30, low: 34410.90, close: 34480.80 },
    { timestamp: 1625966100000, open: 34480.80, high: 34550.95, low: 34460.55, close: 34530.20 },
    { timestamp: 1625967000000, open: 34530.20, high: 34600.50, low: 34510.80, close: 34580.60 },
    { timestamp: 1625967900000, open: 34580.60, high: 34650.10, low: 34560.40, close: 34630.90 },
    { timestamp: 1625968800000, open: 34630.90, high: 34700.70, low: 34610.20, close: 34680.35 },
    { timestamp: 1625969700000, open: 34680.35, high: 34750.30, low: 34660.90, close: 34730.80 },
    { timestamp: 1625970600000, open: 34730.80, high: 34800.95, low: 34710.55, close: 34780.20 },
    { timestamp: 1625971500000, open: 34780.20, high: 34850.50, low: 34760.80, close: 34830.60 }
]

const CandleChartComponent = () => {
    const { appliedTheme } = useTheme();
    const { width } = Dimensions.get('window');

    return (
    <CandlestickChart.Provider data={data}>
        <Box className=" mx-auto h-fit">
            <CandlestickChart width={width*0.95} height={200}>
                <CandlestickChart.Candles />
                <CandlestickChart.Crosshair color="#3949AB">
                <CandlestickChart.Tooltip />
                </CandlestickChart.Crosshair>
            </CandlestickChart>
            
            <Box className='flex-row'>
                <CandlestickChart.PriceText type="open"/>
                <CandlestickChart.PriceText type="high"/>
                <CandlestickChart.PriceText type="low"/>
                <CandlestickChart.PriceText type="close"/>
                <CandlestickChart.DatetimeText />
            </Box>
        </Box>
    </CandlestickChart.Provider>
    );
};


export default CandleChartComponent;
