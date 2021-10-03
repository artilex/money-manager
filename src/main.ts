import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  const appPort = process.env.APP_PORT;

  await app.listen(appPort, () => {
    console.log('Server has started on port: ' + appPort);
  });
}
bootstrap();
