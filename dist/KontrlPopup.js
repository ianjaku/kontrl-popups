"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KontrlPopup = /** @class */ (function () {
    function KontrlPopup(params) {
        if (params === void 0) { params = {}; }
        this.id = params.id != null ? params.id : this.generateId();
    }
    /**
     * Generates a random ID to uniquely identify this popup
     */
    KontrlPopup.prototype.generateId = function () {
        return (Math.random() * 100000000).toString();
    };
    KontrlPopup.prototype.getId = function () {
        return this.id;
    };
    return KontrlPopup;
}());
exports.default = KontrlPopup;
//# sourceMappingURL=KontrlPopup.js.map