import KontrlPopup from "./KontrlPopup";
declare class GenericKontrlPopup extends KontrlPopup {
    constructor();
    build(): HTMLDivElement;
    show(): void;
    hide(): void;
}
export default GenericKontrlPopup;
