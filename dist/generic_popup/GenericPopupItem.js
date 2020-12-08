"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GenericPopupItem = /** @class */ (function () {
    function GenericPopupItem(params) {
        this.params = params;
    }
    GenericPopupItem.prototype.build = function () {
        var itemEl = document.createElement("div");
        itemEl.classList.add("kontrl-popup__generic__item");
        var labelEl = document.createElement("label");
        labelEl.classList.add("kontrl-popup__generic__label");
        labelEl.innerText = this.params.label;
        labelEl.setAttribute("for", this.params.id);
        itemEl.appendChild(labelEl);
        var itemContentEl = this.buildContent();
        itemEl.appendChild(itemContentEl);
        return itemEl;
    };
    GenericPopupItem.prototype.getLabel = function () {
        return this.params.label;
    };
    GenericPopupItem.prototype.getId = function () {
        return this.params.id;
    };
    GenericPopupItem.prototype.getName = function () {
        return this.params.name;
    };
    return GenericPopupItem;
}());
exports.default = GenericPopupItem;
//# sourceMappingURL=GenericPopupItem.js.map