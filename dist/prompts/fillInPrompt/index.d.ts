/// <reference types="dcl" />
/// <reference types="env" />
/**
 * Displays a prompt window with a field that can be filled in
 *
 * @param  {string} title: Notification string
* @param {(e:string) => Promise<boolean>} onAccept: Function that gets executed if player clicks button
 * @param  {string} acceptLabel: String to go in the accept button
 * @param  {string} placeholder: Text to display as placeholder in the fill in box
 * @param {boolean} useDarkTheme: Switch to the dark theme
 *
 */
export declare class FillInPrompt extends Entity {
    text: UIText;
    button: UIImage;
    buttonLabel: UIText;
    icon: UIImage;
    closeIcon: UIImage;
    onAccept: (e: string) => Promise<boolean>;
    EButtonAction: () => void | Subscription[];
    fillInBox: UIInputText;
    UIOpenTime: number;
    canvas: UICanvas;
    background: UIImage;
    constructor(title: string, onAccept: (e: string) => Promise<boolean>, acceptLabel?: string, placeholder?: string, useDarkTheme?: boolean);
    /**
     * Hides the prompt from view in the screen.
     */
    close(): void;
    /**
     * Hides the prompt, but first reads the provided value and runs the onAccept function with it
     */
    accept(submittedText: string): Promise<void>;
    /**
     * Hides the prompt from view in the screen.
     */
    hide(): void;
    /**
     * Makes an invisible prompt visible again.
     */
    show(): void;
}
