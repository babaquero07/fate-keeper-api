import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateMagicalGirlDto } from './dto/create-magical_girl.dto';
import { UpdateMagicalGirlDto } from './dto/update-magical_girl.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MagicalGirl } from './entities/magical_girl.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MagicalGirlsService {
  constructor(
    @InjectRepository(MagicalGirl)
    private readonly magicalGirlRepository: Repository<MagicalGirl>,
  ) {}

  private handleDBErrors(error: { code: string; detail: string }): never {
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    } else {
      console.log(error);

      throw new BadRequestException('An error occurred');
    }
  }

  async createMagicGirl(
    createMagicalGirlDto: CreateMagicalGirlDto,
  ): Promise<MagicalGirl> {
    try {
      const magicalGirl =
        this.magicalGirlRepository.create(createMagicalGirlDto);
      await this.magicalGirlRepository.save(magicalGirl);

      return magicalGirl;
    } catch (error: any) {
      console.log('🚀 ~ MagicalGirlsService ~ error:', error);
      this.handleDBErrors({
        code: error.code,
        detail: error.detail,
      });
    }
  }

  async findAll(): Promise<MagicalGirl[]> {
    try {
      return await this.magicalGirlRepository.find();
    } catch (error) {
      console.log('🚀 ~ MagicalGirlsService ~ findAll ~ error:', error);
      this.handleDBErrors({
        code: error.code,
        detail: error.detail,
      });
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} magicalGirl`;
  }

  update(id: number, updateMagicalGirlDto: UpdateMagicalGirlDto) {
    return `This action updates a #${id} magicalGirl`;
  }
}
