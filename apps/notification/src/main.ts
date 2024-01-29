import { createService } from 'framework';
import { NotificationModule } from './notification.module';

async function bootstrap() {
  const app = await createService(NotificationModule, {
    queue: 'notification',
    queueOptions: {
      durable: true,
    },
  });

  app.connectRmq({
    queue: 'order.confirmation',
    noAck: false, // probably set true, too late if the email is going to delivered later
    queueOptions: {
      durable: true,
    },
  });

  await app.start();
}
bootstrap();
