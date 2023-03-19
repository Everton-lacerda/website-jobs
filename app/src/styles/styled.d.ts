import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            primary: string,
            secondary: string,
            tertiary: string,

            white: string,
            black: string,
            gray: string,

            success: "#62C114",
            borderSuccess: "#4B9710",
            info: "#38BDF8",
            borderInfo: "#0EA5E9",
            warning: string,
        },
    }
}