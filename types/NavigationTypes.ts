export type Props = {
    navigation: any;
    route?: any;
}

export type SignUpScreensProps = {
    handleScreenChange: (newScreenStep: 'back' | 'next', data?: any) => void;
}
export type TTheme = "light" | "dark";
