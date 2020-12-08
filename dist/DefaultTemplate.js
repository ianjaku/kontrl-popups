"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = __importDefault(require("./Util"));
var DefaultTemplate = /** @class */ (function () {
    function DefaultTemplate() {
    }
    DefaultTemplate.build = function () {
        this.loadCSS();
        var popupEl = document.createElement("");
    };
    DefaultTemplate.loadCSS = function () {
        if (this.loadedCSS)
            return;
        this.loadedCSS = true;
        Util_1.default.injectCSS("\n      body {\n        background-color: red;\n      }\n    ");
    };
    DefaultTemplate.loadedCSS = false;
    return DefaultTemplate;
}());
exports.default = DefaultTemplate;
//# sourceMappingURL=DefaultTemplate.js.map