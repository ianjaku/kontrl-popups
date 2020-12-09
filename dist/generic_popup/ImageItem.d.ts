import GenericPopupItem from "./GenericPopupItem";
interface Params {
    name: string;
    label: string;
    value?: File | string;
    aspectRatio?: number;
}
declare class ImageItem extends GenericPopupItem {
    private imageParams;
    private value;
    private previewEl;
    constructor(params: Params);
    protected buildContent(): HTMLElement;
    getContent(): string | File | null;
    private previewImage;
}
export default ImageItem;
