import EventHandler from "./EventHandler";
declare abstract class KontrlPopup {
    /**
     * A string unique to this popup.
     * Can be used to uniquely identify the popup
     */
    private id;
    private eventHandler;
    constructor(params?: {
        id?: string;
    });
    /**
     * Build the popup element
     */
    abstract build(): HTMLElement;
    abstract handleShow(): void;
    abstract hide(): void;
    show(eventHandler: EventHandler): void;
    getId(): string;
    protected throwEvent(name: string, context?: any): void;
    /**
     * Generates a random ID to uniquely identify this popup
     */
    private generateId;
}
export default KontrlPopup;
