import { IsInt, IsString } from 'class-validator';

export class CreateStatusLogDto {
  @IsInt()
  magical_girl_id: number;

  @IsString()
  observation: string;
}
