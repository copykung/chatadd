import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://him_rahim:LleGuKDmSVRWusP3@cluster0.cgxqn.mongodb.net/test'), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
