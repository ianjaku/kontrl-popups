declare class DefaultTemplate {
    static build(params: {
        title: string;
        withBG?: boolean;
    }, onClose: () => void): {
        templateEl: HTMLDivElement;
        contentEl: HTMLDivElement;
    };
}
export default DefaultTemplate;
