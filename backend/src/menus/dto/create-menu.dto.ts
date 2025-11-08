import { IsOptional, IsString, IsUUID, IsInt, Min } from 'class-validator';

export class CreateMenuDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  url?: string;

  @IsOptional()
  @IsString()
  icon?: string;

  @IsOptional()
  @IsUUID()
  parent_id?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  position?: number;
}
