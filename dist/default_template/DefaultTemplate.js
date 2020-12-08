"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultTemplate = /** @class */ (function () {
    function DefaultTemplate() {
    }
    DefaultTemplate.build = function (params, onClose) {
        var templateEl = document.createElement("div");
        templateEl.classList.add("kontrl-popup__default-template");
        if (params.withBG !== false) {
            var bgEl = document.createElement("div");
            bgEl.classList.add("kontrl-popup__default-template__bg");
            bgEl.addEventListener("click", function () { return onClose(); });
            templateEl.appendChild(bgEl);
        }
        var boxEl = document.createElement("div");
        boxEl.classList.add("kontrl-popup__default-template__box");
        templateEl.appendChild(boxEl);
        var closeButtonEl = document.createElement("div");
        closeButtonEl.classList.add("kontrl-popup__default-template__close");
        boxEl.appendChild(closeButtonEl);
        closeButtonEl.addEventListener("click", function () { return onClose(); });
        var titleEl = document.createElement("div");
        titleEl.classList.add("kontrl-popup__default-template__title");
        titleEl.appendChild(document.createTextNode(params.title));
        boxEl.appendChild(titleEl);
        var contentEl = document.createElement("div");
        contentEl.classList.add("kontrl-popup__default-template__content");
        boxEl.appendChild(contentEl);
        return {
            templateEl: templateEl,
            contentEl: contentEl
        };
    };
    return DefaultTemplate;
}());
exports.default = DefaultTemplate;
//# sourceMappingURL=DefaultTemplate.js.map