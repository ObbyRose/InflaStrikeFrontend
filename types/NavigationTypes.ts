export type Props = {
    navigation: any;
}

export type SignUpScreensProps = {
    appliedTheme: "light" | "dark";
    setScreenStep: React.Dispatch<React.SetStateAction<number>>;
}