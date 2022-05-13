import { ResponseHandle } from './types';
export declare const isServer: boolean;
export declare const useScrollPosition: () => number;
export declare const useDebounce: (value: any, delay: number) => any;
export declare const useIsMobile: (initialWidth?: number, initialHeight?: number) => boolean;
export declare const handleResponse: ({ setNotification, error, errors, response, success, t, }: ResponseHandle) => boolean;
