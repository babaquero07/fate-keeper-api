import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { MagicalGirlsService } from './magical_girls.service';
import { CreateMagicalGirlDto } from './dto/create-magical_girl.dto';
import { UpdateMagicalGirlDto } from './dto/update-magical_girl.dto';

@Controller('magical-girls')
export class MagicalGirlsController {
  constructor(private readonly magicalGirlsService: MagicalGirlsService) {}

  @Post()
  async create(@Body() createMagicalGirlDto: CreateMagicalGirlDto) {
    const magicGirl =
      await this.magicalGirlsService.createMagicGirl(createMagicalGirlDto);

    return {
      ok: true,
      data: {
        magicGirl,
      },
    };
  }

  @Get()
  async findAll() {
    const magicGirls = await this.magicalGirlsService.findAll();

    return {
      ok: true,
      data: [...magicGirls],
    };
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const magicalGirl = await this.magicalGirlsService.findOne(id);

    return {
      ok: true,
      data: magicalGirl,
    };
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMagicalGirlDto: UpdateMagicalGirlDto,
  ) {
    const magicalGirl = await this.magicalGirlsService.update(
      id,
      updateMagicalGirlDto,
    );

    return {
      ok: true,
      data: magicalGirl,
      message: 'Magical girl updated successfully',
    };
  }
}
