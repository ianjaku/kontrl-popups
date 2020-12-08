"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultTemplate = /** @class */ (function () {
    function DefaultTemplate(params, onClose) {
        this.templateEl = document.createElement("div");
        this.templateEl.classList.add("kontrl-popup__default-template");
        if (params.withBG !== false) {
            var bgEl = document.createElement("div");
            bgEl.classList.add("kontrl-popup__default-template__bg");
            bgEl.addEventListener("click", function () { return onClose(); });
            this.templateEl.appendChild(bgEl);
        }
        var boxEl = document.createElement("div");
        boxEl.classList.add("kontrl-popup__default-template__box");
        this.templateEl.appendChild(boxEl);
        var closeButtonEl = document.createElement("div");
        closeButtonEl.classList.add("kontrl-popup__default-template__close");
        boxEl.appendChild(closeButtonEl);
        closeButtonEl.addEventListener("click", function () { return onClose(); });
        var titleEl = document.createElement("div");
        titleEl.classList.add("kontrl-popup__default-template__title");
        titleEl.appendChild(document.createTextNode(params.title));
        boxEl.appendChild(titleEl);
        this.contentEl = document.createElement("div");
        this.contentEl.classList.add("kontrl-popup__default-template__content");
        boxEl.appendChild(this.contentEl);
    }
    DefaultTemplate.prototype.getTemplateEl = function () {
        return this.templateEl;
    };
    DefaultTemplate.prototype.getContentEl = function () {
        return this.contentEl;
    };
    DefaultTemplate.prototype.show = function () {
        this.templateEl.classList.add("kontrl-popup__default-template--active");
    };
    DefaultTemplate.prototype.hide = function () {
        this.templateEl.classList.remove("kontrl-popup__default-template--active");
    };
    return DefaultTemplate;
}());
exports.default = DefaultTemplate;
//# sourceMappingURL=DefaultTemplate.js.map