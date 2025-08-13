import { toRemove } from '../conectionDB/conectionDb.js';
import schemas from '../prompt/schema.js';
import { newPrompt, closePrompt } from '../prompt/prompt.js';

export const removeItemInCart = async (cart, data) => {
  const genericIndex = await newPrompt(schemas[9]);
  await closePrompt();
  const index = genericIndex - 1;
  const indexIsValid = index <= data.length && index > -1;
  if (!indexIsValid) {
    return console.log('Item inválido!!');
  }
  toRemove(cart, index, data);
};
