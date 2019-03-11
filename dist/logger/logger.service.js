"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class SGLogger extends common_1.Logger {
    log(message, context) {
        super.log(message, context);
    }
    error(message, trace, context) {
        super.error(message, trace, context);
    }
    warn(message, context) {
        super.warn(message, context);
    }
}
exports.SGLogger = SGLogger;
//# sourceMappingURL=logger.service.js.map