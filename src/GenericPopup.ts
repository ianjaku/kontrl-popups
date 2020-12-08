import DefaultTemplate from "./default_template/DefaultTemplate";
import Popup from "./Popup";

interface Params {
  title: string;
}

class GenericPopup extends Popup {

  private params: Params;

  constructor(params: Params) {
    super();
    this.params = params;
  }
  
  public build() {
    const { templateEl, contentEl } = DefaultTemplate.build({ title: this.params.title }, this.hide.bind(this));
    
    const popupEl = document.createElement("div");
    popupEl.appendChild(document.createTextNode("test"));
    contentEl.appendChild(popupEl)

    return templateEl;
  }

  public show(): void {
    console.log("Show")
  }

  public hide(): void {
    console.log("hide")
  }


}

export default GenericPopup;