import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);

  // Set global API prefix to match /api/v1/...
  app.setGlobalPrefix('api/v1');

  // Enable CORS to allow request communication from Angular 19 (http://localhost:4200)
  app.enableCors({
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // Apply global exception filter for clean error responses (e.g. invalid routes)
  app.useGlobalFilters(new HttpExceptionFilter());

  const port = 3001;
  await app.listen(port);
  logger.log(`Server is running at: http://localhost:${port}/api/v1`);
}
bootstrap().catch((err) => {
  new Logger('Bootstrap').error('Application failed to start', err);
});
