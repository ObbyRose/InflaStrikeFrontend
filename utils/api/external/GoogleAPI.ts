//@ts-ignore
import { GOOGLE_MAP_API_KEY } from '@env';

export const fetchAutocomplete = async (query: string) => {
    const endpoint = `https://maps.googleapis.com/maps/api/place/autocomplete/json`;
    const params = new URLSearchParams({
        input: query,
        key: GOOGLE_MAP_API_KEY,
        types: 'address',
    });

    try {
        const response = await fetch(`${endpoint}?${params}`);
        const data = await response.json();
        if (data.status === 'OK') {
            return data.predictions;
        } else {
            console.error('Error fetching autocomplete results:', data.error_message);
            return [];
        }
    } catch (error) {
        console.error('Error fetching autocomplete data:', error);
        return [];
    }
};