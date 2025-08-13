import { toUpdade } from '../conectionDB/conectionDb.js';
import { newPrompt, closePrompt } from '../prompt/prompt.js';
import schemas from '../prompt/schema.js';

export const editAmountInCart = async (cart, data) => {
  const item = (await newPrompt(schemas[9])) - 1;
  await closePrompt();
  const amount = await newPrompt(schemas[4]);
  await closePrompt();
  data[item].amount = amount;
  toUpdade(cart, data, item);
};
