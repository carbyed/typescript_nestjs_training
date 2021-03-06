import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/exceptions/http-exception.filter';
import { logger } from './common/middleware/logger.middleware';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger);
  //app.useGlobalFilters(new HttpExceptionFilter()); // Global filter
  await app.listen(3000);
}
bootstrap();

