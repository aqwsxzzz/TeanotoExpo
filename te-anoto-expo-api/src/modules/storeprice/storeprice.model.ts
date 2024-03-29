import {
  AutoIncrement,
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Item } from '../item/item.model';
import { Store } from '../store/store.model';
import { CreateStorePriceDto } from './storeprice.dto';

@Table
export class StorePrice extends Model<CreateStorePriceDto> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  price: number;

  @ForeignKey(() => Item)
  @Column
  itemId: number;

  @BelongsTo(() => Item)
  item: Item;

  @ForeignKey(() => Store)
  @Column
  storeId: number;

  @BelongsTo(() => Store)
  store: Store;
}
