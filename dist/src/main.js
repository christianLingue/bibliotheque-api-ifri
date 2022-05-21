"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app/app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const PORT = process.env.PORT || 5000;
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Library API')
        .setDescription("An API to manage easily Library App")
        .setVersion('v1')
        .build();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/v1/doc', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors();
    console.log(PORT);
    await app.listen(PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map