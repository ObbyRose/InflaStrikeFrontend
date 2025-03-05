export interface GooglePlace {
    place_id: string;
    description: string;
    structured_formatting: {
        main_text: string;
        secondary_text: string;
    }
}

export interface Address {
    place_id: string | undefined;
    street: string | undefined;
    city: string | undefined;
    country: string | undefined;
    postal: string | undefined;
    coords: coords | undefined;
}

export interface coords {
    lat: number;
    lng: number
}
