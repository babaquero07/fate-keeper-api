import { Controller, Post, Body } from '@nestjs/common';
import { StatusLogsService } from './status_logs.service';
import { CreateStatusLogDto } from './dto/create-status_log.dto';

@Controller('status-logs')
export class StatusLogsController {
  constructor(private readonly statusLogsService: StatusLogsService) {}

  @Post()
  async create(@Body() createStatusLogDto: CreateStatusLogDto) {
    const statusLog = await this.statusLogsService.create(createStatusLogDto);

    return {
      ok: true,
      data: statusLog,
    };
  }
}
