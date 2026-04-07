import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule, new FastifyAdapter());  with fastify method
  const app = await NestFactory.create(AppModule);  //By default express
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
