import { Module } from '@nestjs/common';
import { MagicalGirlsService } from './magical_girls.service';
import { MagicalGirlsController } from './magical_girls.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MagicalGirl } from './entities/magical_girl.entity';

@Module({
  controllers: [MagicalGirlsController],
  providers: [MagicalGirlsService],
  imports: [TypeOrmModule.forFeature([MagicalGirl])],
})
export class MagicalGirlsModule {}
