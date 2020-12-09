import Popup from "./Popup";
import _GenericPopup from "./generic_popup/GenericPopup";
import _InputItem from "./generic_popup/InputItem";
import _ImageItem from "./generic_popup/ImageItem";

export function isBuilt(popup: Popup) {
  const item = document.getElementById(popup.getId());
  return item != null;
}

export function build(popup: Popup) {
  if (isBuilt(popup)) return;
  
  const wrapper = document.createElement("div");
  wrapper.id = popup.getId();

  const builtPopup = popup.build();
  wrapper.appendChild(builtPopup);

  document.body.appendChild(wrapper);
}

export function showPopup(popup: Popup) {
  return new Promise((resolve) => {
    build(popup);
    popup.show((name, context) => {
      if (name === "finish") {
        resolve(context);
      }
    });
  })
}

export function destroy(popup: Popup) {
  const wrapper = document.getElementById(popup.getId());
  if (wrapper) {
    wrapper.remove();
  }
}

export const GenericPopup = _GenericPopup;
export const InputItem = _InputItem;
export const ImageItem = _ImageItem;

export default {
  isBuilt,
  build,
  showPopup,
  destroy,
  InputItem: _InputItem,
  GenericPopup: _GenericPopup,
  ImageItem: _ImageItem
}