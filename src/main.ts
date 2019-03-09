import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from './config.service';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: false,
  });
  const config = new ConfigService('.env');
  const options = new DocumentBuilder()
    .setTitle('MicroService Application: Email')
    .setDescription('Sending Emails')
    .setVersion('1.0.0')
    .addBearerAuth('Authorization', 'header')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(process.env.SWAGGER_URL || config.get('SWAGGER_URL'), app, document);

  await app.listen(process.env.PORT || config.get('PORT'));
}
bootstrap();
