import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Patch,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Controller('api/menus')
export class MenuController {
  constructor(private readonly service: MenuService) {}

  @Post()
  create(@Body() dto: CreateMenuDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateMenuDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }

  // --- Bonus: Reorder ---
  @Patch(':id/reorder')
  reorder(@Param('id') id: string, @Body() body: { position: number }) {
    return this.service.reorder(id, body.position);
  }

  // --- Bonus: Move ---
  @Patch(':id/move')
  move(@Param('id') id: string, @Body() body: { parent_id?: string }) {
    return this.service.move(id, body.parent_id);
  }
}
