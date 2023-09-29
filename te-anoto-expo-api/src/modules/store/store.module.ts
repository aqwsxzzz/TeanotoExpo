import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { Store } from './store.model';

@Module({
  imports: [SequelizeModule.forFeature([Store])],

  providers: [StoreService],
  controllers: [StoreController],
})
export class StoreModule {}
