import GenericPopupItem from "./GenericPopupItem";

interface Params {
  name: string;
  label: string;
  value: string;
  type?: "text" | "number" | "date" | string;
  placeholder?: string;
}

class TextItem extends GenericPopupItem {
  private textItemParams: Params;
  private inputEl: HTMLInputElement;

  constructor(params: Params) {
    super({
      name: params.name,
      id: params.name,
      label: params.label
    })
    this.textItemParams = params;
    this.inputEl = document.createElement("input");
  }
  
  protected buildContent(): HTMLElement {
    this.inputEl.classList.add("kontrl-popup__generic__input");
    this.inputEl.name = this.textItemParams.name;
    this.inputEl.id = this.getId();

    if (this.textItemParams.value) {
      this.inputEl.value = this.textItemParams.value;
    }

    if (this.textItemParams.placeholder) {
      this.inputEl.placeholder = this.textItemParams.placeholder;
    }

    if (this.textItemParams.type) {
      this.inputEl.type = this.textItemParams.type;
    }
    
    return this.inputEl;
  }

  public getContent() {
    return this.inputEl.value;
  }

}

export default TextItem;
