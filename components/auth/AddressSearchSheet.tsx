import React, { useState } from 'react';
import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetItem, ActionsheetItemText } from '@/components/ui/actionsheet';
import { Search, MapPin } from 'lucide-react-native';
import MapView, { Marker } from 'react-native-maps';

import { Box } from '../ui/box';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import { Text } from '../ui/text';
import { fetchAutocomplete } from '@/utils/api/external/GoogleAPI';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { IC_ChevronRight, IC_MapMarker } from '@/utils/constants/Icons';
import InputAuth from './InputAuth';
import { Divider } from 'react-native-paper';

interface GooglePlace {
    place_id: string;
    description: string;
    structured_formatting: {
        main_text: string;
        secondary_text: string;
    }
}

interface AddressSearchProps {
isOpen: boolean;
onClose: () => void;
setAddress: React.Dispatch<React.SetStateAction<{}>>;
}

const dummyData = {"description": "Nestroyplatz, Vienna, Austria", "matched_substrings": [{"length": 3, "offset": 0}], "place_id": "Eh1OZXN0cm95cGxhdHosIFZpZW5uYSwgQXVzdHJpYSIuKiwKFAoSCfHc0pAJB21HEQb8AFO9-yd-EhQKEgmfyjZRngdtRxFGW6JRiuXC_Q", "reference": "Eh1OZXN0cm95cGxhdHosIFZpZW5uYSwgQXVzdHJpYSIuKiwKFAoSCfHc0pAJB21HEQb8AFO9-yd-EhQKEgmfyjZRngdtRxFGW6JRiuXC_Q", "structured_formatting": {"main_text": "Nestroyplatz", "main_text_matched_substrings": [[Object]], "secondary_text": "Vienna, Austria"}, "terms": [{"offset": 0, "value": "Nestroyplatz"}, {"offset": 14, "value": "Vienna"}, {"offset": 22, "value": "Austria"}], "types": ["route", "geocode"]}

const AddressSearch = ({ isOpen, onClose, setAddress }: AddressSearchProps) => {
    const { appliedTheme } = useTheme();
    const [selectedPlace, setSelectedPlace] = useState<GooglePlace>(dummyData);

    const [query, setQuery] = useState('');
    const [results, setResults] = useState<GooglePlace[]>([dummyData,dummyData,dummyData,dummyData,dummyData,dummyData,dummyData]);
    const [isLoading, setIsLoading] = useState(false);
    
        const handleChange = async (text: string) => {
            setQuery(text);
            if (text.trim().length > 2) {
                setIsLoading(true);
                try {
                    const places: GooglePlace[] = await fetchAutocomplete(text);
                    setResults(places);
                } catch (error) {
                    console.error('Error while fetching autocomplete:', error);
                    setResults([]);
                } finally {
                    setIsLoading(false);
                }
            } else {
                setResults([]);
            }
        };

    return (
        <Actionsheet isOpen={isOpen} onClose={onClose} snapPoints={[80]} className='' >
            <ActionsheetBackdrop />
            <ActionsheetContent className={`bg-background-${appliedTheme}`}>
                <ActionsheetDragIndicatorWrapper>
                    <ActionsheetDragIndicator />
                </ActionsheetDragIndicatorWrapper>
                
                <Text className={`text-text-${appliedTheme} font-bold my-2 text-lg`}>
                    Search address
                </Text>

                <Box className='w-full flex-1 pb-10 gap-2'>
                    {/* Search Input */}
                    <InputAuth 
                        value={query}
                        onChangeText={handleChange}
                        placeholder="Street name only (no city or country)"
                        className='px-4'
                        classNameInput={`bg-buttonDisable-${appliedTheme}`}
                    />
                    {/* Map + Marker */}
                    <Box className='h-[100px] w-full bg-purple-100'>
                        <Text className='m-auto'>Map Placeholder</Text>
                        {selectedPlace && (
                            <Box className="flex-1">            
                                <MapView
                                    className="flex-1 rounded-xl bg-black"
                                    initialRegion={{
                                        latitude: 57.79506,
                                        longitude: 46.42026,
                                        latitudeDelta: 0.01,
                                        longitudeDelta: 0.01,
                                    }}
                                >
                                    <Marker
                                        coordinate={{
                                        latitude: 57.79506,
                                        longitude: 46.42026,
                                        }}
                                        title={selectedPlace.structured_formatting.main_text}
                                    />
                                </MapView>
                            </Box>
                        )}
                    </Box>
                    {/* Result list */}
                    {isLoading && <Text>Loading...</Text>}
                    <FlatList
                        className='px-4'
                        data={results}
                        keyExtractor={(item,idx) => item.place_id+idx}
                        renderItem={({ item }) => (
                            <TouchableOpacity className="flex-row items-center rounded-lg p-4">
                                <IC_MapMarker className='w-7 h-7'/>
                                <Box className="flex-1 ml-3">
                                    <Text className={`text-base font-semibold text-text-${appliedTheme}`}>
                                    {item.structured_formatting.main_text}
                                    </Text>
                                    <Text className={`text-sm text-subTextGray-${appliedTheme}`}>{item.structured_formatting.secondary_text}</Text>
                                </Box>
                                <IC_ChevronRight className='w-4 h-4' color="#5C616F"/>
                            </TouchableOpacity>
                        )}
                        ListEmptyComponent={!isLoading && query ? <Text>No results found</Text> : null}
                        ItemSeparatorComponent={() => <Divider className='mx-2' />}
                        showsVerticalScrollIndicator={false}
                    />
                </Box>

            </ActionsheetContent>
        </Actionsheet>
    );
};


const styles = StyleSheet.create({
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 12,
        marginBottom: 16,
        fontSize: 16,
    },
    item: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    itemText: {
        fontSize: 16,
    },
});

export default AddressSearch;