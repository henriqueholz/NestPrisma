import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['advanced-cat-10247-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'YWR2YW5jZWQtY2F0LTEwMjQ3JFw_AIGV4MW0oZrzzmWKnngMjREZ3U5BTTQ1XjQ',
          password: '2cfbf865e7af4ad7b9c2aa7979fdd55c',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
