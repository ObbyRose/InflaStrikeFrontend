export type Props = {
    navigation: any;
    route?: any;
}

export type SignUpScreensProps = {
    handleScreenChange: (newScreenStep: number | 'next', data?: any) => void;
}
export type TTheme = "light" | "dark";
