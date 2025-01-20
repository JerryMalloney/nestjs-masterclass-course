import { Module } from '@nestjs/common';
import { MetaOptionsService } from './providers/meta-options.service';
import { MetaOptionsController } from './meta-options.controller';
import { MetaOption } from './meta-options.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [MetaOptionsController],
  providers: [MetaOptionsService],
  imports: [TypeOrmModule.forFeature([MetaOption])],
})
export class MetaOptionsModule {}
