class DefaultTemplate {

  public static build(params: { title: string, withBG?: boolean }, onClose: () => void) {
    const templateEl = document.createElement("div");
    templateEl.classList.add("kontrl-popup__default-template");

    if (params.withBG !== false) {
      const bgEl = document.createElement("div");
      bgEl.classList.add("kontrl-popup__default-template__bg");
      bgEl.addEventListener("click", () => onClose());
      templateEl.appendChild(bgEl);
    }

    const boxEl = document.createElement("div");
    boxEl.classList.add("kontrl-popup__default-template__box");
    templateEl.appendChild(boxEl);

    const closeButtonEl = document.createElement("div");
    closeButtonEl.classList.add("kontrl-popup__default-template__close");
    boxEl.appendChild(closeButtonEl);
    closeButtonEl.addEventListener("click", () => onClose());

    const titleEl = document.createElement("div");
    titleEl.classList.add("kontrl-popup__default-template__title");
    titleEl.appendChild(document.createTextNode(params.title))
    boxEl.appendChild(titleEl);

    const contentEl = document.createElement("div");
    contentEl.classList.add("kontrl-popup__default-template__content");
    boxEl.appendChild(contentEl);

    return {
      templateEl,
      contentEl
    }
  }
  
}

export default DefaultTemplate;
