import KontrlPopup from "./Popup";
import _GenericPopup from "./GenericPopup";


export function isPrepared(popup: KontrlPopup) {
  const item = document.getElementById(popup.getId());
  return item != null;
}

export function preparePopup(popup: KontrlPopup) {
  if (isPrepared(popup)) return;
  
  const wrapper = document.createElement("div");
  wrapper.id = popup.getId();

  const builtPopup = popup.build();
  wrapper.appendChild(builtPopup);

  document.body.appendChild(wrapper);
}

export function showPopup(popup: KontrlPopup) {
  preparePopup(popup);
  popup.show();
}

export const GenericPopup = _GenericPopup;

export default {
  isPrepared,
  preparePopup,
  showPopup,
  GenericPopup: _GenericPopup
}