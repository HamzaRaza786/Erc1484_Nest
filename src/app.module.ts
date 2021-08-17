import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { erc1484Module } from './erc1484/erc1484.module';
@Module({
  imports: [erc1484Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}