import { Injectable } from '@nestjs/common';
import { Restaurant } from 'src/restaurant/entities/restaurant.entity';
import { Product } from './entities/product.entity';

const mockRestaurant1 = new Restaurant(1, 'Pizzaria do João');
const mockRestaurant2 = new Restaurant(2, 'Hamburgueria da Maria');
const mockRestaurant3 = new Restaurant(3, 'Café e Lanchonete Bom de Papo');
let productId = 0;

const mockBestProductsByRestaurant = {
  1: {
    morning: [
      new Product({
        id: ++productId,
        name: 'Pizza de 4 queijos',
        price: 50.9,
        restaurant: mockRestaurant1,
      }),
    ],
    lunch: [
      new Product({
        id: ++productId,
        name: 'Pizza de 4 queijos',
        price: 50.9,
        restaurant: mockRestaurant1,
      }),
      new Product({
        id: ++productId,
        name: 'Frango com catupiry',
        price: 50.9,
        restaurant: mockRestaurant1,
      }),
    ],
    evening: [
      new Product({
        id: ++productId,
        name: 'Bacon com ovos',
        price: 50.9,
        restaurant: mockRestaurant1,
      }),
      new Product({
        id: ++productId,
        name: 'Camarão',
        price: 50.9,
        restaurant: mockRestaurant1,
      }),
    ],
  },
  2: {
    morning: [
      new Product({
        id: ++productId,
        name: 'Mistão quente',
        price: 10.9,
        restaurant: mockRestaurant2,
      }),
    ],
    lunch: [
      new Product({
        id: ++productId,
        name: 'Hamburger no prato',
        price: 20.9,
        restaurant: mockRestaurant2,
      }),
      new Product({
        id: ++productId,
        name: 'Porção de calabresa com batata',
        price: 25.9,
        restaurant: mockRestaurant2,
      }),
    ],
    evening: [
      new Product({
        id: ++productId,
        name: 'Podrão do bem',
        price: 10.9,
        restaurant: mockRestaurant2,
      }),
      new Product({
        id: ++productId,
        name: 'Hamburger artesanal com gorgonzola',
        price: 26.9,
        restaurant: mockRestaurant2,
      }),
    ],
  },
  3: {
    morning: [
      new Product({
        id: ++productId,
        name: 'Capuccino',
        price: 10.9,
        restaurant: mockRestaurant3,
      }),
      new Product({
        id: ++productId,
        name: 'Pão na chapa',
        price: 5.9,
        restaurant: mockRestaurant3,
      }),
    ],
    lunch: [
      new Product({
        id: ++productId,
        name: 'Arroz, feijão, bife e fritas',
        price: 20.9,
        restaurant: mockRestaurant3,
      }),
      new Product({
        id: ++productId,
        name: 'Porção de calabresa com batata',
        price: 25.9,
        restaurant: mockRestaurant3,
      }),
    ],
    evening: [
      new Product({
        id: ++productId,
        name: 'Picanha na chapa para 2',
        price: 90.9,
        restaurant: mockRestaurant3,
      }),
      new Product({
        id: ++productId,
        name: 'Macarrão com molho branco',
        price: 26.9,
        restaurant: mockRestaurant3,
      }),
    ],
  },
};

@Injectable()
export class ProductRepository {
  findAll() {
    return mockBestProductsByRestaurant;
  }

  findByRestaurantId(id: number) {
    return mockBestProductsByRestaurant[id];
  }
}
