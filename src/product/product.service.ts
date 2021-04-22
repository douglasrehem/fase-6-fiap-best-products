import { Injectable } from '@nestjs/common';
import { Restaurant } from 'src/restaurant/entities/restaurant.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

const mockRestaurant1 = new Restaurant('Pizzaria do João');

const mockBestProductsByRestaurant = {
  1: [
    new Product({
      name: 'Pizza de 4 queijos',
      price: 50.9,
      restaurant: mockRestaurant1,
    }),
    new Product({
      name: 'Pizza de 4 queijos',
      price: 50.9,
      restaurant: mockRestaurant1,
    }),
  ],
  2: [
    new Product({
      name: 'Hamburger artesanal de gorgonzola',
      price: 50.9,
      restaurant: mockRestaurant1,
    }),
    new Product({
      name: 'Pizza de 4 queijos',
      price: 50.9,
      restaurant: mockRestaurant1,
    }),
  ],
};

@Injectable()
export class ProductService {
  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findAll() {
    return mockBestProductsByRestaurant;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
