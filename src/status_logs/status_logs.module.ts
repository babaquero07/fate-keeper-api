import { Module } from '@nestjs/common';
import { StatusLogsService } from './status_logs.service';
import { StatusLogsController } from './status_logs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatusLog } from './entities/status_log.entity';
import { MagicalGirlsModule } from 'src/magical_girls/magical_girls.module';

@Module({
  controllers: [StatusLogsController],
  providers: [StatusLogsService],
  imports: [TypeOrmModule.forFeature([StatusLog]), MagicalGirlsModule],
})
export class StatusLogsModule {}
