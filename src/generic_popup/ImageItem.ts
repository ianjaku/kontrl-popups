import GenericPopupItem from "./GenericPopupItem";


interface Params {
  name: string;
  label: string;
  value?: File | string;
  aspectRatio?: number; // width/height
}

class ImageItem extends GenericPopupItem {

  private imageParams: Params;
  private value: File | string | null = null;

  private previewEl: HTMLImageElement | null = null;

  constructor(params: Params) {
    super({
      id: params.name,
      name: params.name,
      label: params.label
    });
    this.imageParams = params;

    if (params.value) {
      this.value = params.value;
    }
  }

  protected buildContent(): HTMLElement {
    const dropboxEl = document.createElement("div");
    dropboxEl.classList.add("kontrl-popup__generic__image-box");
    dropboxEl.id = this.getId()

    if (this.imageParams.aspectRatio) {
      const heightPercentage = 100 / this.imageParams.aspectRatio;
      dropboxEl.style.paddingTop = `${heightPercentage}%`;
    }

    const textEl = document.createElement("p");
    textEl.appendChild(document.createTextNode("Change image"));
    textEl.classList.add("kontrl-popup__generic__image-text");
    dropboxEl.appendChild(textEl);

    this.previewEl = document.createElement("img");
    this.previewEl.classList.add("kontrl-popup__generic__image-preview");
    dropboxEl.appendChild(this.previewEl);
    if (this.value != null) {
      this.previewImage(this.value);
    }

    const inputEl = document.createElement("input");
    inputEl.type = "file";
    inputEl.classList.add("kontrl-popup__generic__image-input");
    inputEl.addEventListener("change", () => {
      const files = inputEl.files;
      if (files == null || files.length === 0) return;
      this.value = files[0];
      this.previewImage(this.value);
    });

    dropboxEl.addEventListener("click", () => inputEl.click());

    return dropboxEl;
  }

  public getContent() {
    return this.value;
  }

  private async previewImage(img: string | File) {
    if (this.previewEl == null) return;

    if (img instanceof File) {
      const imgSrc = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = () => {
          resolve(reader.result as string);
        }
        reader.readAsDataURL(img);
      });
      this.previewEl.src = imgSrc;
    } else {
      this.previewEl.src = img;
    }
    this.previewEl.classList.add("kontrl-popup__generic__image-preview--active");
  }

}

export default ImageItem;
