"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KontrlPopup = /** @class */ (function () {
    function KontrlPopup(params) {
        if (params === void 0) { params = {}; }
        this.eventHandler = null;
        this.id = params.id != null ? params.id : this.generateId();
    }
    KontrlPopup.prototype.show = function (eventHandler) {
        this.eventHandler = eventHandler;
        this.handleShow();
    };
    KontrlPopup.prototype.getId = function () {
        return this.id;
    };
    KontrlPopup.prototype.throwEvent = function (name, context) {
        if (this.eventHandler == null)
            return;
        this.eventHandler(name, context);
    };
    /**
     * Generates a random ID to uniquely identify this popup
     */
    KontrlPopup.prototype.generateId = function () {
        return (Math.random() * 100000000).toString();
    };
    return KontrlPopup;
}());
exports.default = KontrlPopup;
//# sourceMappingURL=Popup.js.map