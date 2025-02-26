import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
//@ts-ignore
import { GOOGLE_MAP_API_KEY } from '@env';
import { Box } from '../ui/box';
import { StyleSheet } from 'react-native';

interface GooglePlacesInputProps {
    setAddress: React.Dispatch<React.SetStateAction<{}>>
}

const GooglePlacesInput = ({ setAddress }: GooglePlacesInputProps) => {
    return (
        <Box style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder="Search"
                onPress={(data, details = null) => {
                    setAddress(data);
                }}
                query={{
                    key: GOOGLE_MAP_API_KEY,
                    language: 'en',
                }}
                styles={{
                    textInput: styles.input,
                    container: styles.autocompleteContainer,
                    listView: styles.listView,
                }}
            />
        </Box>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
        flex: 1
    },
    autocompleteContainer: {
        flex: 1,
        borderRadius: 12,
    },
    input: {
        height: 48,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 12,
        paddingLeft: 12,
        fontSize: 16,
        backgroundColor: 'white',
    },
    listView: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 16,
        marginTop: 4,
    },
});

export default GooglePlacesInput;