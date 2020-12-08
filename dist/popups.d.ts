import KontrlPopup from "./Popup";
import _GenericPopup from "./GenericPopup";
export declare function isPrepared(popup: KontrlPopup): boolean;
export declare function preparePopup(popup: KontrlPopup): void;
export declare function showPopup(popup: KontrlPopup): void;
export declare const GenericPopup: typeof _GenericPopup;
declare const _default: {
    isPrepared: typeof isPrepared;
    preparePopup: typeof preparePopup;
    showPopup: typeof showPopup;
    GenericPopup: typeof _GenericPopup;
};
export default _default;
