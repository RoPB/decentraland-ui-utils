/// <reference types="dcl" />
/// <reference types="env" />
import { InitialUIProperties, UIBase } from './commons/UIBase';
/**
 * This is a UIContainerRect, with a configurable click event
 */
export declare class UIClickableContainerRect extends UIBase<UIContainerRect> {
    private readonly image;
    constructor(parent: UIShape, initialProperties?: InitialProperties);
    performClick(): void;
    setOnClick(onClick: OnClick): void;
    clearOnClick(): void;
}
declare type InitialProperties = Omit<InitialUIProperties<UIContainerRect>, 'onChange'> & {
    onClick?: OnClick;
    placeholderColor?: Color4;
};
declare type OnClick = () => void;
export {};
