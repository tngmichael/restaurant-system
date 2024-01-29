import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

@Module({
  imports: [], // no need to import ConfigModule
  providers: [
    ConfigService,
    {
      provide: 'EVENT_BUS',
      useFactory: (configService: ConfigService) => {
        const amqpUrl = configService.get('AMQP_CLIENT_URL')!;
        return ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
            queue: 'event',
            queueOptions: { durable: true },
            urls: [amqpUrl],
          },
        });
      },
      inject: [ConfigService],
    },
  ],
  exports: [ConfigService, 'EVENT_BUS'],
})
export class CommonModule {}
