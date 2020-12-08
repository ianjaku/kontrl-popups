interface Params {
  title: string;
  withBG?: boolean;
}

class DefaultTemplate {

  private templateEl: HTMLElement;
  private contentEl: HTMLElement;

  constructor(params: Params, onClose: () => void) {
    this.templateEl = document.createElement("div");
    this.templateEl.classList.add("kontrl-popup__default-template");

    if (params.withBG !== false) {
      const bgEl = document.createElement("div");
      bgEl.classList.add("kontrl-popup__default-template__bg");
      bgEl.addEventListener("click", () => onClose());
      this.templateEl.appendChild(bgEl);
    }

    const boxEl = document.createElement("div");
    boxEl.classList.add("kontrl-popup__default-template__box");
    this.templateEl.appendChild(boxEl);

    const closeButtonEl = document.createElement("div");
    closeButtonEl.classList.add("kontrl-popup__default-template__close");
    boxEl.appendChild(closeButtonEl);
    closeButtonEl.addEventListener("click", () => onClose());

    const titleEl = document.createElement("div");
    titleEl.classList.add("kontrl-popup__default-template__title");
    titleEl.appendChild(document.createTextNode(params.title))
    boxEl.appendChild(titleEl);

    this.contentEl = document.createElement("div");
    this.contentEl.classList.add("kontrl-popup__default-template__content");
    boxEl.appendChild(this.contentEl);
  }

  public getTemplateEl() {
    return this.templateEl;
  }

  public getContentEl() {
    return this.contentEl;
  }

  public show() {
    this.templateEl.classList.add("kontrl-popup__default-template--active");
  }

  public hide() {
    this.templateEl.classList.remove("kontrl-popup__default-template--active");
  }
  
}

export default DefaultTemplate;
