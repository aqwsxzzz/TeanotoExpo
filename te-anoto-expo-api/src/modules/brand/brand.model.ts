import {
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { User } from '../user/user.model';
import { Item } from '../item/item.model';
import { CreateBrandDto } from './brand.dto';

@Table
export class Brand extends Model<CreateBrandDto> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  isPublic: boolean;

  @Column
  name: string;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => Item)
  item: Item[];
}
