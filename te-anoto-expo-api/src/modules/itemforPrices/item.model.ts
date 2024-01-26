import {
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../user/user.model';
import { StorePrice } from '../storeprice/storeprice.model';
import { Brand } from '../brand/brand.model';

@Table
export class ItemforPrices extends Model {
  @Column
  name: string;

  @Column
  type: string;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Brand)
  @Column
  brandId: number;

  @BelongsTo(() => Brand)
  brand: Brand;

  @HasMany(() => StorePrice)
  storePrices: StorePrice[];
}