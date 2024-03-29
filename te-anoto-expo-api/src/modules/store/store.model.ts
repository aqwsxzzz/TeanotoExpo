import {
  Column,
  Table,
  Model,
  HasMany,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';
import { StorePrice } from '../storeprice/storeprice.model';
import { User } from '../user/user.model';
import { CreateStoreDto } from './store.dto';

@Table
export class Store extends Model<CreateStoreDto> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  isPublic: boolean;

  @HasMany(() => StorePrice)
  storePrices: StorePrice[];

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
