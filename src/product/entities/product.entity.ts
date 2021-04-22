import { Restaurant } from 'src/restaurant/entities/restaurant.entity';

export class Product {
  name: string;
  price: number;
  restaurant: Restaurant;

  constructor(dto?) {
    if (dto) {
      Object.assign(this, dto);
    }
  }
}
