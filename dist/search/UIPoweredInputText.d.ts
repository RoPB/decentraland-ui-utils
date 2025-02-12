/// <reference types="dcl" />
/// <reference types="env" />
import { InitialUIProperties, UIBase } from './commons/UIBase';
/**
 * This is a UIInputText, but wrapped on a simpler interface
 */
export declare class UIPoweredInputText extends UIBase<UIInputText> {
    private static readonly DEFAULT_WAIT_TIME;
    private readonly placeholder;
    private inputValue;
    private isInputFocused;
    constructor(parent: UIShape, initialProperties: InitialProperties);
    getValue(): string;
    isFocused(): boolean;
    /**
     * Set an input value, without rasing an event
     */
    setInputValue(text: string): void;
    reset(): void;
    hide(): void;
    show(): void;
}
declare type InitialProperties = Omit<InitialUIProperties<UIInputText>, 'onFocus' | 'onBlur' | 'onChanged' | 'onTextSubmit'> & {
    waitTime?: number;
    onFocus?: Callback;
    onBlur?: (defaultedToPlaceholder: boolean) => void;
    onChanged?: StringCallback;
    onTextSubmit?: StringCallback;
};
declare type Callback = () => void;
declare type StringCallback = (value: string) => void;
export {};
