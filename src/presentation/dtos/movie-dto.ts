import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsNumber,
  IsNumberString,
  IsString,
} from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @ApiProperty({ required: true, default: 'Maze Runner' })
  name: string;

  @IsDateString()
  @ApiProperty()
  release_date: Date;

  @IsString()
  @ApiProperty()
  trailer_link: string;

  @IsArray()
  @ArrayMinSize(1)
  categories: number[];
}

export class FindChipDto {
  @IsNumberString()
  id: number;
}