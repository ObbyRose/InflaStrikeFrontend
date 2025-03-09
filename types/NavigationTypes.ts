export type Props = {
    navigation: any;
    route?: any;
}

export type SignUpScreensProps = {
    handleScreenChange: (newScreenStep: 'back' | 'next' | string, data?: any, fromEdit?: boolean) => void;
}
export type TTheme = "light" | "dark";
