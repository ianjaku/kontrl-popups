"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageItem = exports.InputItem = exports.GenericPopup = exports.destroy = exports.showPopup = exports.build = exports.isBuilt = void 0;
var GenericPopup_1 = __importDefault(require("./generic_popup/GenericPopup"));
var InputItem_1 = __importDefault(require("./generic_popup/InputItem"));
var ImageItem_1 = __importDefault(require("./generic_popup/ImageItem"));
function isBuilt(popup) {
    var item = document.getElementById(popup.getId());
    return item != null;
}
exports.isBuilt = isBuilt;
function build(popup) {
    if (isBuilt(popup))
        return;
    var wrapper = document.createElement("div");
    wrapper.id = popup.getId();
    var builtPopup = popup.build();
    wrapper.appendChild(builtPopup);
    document.body.appendChild(wrapper);
}
exports.build = build;
function showPopup(popup) {
    return new Promise(function (resolve) {
        build(popup);
        popup.show(function (name, context) {
            if (name === "finish") {
                resolve(context);
            }
        });
    });
}
exports.showPopup = showPopup;
function destroy(popup) {
    var wrapper = document.getElementById(popup.getId());
    if (wrapper) {
        wrapper.remove();
    }
}
exports.destroy = destroy;
exports.GenericPopup = GenericPopup_1.default;
exports.InputItem = InputItem_1.default;
exports.ImageItem = ImageItem_1.default;
exports.default = {
    isBuilt: isBuilt,
    build: build,
    showPopup: showPopup,
    destroy: destroy,
    InputItem: InputItem_1.default,
    GenericPopup: GenericPopup_1.default,
    ImageItem: ImageItem_1.default
};
//# sourceMappingURL=popups.js.map