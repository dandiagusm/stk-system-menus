import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from './entities/menu.entity';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private readonly repo: Repository<Menu>,
  ) {}

  // --- Create ---
  async create(dto: CreateMenuDto): Promise<Menu> {
    const menu = this.repo.create({
      title: dto.title,
      url: dto.url,
      icon: dto.icon,
      position: dto.position ?? 0,
    });

    if (dto.parent_id) {
      const parent = await this.repo.findOne({ where: { id: dto.parent_id } });
      if (!parent) throw new NotFoundException('Parent not found');
      menu.parent = parent;
    }

    return this.repo.save(menu);
  }

  // --- Helper: build nested tree safely ---
  private buildTree(menus: Menu[]): Menu[] {
    const menuMap = new Map<string, Menu>();
    const roots: Menu[] = [];

    menus.forEach((m) => {
      m.children = [];
      menuMap.set(m.id, m);
    });

    menus.forEach((m) => {
      if (m.parent) {
        const parent = menuMap.get(m.parent.id);
        if (parent) {
          if (!parent.children) parent.children = [];
          parent.children.push(m);
        }
      } else {
        roots.push(m);
      }
    });

    return roots.sort((a, b) => a.position - b.position);
  }

  // --- Get all menus (tree) ---
  async findAll(): Promise<Menu[]> {
    const all = await this.repo.find({
      relations: ['parent'],
      order: { position: 'ASC' },
    });
    return this.buildTree(all);
  }

  // --- Get one ---
  async findOne(id: string): Promise<Menu> {
    const menu = await this.repo.findOne({
      where: { id },
      relations: ['parent', 'children'],
    });
    if (!menu) throw new NotFoundException('Menu not found');
    return menu;
  }

  // --- Update ---
  async update(id: string, dto: UpdateMenuDto): Promise<Menu> {
    const menu = await this.findOne(id);
    Object.assign(menu, dto);
    return this.repo.save(menu);
  }

  // --- Delete ---
  async remove(id: string): Promise<Menu> {
    const menu = await this.findOne(id);
    return this.repo.remove(menu);
  }

  // --- Bonus: Move ---
  async move(id: string, parent_id?: string): Promise<Menu> {
    const menu = await this.findOne(id);
    if (parent_id) {
      const newParent = await this.repo.findOne({ where: { id: parent_id } });
      if (!newParent) throw new NotFoundException('New parent not found');
      menu.parent = newParent;
    } else {
      menu.parent = null;
    }
    return this.repo.save(menu);
  }

  // --- Bonus: Reorder ---
  async reorder(id: string, position: number): Promise<Menu> {
    const menu = await this.findOne(id);
    menu.position = position;
    return this.repo.save(menu);
  }
}
