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
var DefaultTemplate_1 = __importDefault(require("./default_template/DefaultTemplate"));
var Popup_1 = __importDefault(require("./Popup"));
var GenericPopup = /** @class */ (function (_super) {
    __extends(GenericPopup, _super);
    function GenericPopup(params) {
        var _this = _super.call(this) || this;
        _this.params = params;
        _this.rows = params.rows || [];
        return _this;
    }
    GenericPopup.prototype.build = function () {
        var _a = DefaultTemplate_1.default.build({ title: this.params.title }, this.hide.bind(this)), templateEl = _a.templateEl, contentEl = _a.contentEl;
        return templateEl;
    };
    GenericPopup.prototype.show = function () {
        console.log("Show");
    };
    GenericPopup.prototype.hide = function () {
        console.log("hide");
    };
    GenericPopup.prototype.addRow = function (labelName) {
    };
    return GenericPopup;
}(Popup_1.default));
exports.default = GenericPopup;
//# sourceMappingURL=GenericPopup.js.map