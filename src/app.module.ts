import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MagicalGirlsModule } from './magical_girls/magical_girls.module';
import { StatusLogsModule } from './status_logs/status_logs.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: false, // Don't use true value in production
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    }),
    MagicalGirlsModule,
    StatusLogsModule,
  ],
})
export class AppModule {}
