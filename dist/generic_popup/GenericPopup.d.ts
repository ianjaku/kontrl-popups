import Popup from "../Popup";
import GenericPopupItem from "./GenericPopupItem";
interface Params {
    title: string;
    items?: GenericPopupItem[];
    submitText?: string;
}
declare class GenericPopup extends Popup {
    private params;
    private items;
    private template;
    constructor(params: Params);
    build(): HTMLElement;
    handleShow(): void;
    hide(): void;
    addItem(item: GenericPopupItem): void;
    private getFullContent;
}
export default GenericPopup;
