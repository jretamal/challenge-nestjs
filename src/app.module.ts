import { Module } from '@nestjs/common';
import { ElementsModule } from './elements/elements.module';

@Module({
  imports: [ElementsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
