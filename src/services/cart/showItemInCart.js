import { showItens, formatCoin } from '../utils/utils.js';
import { removeItemInCart } from '../cart/removeItemInCart.js';
import { editAmountInCart } from '../cart/editAmountInCart.js';
import { newPrompt, closePrompt } from '../prompt/prompt.js';
import schemas from '../prompt/schema.js';

const viewPrice = async (data) => {
  const priceTotal = data.reduce((accumulator, current) => {
    return accumulator + current.price * current.amount;
  }, 0);
  const priceTotalFormated = formatCoin(priceTotal);
  console.log(`Total: ${priceTotalFormated}\n`);
};

export const showItemInCart = async (cart) => {
  const data = await showItens(cart);
  await viewPrice(data);
  const toChange = await newPrompt(schemas[7]);
  await closePrompt();
  if (toChange === 's') {
    const options = await newPrompt(schemas[8]);
    await closePrompt();
    switch (options) {
      case '1':
        removeItemInCart(cart, data);
        break;
      case '2':
        editAmountInCart(cart, data);
        break;
      default:
        console.log('Saindo do carrinho');
    }
  }
};
