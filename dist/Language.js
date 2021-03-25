"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Language = void 0;
const graphql_1 = require("@nestjs/graphql");
var Language;
(function (Language) {
    Language["EN"] = "en";
    Language["ES"] = "es";
})(Language = exports.Language || (exports.Language = {}));
graphql_1.registerEnumType(Language, {
    name: "Language",
    description: "selected languages"
});
//# sourceMappingURL=Language.js.map