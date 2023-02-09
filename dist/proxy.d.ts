/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import React from 'react';
export type Rename<T, R extends {
    [K in keyof R]: K extends keyof T ? PropertyKey : 'Error: key not in T';
}> = {
    [P in keyof T as P extends keyof R ? R[P] : P]: T[P];
};
export interface StyleReactProps {
    class?: string;
    className?: string;
    style?: {
        [key: string]: any;
    };
}
export declare const proxy: <ElementType, PropType>(tagName: string, props?: Array<string>, events?: Array<string>) => React.ForwardRefExoticComponent<React.PropsWithoutRef<PropType & Omit<React.HTMLAttributes<ElementType>, "style"> & StyleReactProps> & React.RefAttributes<ElementType>>;
