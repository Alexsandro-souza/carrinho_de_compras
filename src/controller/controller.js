import { registerItem } from '../services/item/registerItem.js';
import { registerItemInCart } from '../services/cart/registerItemInCart.js';
import { closePrompt } from '../services/prompt/prompt.js';
import { cart } from '../services/conectionDB/pathDbs.js';
import { showItemInCart } from '../services/cart/showItemInCart.js';

export const controller = async(options) => {
  await closePrompt();
  switch (options) {
    case '1':
      registerItem();
      break;
    case '2':
      showItemInCart(cart);
      break;
    case '3':
      registerItemInCart();
      break;
    default:
      console.log('Opção inválida');
  }
};
