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
var GenericPopupItem_1 = __importDefault(require("./GenericPopupItem"));
var TextItem = /** @class */ (function (_super) {
    __extends(TextItem, _super);
    function TextItem(params) {
        var _this = _super.call(this, {
            name: params.name,
            id: params.name,
            label: params.label
        }) || this;
        _this.textItemParams = params;
        _this.inputEl = document.createElement("input");
        return _this;
    }
    TextItem.prototype.buildContent = function () {
        this.inputEl.classList.add("kontrl-popup__generic__input");
        this.inputEl.name = this.textItemParams.name;
        this.inputEl.id = this.textItemParams.name;
        if (this.textItemParams.placeholder) {
            this.inputEl.placeholder = this.textItemParams.placeholder;
        }
        if (this.textItemParams.type) {
            this.inputEl.type = this.textItemParams.type;
        }
        return this.inputEl;
    };
    TextItem.prototype.getContent = function () {
        return this.inputEl.value;
    };
    return TextItem;
}(GenericPopupItem_1.default));
exports.default = TextItem;
//# sourceMappingURL=InputItem.js.map