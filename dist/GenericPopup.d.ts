import Popup from "./Popup";
interface Params {
    title: string;
    rows?: Row[];
}
interface Row {
    name: string;
    label: string;
    type: string;
}
declare class GenericPopup extends Popup {
    private params;
    private rows;
    constructor(params: Params);
    build(): HTMLDivElement;
    show(): void;
    hide(): void;
    addRow(labelName: string): void;
}
export default GenericPopup;
