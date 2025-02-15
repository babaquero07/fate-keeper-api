import {
  IsDate,
  IsIn,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateMagicalGirlDto {
  @IsString()
  @MinLength(1)
  @MaxLength(255)
  name: string;

  @IsNumber()
  age: number;

  @IsString()
  @MinLength(1)
  @MaxLength(255)
  origin_city: string;

  @IsString()
  @IsIn(['active', 'disappear', 'rescued'])
  status: string;

  @IsDate()
  contract_date: Date;
}
