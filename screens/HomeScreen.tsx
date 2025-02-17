import React, { useState } from 'react';
import { Text, StyleSheet, Alert, ActivityIndicator, View } from 'react-native';
import { fetchBitcoinPrice } from '@/utils/api/BinanceAPI';
import { Props } from 'types/NavigationTypes';
import { Box } from '@/components/ui/box';
//UI Imports
// import { Box } from '@/components/ui/box';

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    const [bitcoinPrice, setBitcoinPrice] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    function getBitcoinPrice() {
        setLoading(true);
            fetchBitcoinPrice()
            .then((response) => {
                setBitcoinPrice(response.price);
            })
            .catch((error) => {
                console.error('Error fetching Bitcoin price', error);
                Alert.alert('Error fetching Bitcoin price');
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <Box className='bg-blue-500 h-full'>
            <Text style={styles.header}>Bitcoin Live Price</Text>
            {loading ? (
                <ActivityIndicator style= {styles.loader} size="large" color="#0000ff" />
            ) : (
                bitcoinPrice && Number(bitcoinPrice) !== 0 && (
                    <Text style={styles.price}>{"$" + Number(bitcoinPrice).toLocaleString()}</Text>
                )
            )}
        </Box>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 32,
        marginVertical: 20,
    },
    loader:{
        marginBottom: 20,
        marginTop: 20,
    }
});

export default HomeScreen;
