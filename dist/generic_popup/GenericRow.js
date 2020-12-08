"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GenericRow = /** @class */ (function () {
    function GenericRow(params) {
        this.params = params;
    }
    GenericRow.prototype.build = function () {
        var rowEl = document.createElement("div");
        rowEl.classList.add("kontrl-popup__generic__row");
        var labelEl = document.createElement("label");
        labelEl.innerText = this.params.label;
        labelEl.setAttribute("for", this.params.id);
        var rowContentEl = this.buildContent();
        rowEl.appendChild(rowContentEl);
        return rowEl;
    };
    GenericRow.prototype.getLabel = function () {
        return this.params.label;
    };
    GenericRow.prototype.getId = function () {
        return this.params.id;
    };
    return GenericRow;
}());
exports.default = GenericRow;
//# sourceMappingURL=GenericRow.js.map