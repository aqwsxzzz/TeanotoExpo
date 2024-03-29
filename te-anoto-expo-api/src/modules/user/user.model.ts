import {
  AutoIncrement,
  Column,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Item } from '../item/item.model';
import { Group } from '../group/group.model';
import { Brand } from '../brand/brand.model';
import { Store } from '../store/store.model';
import { InterGroupUsers } from '../inter-group-users/inter-group-users.model';
import { GroceryList } from '../grocerylist/grocerylist.model';
import { CreateUserDto } from './user.dto';

@Table
export class User extends Model<CreateUserDto> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column
  username: string;

  @Column
  email: string;

  @Column
  password: string;

  @HasMany(() => Item)
  item: Item[];

  @HasMany(() => Group)
  group: Group[];

  @HasMany(() => Brand)
  brand: Brand[];

  @HasMany(() => Store)
  store: Store[];

  @HasMany(() => InterGroupUsers)
  interGroupUsers: InterGroupUsers[];

  @HasMany(() => GroceryList)
  groceryList: GroceryList[];
}
