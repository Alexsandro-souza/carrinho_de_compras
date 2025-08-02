import { toRegister } from '../conectionDB/conectionDb.js';
import { newPrompt, closePrompt } from '../prompt/prompt.js';
import schemas from '../prompt/schema.js';

export const registerItem = async () => {
  const newItem = {
    name: '',
    description: '',
    price: 0,
    subtotal: 0,
  };
  let interator = 1;
  for (const key in newItem) {
    if (interator > 3) break;
    newItem[key] = await newPrompt(schemas[interator]);
    interator++;
  }

  await toRegister(newItem);
  closePrompt();
};
