"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultTemplate_1 = __importDefault(require("../default_template/DefaultTemplate"));
var Popup_1 = __importDefault(require("../Popup"));
var GenericPopup = /** @class */ (function (_super) {
    __extends(GenericPopup, _super);
    function GenericPopup(params) {
        var _this = _super.call(this) || this;
        _this.params = params;
        _this.items = params.items || [];
        _this.template = new DefaultTemplate_1.default({ title: params.title }, function () {
            _this.throwEvent("finish");
            _this.hide();
        });
        return _this;
    }
    GenericPopup.prototype.build = function () {
        var _this = this;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            var rowEl = document.createElement("div");
            rowEl.classList.add("kontlr-popup__generic__row");
            var itemEl = item.build();
            rowEl.appendChild(itemEl);
            this.template.getContentEl().appendChild(rowEl);
        }
        var footerEl = document.createElement("footer");
        footerEl.classList.add("kontrl-popup__generic__footer");
        this.template.getContentEl().appendChild(footerEl);
        var submitEl = document.createElement("button");
        submitEl.classList.add("kontrl-popup__generic__button");
        submitEl.addEventListener("click", function () {
            _this.throwEvent("finish", { content: _this.getFullContent() });
            _this.hide();
        });
        submitEl.innerText = this.params.submitText || "Submit";
        footerEl.appendChild(submitEl);
        return this.template.getTemplateEl();
    };
    GenericPopup.prototype.handleShow = function () {
        this.template.show();
    };
    GenericPopup.prototype.hide = function () {
        this.template.hide();
    };
    GenericPopup.prototype.addItem = function (item) {
        this.items.push(item);
    };
    GenericPopup.prototype.getFullContent = function () {
        var content = {};
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            content[item.getName()] = item.getContent();
        }
        return content;
    };
    return GenericPopup;
}(Popup_1.default));
exports.default = GenericPopup;
//# sourceMappingURL=GenericPopup.js.map