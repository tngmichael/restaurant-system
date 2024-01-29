import { createService } from 'framework';
import { KitchenModule } from './kitchen.module';

async function bootstrap() {
  const app = await createService(KitchenModule, {
    queue: 'kitchen',
    queueOptions: {
      durable: true,
    },
  });

  app.connectRmq({
    queue: 'order.process',
    noAck: false,
    queueOptions: {
      durable: true,
    },
  });

  await app.start();
}
bootstrap();
