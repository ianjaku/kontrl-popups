import DefaultTemplate from "../default_template/DefaultTemplate";
import Popup from "../Popup";
import GenericPopupItem from "./GenericPopupItem";

interface Params {
  title: string;
  subTitle?: string;
  items?: GenericPopupItem[];
  submitText?: string;
  withBG?: boolean;
}

class GenericPopup extends Popup {

  private params: Params;
  private items: GenericPopupItem[];
  private template: DefaultTemplate;

  constructor(params: Params) {
    super();
    this.params = params;
    this.items = params.items || [];
    this.template = new DefaultTemplate(
      { title: params.title, subTitle: params.subTitle, withBG: params.withBG },
      () => {
        this.throwEvent("finish");
        this.hide();
      }
    );
  }
  
  public build() {
    for (let item of this.items) {
      const rowEl = document.createElement("div");
      rowEl.classList.add("kontlr-popup__generic__row");

      const itemEl = item.build();
      rowEl.appendChild(itemEl);

      this.template.getContentEl().appendChild(rowEl);
    }

    const footerEl = document.createElement("footer");
    footerEl.classList.add("kontrl-popup__generic__footer");
    this.template.getContentEl().appendChild(footerEl);

    const submitEl = document.createElement("button");
    submitEl.classList.add("kontrl-popup__generic__button");
    submitEl.addEventListener("click", () => {
      this.throwEvent("finish", { content: this.getFullContent() });
      this.hide();
    })
    submitEl.innerText = this.params.submitText || "Submit";
    footerEl.appendChild(submitEl);
    
    return this.template.getTemplateEl();
  }

  public handleShow(): void {
    this.template.show();
  }

  public hide(): void {
    this.template.hide();
  }

  public addItem(item: GenericPopupItem) {
    this.items.push(item);
  }

  private getFullContent() {
    let content: {[name: string]: any} = {};
    for (let item of this.items) {
      content[item.getName()] = item.getContent();
    }
    return content;
  }

}

export default GenericPopup;