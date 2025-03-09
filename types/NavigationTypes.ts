import { Address } from "./other";

export type Props = {
    navigation: any;
    route?: any;
}

export type signUpInputs = "fName" | "lName" | "birthday" | "ssn" | "api" |"pass" | "address" | "phoneNumber" | "phonePrefix" | "email";

export type SignUpScreensProps = {
    handleScreenChange: (newScreenStep: 'back' | 'next' | string, fromEdit?: boolean) => void;
    formHook: {
        values: {
            phonePrefix: string;
            phoneNumber: string;
            email: string;
            pass: string;
            address: Address;
            fName: string;
            lName: string;
            birthday: string;
            ssn: string;
            api: string;
        };
        errors: Record<signUpInputs, string>;
        handleInputChange: (field: signUpInputs, val: string | boolean | Address | null) => void;
        setErrorByFields: (errors: Partial<Record<signUpInputs, string>>) => void;
        setErrors: React.Dispatch<
            React.SetStateAction<Record<signUpInputs, string>>
        >;
    };
}

export type idVerifyTypes = {
    type: "ID Card" | "Driver's License" | 'Passport';
}

export type idVerifyProps = {
    handleScreenChange: (newScreenStep: 'back' | 'next' | string, data?: any) => void;
    finalData? : idVerifyTypes;
}

export type TTheme = "light" | "dark";
