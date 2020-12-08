interface Params {
    label: string;
    id: string;
}
declare abstract class GenericRow {
    private params;
    constructor(params: Params);
    build(): HTMLDivElement;
    abstract buildContent(): HTMLElement;
    getLabel(): string;
    getId(): string;
}
export default GenericRow;
