import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateStatusLogDto } from './dto/create-status_log.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { StatusLog } from './entities/status_log.entity';
import { Repository } from 'typeorm';
import { MagicalGirlsService } from 'src/magical_girls/magical_girls.service';

@Injectable()
export class StatusLogsService {
  constructor(
    @InjectRepository(StatusLog)
    private readonly statusLogRepository: Repository<StatusLog>,

    // External services
    private readonly magicalGirlsService: MagicalGirlsService,
  ) {}

  async create(createStatusLogDto: CreateStatusLogDto): Promise<StatusLog> {
    const { magical_girl_id, ...statusLogData } = createStatusLogDto;
    const magicalGirl = await this.magicalGirlsService.findOne(magical_girl_id);

    try {
      const statusLog = this.statusLogRepository.create({
        ...statusLogData,
        magical_girl: magicalGirl,
      });
      await this.statusLogRepository.save(statusLog);

      return statusLog;
    } catch (error) {
      console.log('🚀 ~ StatusLogsService ~ create ~ error:', error);
      throw new InternalServerErrorException();
    }
  }
}
