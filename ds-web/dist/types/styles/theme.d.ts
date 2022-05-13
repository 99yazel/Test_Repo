export declare const minMedia: (width: number) => string;
export declare const maxMedia: (width: number) => string;
export declare const mixMedia: (smallWidth: number, largeWidth: number) => string;
declare const myTheme: {
    medias: {
        mobile: string;
        pad: string;
        desktop: string;
    };
    flexSet: (justifyContent?: import("./type").TJustifyContent | undefined, alignItems?: import("./type").TAlignItems | undefined, flexDirection?: import("./type").TFlexDirection | undefined) => import("@emotion/react").SerializedStyles;
    fontSet: (fontSize: import("./type").TFontSize, fontWeight?: import("./type").TFontWeight, lineHeight?: number | undefined) => import("@emotion/react").SerializedStyles;
    minMedia: (width: number) => string;
    maxMedia: (width: number) => string;
    customScrollBar: () => import("@emotion/react").SerializedStyles;
    colors: import("./styled").colors;
    mode: string;
};
export declare type Theme = typeof myTheme;
export default myTheme;
