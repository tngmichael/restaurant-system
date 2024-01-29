import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import {
  ClientProxyFactory,
  RmqOptions,
  TcpOptions,
  Transport,
} from '@nestjs/microservices';

export const createService = async (
  appModule: any,
  options: RmqOptions['options'],
) => {
  const amqpUrl = new ConfigService().get('AMQP_CLIENT_URL')!;

  const app = await NestFactory.create(appModule, {
    logger: ['error', 'debug'],
  });
  app.init(); // init not triggered without app.listen?

  // must before connectMicroservice
  // app.useGlobalFilters(new AllExceptionsFilter()); // in addition with inheritAppConfig
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  app.connectMicroservice(
    {
      transport: Transport.RMQ,
      options: {
        ...options,
        urls: [amqpUrl], // we only use 1 amqp
      },
    },
    { inheritAppConfig: true },
  );

  return {
    connectRmq: (options: RmqOptions['options']) =>
      app.connectMicroservice<RmqOptions>(
        {
          transport: Transport.RMQ,
          options: {
            ...options,
            urls: [amqpUrl], // we only use 1 amqp
          },
        },
        { inheritAppConfig: true },
      ),
    connectTcp: (options: TcpOptions['options']) =>
      app.connectMicroservice<TcpOptions>(
        {
          transport: Transport.TCP,
          options: {
            ...options,
          },
        },
        { inheritAppConfig: true },
      ),
    start: () =>
      app.startAllMicroservices().then(() => {
        console.log('ready!');
      }),
  };
};

export function createClientProxy(provider: string, queue: string) {
  return {
    provide: provider,
    useFactory: (configService: ConfigService) => {
      return ClientProxyFactory.create({
        transport: Transport.RMQ,
        options: {
          urls: [configService.get('AMQP_CLIENT_URL')],
          queue,
          queueOptions: {
            durable: true,
          },
        },
      });
    },
    inject: [ConfigService],
  };
}

export { CommonModule } from './common/common.module';
