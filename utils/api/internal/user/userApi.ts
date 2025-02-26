// signup.js
import axios from 'axios';

//@ts-ignore
import { BASE_API_URL } from '@env';
import { GooglePlaceData } from 'react-native-google-places-autocomplete';

interface loginUserReq {
    email: string,
    password: string;
}

interface loginUserRes {
    // userId: ;
}

export const loginUser  = async ({email, password} : loginUserReq) => {
    try {
        const response = await axios.post(`${BASE_API_URL}/auth/login`, {
            email, password
        });

        console.log('Login successful:', response.data as loginUserRes);
        return response.data;
    } catch (error) {
        console.error('Login error:', error);
        // throw error;
    }
};

interface registerUserReq {
    fName: string,
    lName: string,
    email: string,
    password: string;
}

interface registerUserRes {
    userId: string;
}

export const registerUser  = async ({fName, lName, email, password} : registerUserReq) => {
    try {
        const response = await axios.post(`${BASE_API_URL}/auth`, {
            fName, lName, email, password
        });

        console.log('Signup successful:', response.data as registerUserRes);
        return response.data;
    } catch (error) {
        console.error('Signup error:', error);
        // throw error;
    }
};

interface addPhoneNumberUserReq {
    userId: string;
    phoneNumber: string,
}

export const addPhoneNumber = async ({ userId, phoneNumber } : addPhoneNumberUserReq) => {
    try {
        const response = await axios.put(`${BASE_API_URL}/auth/phone`, {
            userId,
            phoneNumber
        });

        console.log('Adding phone successful: ', response.data);
        return response.data;
    } catch (error) {
        console.error('Adding phone: ', error);
        // throw error;
    }
};

interface addBirthdayAddressReq {
    userId: string;
    birthday: string,
    address: GooglePlaceData,
}

export const addBirthdayAddress = async ({ userId, birthday, address } : addBirthdayAddressReq) => {
    try {
        const response = await axios.put(`${BASE_API_URL}/auth/address_birthday`, {
            userId,
            birthday,
            address,
        });

        console.log('Adding birthday and address successful: ', response.data);
        return response.data;
    } catch (error) {
        console.error('Adding birthday and address: ', error);
        // throw error;
    }
};

interface sendIdFilesReq {
    userId: string;
    type: "ID Card" | "Driver's License" | 'Passport';
    frontPhoto: string,
    backPhoto?: string,
}

export const sendIdFiles = async ({ userId, type, frontPhoto, backPhoto } : sendIdFilesReq) => {
    try {
        const response = await axios.put(`${BASE_API_URL}/auth/file`, {
            userId,
            type,
            frontPhoto,
            backPhoto,
        });

        console.log('Files Confirmed successful: ', response.data);
        return response.data;
    } catch (error) {
        console.error('Files Confirmed and address: ', error);
        // throw error;
    }
};

