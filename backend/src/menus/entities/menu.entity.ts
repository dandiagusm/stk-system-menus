import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Menu {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  url?: string;

  @Column({ nullable: true })
  icon?: string;

  @ManyToOne(() => Menu, (menu) => menu.children, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  parent: Menu | null;

  @OneToMany(() => Menu, (menu) => menu.parent)
  children?: Menu[];

  @Column({ default: 0 })
  position: number;
}
