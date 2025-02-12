/// <reference types="dcl" />
/**
 * Displays a prompt window with a custom string and an OK button
 *
 * @param  {string} instructions: Notification string
 * @param {() => void} onAccept: Function that gets executed if player clicks button
 * @param  {string} acceptLabel: String to go in the accept button
 * @param {boolean} useDarkTheme: Switch to the dark theme
 *
 */
export declare class OkPrompt extends Entity {
    text: UIText;
    button: UIImage;
    buttonLabel: UIText;
    icon: UIImage;
    closeIcon: UIImage;
    onAccept: null | (() => void);
    EButtonAction: () => void | Subscription[];
    UIOpenTime: number;
    canvas: UICanvas;
    background: UIImage;
    constructor(instructions: string, onAccept?: () => void, acceptLabel?: string, useDarkTheme?: boolean);
    /**
     * Hides the prompt from view in the screen.
     */
    close(): void;
    /**
     * Runs the onAccept function, then hides the prompt from view in the screen.
     */
    accept(): void;
    /**
     * Hides the prompt from view in the screen.
     */
    hide(): void;
    /**
     * Makes an invisible prompt visible again.
     */
    show(): void;
}
