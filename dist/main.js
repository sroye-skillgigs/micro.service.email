"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const config_service_1 = require("./config.service");
const app_module_1 = require("./app.module");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule, {
            logger: false,
        });
        const config = new config_service_1.ConfigService('.env');
        const options = new swagger_1.DocumentBuilder()
            .setTitle('MicroService Application: Email')
            .setDescription('Sending Emails')
            .setVersion('1.0.0')
            .addBearerAuth('Authorization', 'header')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, options);
        swagger_1.SwaggerModule.setup(process.env.SWAGGER_URL || config.get('SWAGGER_URL'), app, document);
        yield app.listen(process.env.PORT || config.get('PORT'));
    });
}
bootstrap();
//# sourceMappingURL=main.js.map