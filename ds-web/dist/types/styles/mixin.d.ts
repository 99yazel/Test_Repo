/**
 * Author : Ryan
 * Date : 2021-03-12
 * Desc : Mixin, Reusable Features
 */
import { TJustifyContent, TAlignItems, TFlexDirection, TFontSize, TFontWeight } from "./type";
/**
 * Font css 묶음
 * - font-size
 * - font-weight(기본400)
 * - line-height(생략가능)
 */
export declare const fontSet: (fontSize: TFontSize, fontWeight?: TFontWeight, lineHeight?: number | undefined) => import("@emotion/react").SerializedStyles;
/**
 * Flex css 묶음
 * - display: flex (고정)
 * - justify-content(생략가능)
 * - align-items (생략가능)
 * - flex-direction (생략가능)
 */
export declare const flexSet: (justifyContent?: TJustifyContent | undefined, alignItems?: TAlignItems | undefined, flexDirection?: TFlexDirection | undefined) => import("@emotion/react").SerializedStyles;
/**
 * ScrollBar css 묶음
 */
export declare const customScrollBar: () => import("@emotion/react").SerializedStyles;
