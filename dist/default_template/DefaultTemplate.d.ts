interface Params {
    title: string;
    subTitle?: string;
    withBG?: boolean;
}
declare class DefaultTemplate {
    private templateEl;
    private contentEl;
    constructor(params: Params, onClose: () => void);
    getTemplateEl(): HTMLElement;
    getContentEl(): HTMLElement;
    show(): void;
    hide(): void;
}
export default DefaultTemplate;
