import {
  IsDateString,
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
  @IsIn(['Active', 'Disappeared', 'Rescued'])
  status: string;

  @IsDateString()
  contract_date: Date;
}
