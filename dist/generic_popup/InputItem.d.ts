import GenericPopupItem from "./GenericPopupItem";
interface Params {
    name: string;
    label: string;
    value: string;
    type?: "text" | "number" | "date" | string;
    placeholder?: string;
}
declare class TextItem extends GenericPopupItem {
    private textItemParams;
    private inputEl;
    constructor(params: Params);
    protected buildContent(): HTMLElement;
    getContent(): string;
}
export default TextItem;
