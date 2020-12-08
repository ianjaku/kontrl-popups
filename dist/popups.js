"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericPopup = exports.showPopup = exports.preparePopup = exports.isPrepared = void 0;
var GenericPopup_1 = __importDefault(require("./GenericPopup"));
function isPrepared(popup) {
    var item = document.getElementById(popup.getId());
    return item != null;
}
exports.isPrepared = isPrepared;
function preparePopup(popup) {
    if (isPrepared(popup))
        return;
    var wrapper = document.createElement("div");
    wrapper.id = popup.getId();
    var builtPopup = popup.build();
    wrapper.appendChild(builtPopup);
    document.body.appendChild(wrapper);
}
exports.preparePopup = preparePopup;
function showPopup(popup) {
    preparePopup(popup);
    popup.show();
}
exports.showPopup = showPopup;
exports.GenericPopup = GenericPopup_1.default;
exports.default = {
    isPrepared: isPrepared,
    preparePopup: preparePopup,
    showPopup: showPopup,
    GenericPopup: GenericPopup_1.default
};
//# sourceMappingURL=popups.js.map