import React, { useState } from 'react';
import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetItem, ActionsheetItemText } from '@/components/ui/actionsheet';
import { Search, MapPin } from 'lucide-react-native';
import MapView, { Marker } from 'react-native-maps';

import { Box } from '../ui/box';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import { Text } from '../ui/text';
import { fetchAutocomplete, getCoordinatesAndPostalByPlaceId } from '@/utils/api/external/GoogleAPI';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { IC_ChevronRight, IC_CurrentLocation, IC_MapMarker } from '@/utils/constants/Icons';
import InputAuth from './InputAuth';
import { Divider } from 'react-native-paper';
import { Address, coords, GooglePlace } from '@/types/other';

interface AddressSearchProps {
isOpen: boolean;
onClose: () => void;
setAddress: React.Dispatch<React.SetStateAction<Address | null>>;
}

const dummyData = {"description": "Nestroyplatz, Vienna, Austria", "matched_substrings": [{"length": 3, "offset": 0}], "place_id": "Eh1OZXN0cm95cGxhdHosIFZpZW5uYSwgQXVzdHJpYSIuKiwKFAoSCfHc0pAJB21HEQb8AFO9-yd-EhQKEgmfyjZRngdtRxFGW6JRiuXC_Q", "reference": "Eh1OZXN0cm95cGxhdHosIFZpZW5uYSwgQXVzdHJpYSIuKiwKFAoSCfHc0pAJB21HEQb8AFO9-yd-EhQKEgmfyjZRngdtRxFGW6JRiuXC_Q", "structured_formatting": {"main_text": "Nestroyplatz", "main_text_matched_substrings": [[Object]], "secondary_text": "Vienna, Austria"}, "terms": [{"offset": 0, "value": "Nestroyplatz"}, {"offset": 14, "value": "Vienna"}, {"offset": 22, "value": "Austria"}], "types": ["route", "geocode"]}

const AddressSearch = ({ isOpen, onClose, setAddress }: AddressSearchProps) => {
    const { appliedTheme } = useTheme();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<GooglePlace[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedPlace, setSelectedPlace] = useState<GooglePlace | null>(null);
    const [mapRegion, setMapRegion] = useState({
        latitude: 32.0853,
        longitude: 34.7818,
        latitudeDelta: 0.03,
        longitudeDelta: 0.03,
    });

    // Handle search input
    const handleChange = async (text: string) => {
        setQuery(text);
        if (text.trim().length > 2) {
            setIsLoading(true);
            try {
                const places: GooglePlace[] = await fetchAutocomplete(text);
                setResults(places);

                // If results exist, auto-select first place and fetch coordinates
                if (places.length > 0) {
                    handleShowOnMap(places[0]);
                }
            } catch (error) {
                console.error('Error fetching autocomplete:', error);
                setResults([]);
            } finally {
                setIsLoading(false);
            }
        } else {
            setResults([]);
        }
    };

    const handleShowOnMap = async (place: GooglePlace) => {
        setSelectedPlace(place);

        try {
            const results = await getCoordinatesAndPostalByPlaceId(place.place_id);
            const coords = results.geometry.location ? 
                { lat : results.geometry.location.lat, lng: results.geometry.location.lng} as coords : undefined;
            if (coords) {
                setMapRegion({
                    latitude: coords.lat,
                    longitude: coords.lng,
                    latitudeDelta: 0.03,
                    longitudeDelta: 0.03,
                });
            }
            return { coords, address_components: results.address_components};
        } catch (error) {
            console.error('Error fetching place coordinates:', error);
        }
    };

    const handleSelectPlace = async (place: GooglePlace) => {
        const { coords, address_components } = await handleShowOnMap(place) || {};
        const [ city, country ] = selectedPlace?.structured_formatting.secondary_text.split(", ") || [];

        const postalCodeComponent = address_components.find((component:any) =>
            component.types.includes("postal_code")
        );
        const postal = postalCodeComponent ? postalCodeComponent.long_name : null;

        setAddress({
            place_id: selectedPlace?.place_id,
            street: selectedPlace?.structured_formatting.main_text,
            city,
            country,
            postal,
            coords
        });
        onClose();
    };

    return (
        <Actionsheet isOpen={isOpen} onClose={onClose} snapPoints={[85]} className='' >
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
                    <Box className='px-4 -mt-2 mb-2'>
                        <TouchableOpacity 
                        className='flex-row items-center gap-2'
                        onPress={() => {}}
                        activeOpacity={0.6}
                        >
                            <IC_CurrentLocation className="w-5 h-5"/>
                            <Text className='text-lg font-semibold text-purple-500'>Current location</Text>
                        </TouchableOpacity>
                    </Box>
                    {/* Map + Marker */}
                    <Box className='h-[170px] w-full'>
                            <Box className="flex-1 ">            
                                <MapView
                                    className=""
                                    style={{ width: '100%', height: '100%'}}
                                    region={mapRegion}
                                    
                                >
                                    {selectedPlace && 
                                    <Marker
                                        coordinate={{
                                            latitude: mapRegion.latitude,
                                            longitude: mapRegion.longitude,
                                        }}
                                        title={selectedPlace?.structured_formatting.main_text || ""}
                                    />
                                }
                                </MapView>
                            </Box>
                    </Box>
                    {/* Result list */}
                    
                    <Box className='flex-1 p-4'>
                        <Text className={`text-2xl font-bold text-text-${appliedTheme} mb-1`}>Address</Text>
                        {isLoading && <Text>Loading...</Text>}
                        <FlatList
                            data={results}
                            keyExtractor={(item,idx) => item.place_id+idx}
                            renderItem={({ item: place }) => (
                                <TouchableOpacity className="flex-row items-center rounded-lg py-4"
                                    onPress={() => handleSelectPlace(place)}
                                    activeOpacity={0.6}
                                >
                                    <IC_MapMarker className='w-7 h-7'/>
                                    <Box className="flex-1 ml-3">
                                        <Text className={`text-base font-semibold text-text-${appliedTheme}`}>
                                        {place.structured_formatting.main_text}
                                        </Text>
                                        <Text className={`text-sm text-subTextGray-${appliedTheme}`}>{place.structured_formatting.secondary_text}</Text>
                                    </Box>
                                    <IC_ChevronRight className='w-4 h-4' color="#5C616F"/>
                                </TouchableOpacity>
                            )}
                            ListEmptyComponent={ !query ? <Text>Start searching...</Text> :
                                !isLoading ? <Text>No results found</Text> : null}
                            ItemSeparatorComponent={() => <Divider className='mx-2' />}
                            showsVerticalScrollIndicator={false}
                        />
                    </Box>
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