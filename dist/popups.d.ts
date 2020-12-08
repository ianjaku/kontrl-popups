import Popup from "./Popup";
import _GenericPopup from "./generic_popup/GenericPopup";
import _InputItem from "./generic_popup/InputItem";
export declare function isBuilt(popup: Popup): boolean;
export declare function build(popup: Popup): void;
export declare function showPopup(popup: Popup): Promise<unknown>;
export declare function destroy(popup: Popup): void;
export declare const GenericPopup: typeof _GenericPopup;
export declare const InputItem: typeof _InputItem;
declare const _default: {
    isBuilt: typeof isBuilt;
    build: typeof build;
    showPopup: typeof showPopup;
    destroy: typeof destroy;
    InputItem: typeof _InputItem;
    GenericPopup: typeof _GenericPopup;
};
export default _default;
