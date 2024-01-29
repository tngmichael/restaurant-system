import { createService } from 'framework';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await createService(AppModule, {
    queue: 'order',
    queueOptions: {
      durable: true,
    },
  });

  // if tcp
  // app.connectTcp({
  //   host: '0.0.0.0',
  //   port: new ConfigService().get('ORDER_SERVICE_PORT'),
  // });

  await app.start();
}
bootstrap();
