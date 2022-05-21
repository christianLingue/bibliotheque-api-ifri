import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  
  //Specifies to use the default port or the port 5000
  const PORT = process.env.PORT || 5000;

  //Initializing Swagger
  const config = new DocumentBuilder()
  .setTitle('Library API')
  .setDescription("An API to manage easily Library App")
  .setVersion('v1')
  .build();
  
  const app = await NestFactory.create(AppModule);
  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api/v1/doc',app,document);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  
  console.log(PORT)
  await app.listen(PORT);
}
bootstrap();
