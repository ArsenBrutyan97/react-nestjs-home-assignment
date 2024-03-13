import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { buildSwagger } from './config/swagger.setup';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({ origin: '*' });
  buildSwagger(app);

  const port = process.env.PORT || 4000;
  await app.listen(port);

  console.info(`server running on ${await app.getUrl()}`);
}
bootstrap();
