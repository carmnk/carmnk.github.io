import React from "react";
export declare const setStateProp: (src: any, path: (string | number)[], newValue: any) => any;
export declare const addStateProp: (src: any, path: (string | number)[], newValue: any) => any;
export declare const removeStateProp: (src: any, path: (string | number)[]) => any;
export declare const getStateProp: (src: any, path: (string | number)[]) => any;
export declare function mergeRefs<T = any>(refs: Array<React.MutableRefObject<T> | React.LegacyRef<T>>): React.RefCallback<T>;
export declare const useReactiveInfo2: (dependencies: any[]) => {
    hasChanged: boolean;
    hasDeepChanged: boolean;
    changedSubelements: any;
    value: any[];
    prevValue: any[];
}[];
