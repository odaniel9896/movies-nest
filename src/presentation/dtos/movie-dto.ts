import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @ApiProperty({ required: true, default: 'Maze Runner' })
  name: string;

  @IsDateString()
  @IsOptional()
  @IsNotEmpty()
  @ApiProperty({ required: false })
  release_date: Date;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @ApiProperty()
  trailer_link: string;

  @IsArray()
  @ArrayMinSize(1)
  categories: number[];
}

export class ChipIdDto {
  @IsNumberString()
  @ApiProperty({ required: true })
  id: number;
}

export class UpdateChipDto {
  @IsString()
  @ApiProperty({ required: false, default: 'Maze Runner' })
  @IsOptional()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: false, default: '2022-04-30' })
  @IsDateString()
  @IsOptional()
  @IsNotEmpty()
  release_date: Date;

  @ApiProperty({ required: false, default: 'Eu sou a lenda' })
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  trailer_link: string;
}
