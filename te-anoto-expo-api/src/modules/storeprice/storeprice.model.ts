import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Item } from '../item/item.model';
import { Store } from '../store/store.model';

@Table
export class StorePrice extends Model {
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
