import Popup from "./Popup";
interface Params {
    title: string;
}
declare class GenericPopup extends Popup {
    private params;
    constructor(params: Params);
    build(): HTMLDivElement;
    show(): void;
    hide(): void;
}
export default GenericPopup;
