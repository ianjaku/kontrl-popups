"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.injectCSS = function (css) {
        var style = document.createElement("style");
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
    };
    return Util;
}());
exports.default = Util;
//# sourceMappingURL=Util.js.map