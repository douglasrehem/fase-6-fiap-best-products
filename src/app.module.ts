import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { RestaurantModule } from './restaurant/restaurant.module';

@Module({
  imports: [ProductModule, RestaurantModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
