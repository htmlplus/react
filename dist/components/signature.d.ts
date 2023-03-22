/// <reference types="react" />
import type { SignatureJSX } from '@htmlplus/core/types/components/signature/signature';
import type { Rename } from '../proxy';
export declare const Signature: import("react").ForwardRefExoticComponent<Rename<SignatureJSX, {
    onPlusAfter: 'onAfter';
    onPlusBefore: 'onBefore';
    onPlusEnd: 'onEnd';
    onPlusStart: 'onStart';
}> & Omit<import("react").HTMLAttributes<HTMLPlusSignatureElement>, "style"> & import("../proxy").StyleReactProps & import("react").RefAttributes<HTMLPlusSignatureElement>>;
