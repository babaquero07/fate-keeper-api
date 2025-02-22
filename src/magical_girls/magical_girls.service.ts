import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateMagicalGirlDto } from './dto/create-magical_girl.dto';
import { UpdateMagicalGirlDto } from './dto/update-magical_girl.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MagicalGirl } from './entities/magical_girl.entity';
import { Repository } from 'typeorm';
import { magicalGirls } from 'src/utils/data';

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

  async findOne(id: number): Promise<MagicalGirl> {
    const magicalGirl = await this.magicalGirlRepository.findOne({
      where: {
        id,
      },
      relations: ['status_logs'],
    });

    if (!magicalGirl)
      throw new NotFoundException(`magical girl with id ${id} not found`);

    return magicalGirl;
  }

  async update(
    id: number,
    updateMagicalGirlDto: UpdateMagicalGirlDto,
  ): Promise<MagicalGirl | undefined> {
    const magicalGirl = await this.findOne(id);

    try {
      // Merge the updated fields with existing entity
      const updatedMagicalGirl = this.magicalGirlRepository.merge(
        magicalGirl,
        updateMagicalGirlDto,
      );

      // Save the merged entity to trigger hooks like @BeforeUpdate
      const savedMagicalGirl =
        await this.magicalGirlRepository.save(updatedMagicalGirl);

      return savedMagicalGirl;
    } catch (error: unknown) {
      console.log('🚀 ~ MagicalGirlsService ~ update ~ error:', error);

      if (error instanceof Error) {
        this.handleDBErrors({
          code: (error as any).code,
          detail: (error as any).detail,
        });
      }
    }
  }

  async seedBD() {
    try {
      const newMagicalGirls = await Promise.all(
        magicalGirls.map(async (girl) => this.createMagicGirl(girl)),
      );

      return newMagicalGirls;
    } catch (error) {
      console.log('🚀 ~ MagicalGirlsService ~ seedBD ~ error:', error);

      this.handleDBErrors({
        code: error.code,
        detail: error.detail,
      });
    }
  }
}
