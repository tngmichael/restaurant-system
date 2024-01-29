import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { ValidationPipe } from 'framework/dist/nestjs/common';
import { ConfigService } from 'framework/dist/nestjs/config';
import { NestFactory } from 'framework/dist/nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'debug'],
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('API docs')
    .setDescription('The restaurant system API description')
    .setVersion('1.0')
    .addTag('menus')
    .addTag('orders')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  const port = new ConfigService().get('API_GATEWAY_PORT')!;
  await app.listen(port, () => {
    console.log(
      `ready! port:${port}, doc. swagger http://localhost:${port}/api`,
    );
  });
}
bootstrap();
