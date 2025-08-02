import { registerItem } from '../services/item/registerItem.js';
import { registerItemInCart } from '../services/cart/registerItemInCart.js';

export const controller = (options) => {
  switch (options) {
    case '1':
      registerItem();
      break;
    case '2':
      break;
    case '3':
      registerItemInCart();
      break;
    default:
      console.log('Opção inválida');
  }
};
