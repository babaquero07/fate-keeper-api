import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  const PORT = process.env.PORT || 3000;
  const API_URL = process.env.API_URL || 'http://localhost';

  const logger = new Logger('bootstrap');

  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove any extra properties sent by the client
      forbidNonWhitelisted: true, // Throw an error if extra properties are sent by the client
    }),
  );

  await app.listen(PORT);

  logger.log(`Application listening on ${API_URL}:${PORT}`);
}
bootstrap();
