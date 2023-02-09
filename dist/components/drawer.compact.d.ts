/// <reference types="react" />
declare const All: import("react").ForwardRefExoticComponent<import("../proxy").Rename<import("@htmlplus/core/types/components/drawer/drawer").DrawerJSX, {
    onPlusClose: "onClose";
    onPlusClosed: "onClosed";
    onPlusOpen: "onOpen";
    onPlusOpened: "onOpened";
}> & Omit<import("react").HTMLAttributes<HTMLPlusDrawerElement>, "style"> & import("../proxy").StyleReactProps & import("react").RefAttributes<HTMLPlusDrawerElement>> & {
    Toggler: import("react").ForwardRefExoticComponent<import("../proxy").Rename<import("@htmlplus/core/types/components/drawer-toggler/drawer-toggler").DrawerTogglerJSX, {}> & Omit<import("react").HTMLAttributes<HTMLPlusDrawerTogglerElement>, "style"> & import("../proxy").StyleReactProps & import("react").RefAttributes<HTMLPlusDrawerTogglerElement>>;
};
export { All as Drawer };
