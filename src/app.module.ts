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
      host: process.env.DB_HOST,
      port: +(process.env.DB_PORT ?? 5432),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true, // Don't use this in production
    }),
    MagicalGirlsModule,
    StatusLogsModule,
  ],
})
export class AppModule {}
