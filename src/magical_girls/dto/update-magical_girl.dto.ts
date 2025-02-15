import { PartialType } from '@nestjs/mapped-types';
import { CreateMagicalGirlDto } from './create-magical_girl.dto';

export class UpdateMagicalGirlDto extends PartialType(CreateMagicalGirlDto) {}
