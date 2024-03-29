import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemforPricesModule } from './modules/item/item.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './modules/user/user.module';
import { StoreModule } from './modules/store/store.module';
import { StorepriceModule } from './modules/storeprice/storeprice.module';
import { BrandModule } from './modules/brand/brand.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './modules/auth/jwt-auth.guard';
import { GroupModule } from './modules/group/group.module';
import { InterGroupUsersModule } from './modules/inter-group-users/inter-group-users.module';
import { GrocerylistModule } from './modules/grocerylist/grocerylist.module';
import { InterListItemModule } from './modules/inter-list-item/inter-list-item.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.postgresUsername,
      password: process.env.postgresPassword,
      database: process.env.postgresDB,
      autoLoadModels: true,
      synchronize: true,
    }),
    ItemforPricesModule,
    UserModule,
    StoreModule,
    StorepriceModule,
    BrandModule,
    AuthModule,
    GroupModule,
    InterGroupUsersModule,
    GrocerylistModule,
    InterListItemModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
