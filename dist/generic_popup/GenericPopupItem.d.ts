interface Params {
    name: string;
    label: string;
    id: string;
}
declare abstract class GenericPopupItem {
    private params;
    constructor(params: Params);
    build(): HTMLDivElement;
    protected abstract buildContent(): HTMLElement;
    abstract getContent(): any;
    getLabel(): string;
    getId(): string;
    getName(): string;
}
export default GenericPopupItem;
