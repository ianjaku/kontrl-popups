interface Params {
  name: string;
  label: string;
  id: string;
}

abstract class GenericPopupItem {

  private params: Params;

  constructor(params: Params) {
    this.params = params;
  }

  public build() {
    const itemEl = document.createElement("div");
    itemEl.classList.add("kontrl-popup__generic__item")

    const labelEl = document.createElement("label");
    labelEl.classList.add("kontrl-popup__generic__label");
    labelEl.innerText = this.params.label;
    labelEl.setAttribute("for", this.params.id);
    itemEl.appendChild(labelEl);

    const itemContentEl = this.buildContent();
    itemEl.appendChild(itemContentEl);

    return itemEl;
  }

  protected abstract buildContent(): HTMLElement;
  public abstract getContent(): any;
  
  public getLabel() {
    return this.params.label;
  }

  public getId() {
    return this.params.id;
  }

  public getName() {
    return this.params.name;
  }

}

export default GenericPopupItem;
