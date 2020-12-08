declare abstract class KontrlPopup {
    /**
     * A string unique to this popup.
     * Can be used to uniquely identify the popup
     */
    private id;
    constructor(params?: {
        id?: string;
    });
    /**
     * Build the popup element
     */
    abstract build(): HTMLElement;
    abstract show(): void;
    abstract hide(): void;
    /**
     * Generates a random ID to uniquely identify this popup
     */
    private generateId;
    getId(): string;
}
export default KontrlPopup;
