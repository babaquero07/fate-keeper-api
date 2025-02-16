import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
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
  findAll() {
    return this.magicalGirlsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.magicalGirlsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMagicalGirlDto: UpdateMagicalGirlDto,
  ) {
    return this.magicalGirlsService.update(+id, updateMagicalGirlDto);
  }
}
