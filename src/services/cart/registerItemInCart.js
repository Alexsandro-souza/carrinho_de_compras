import { toRead } from '../conectionDB/conectionDb.js';
import { closePrompt, newPrompt } from '../prompt/prompt.js';
import schemas from '../prompt/schema.js';

const showItens = async () => {
  const items = await toRead();
  console.log('====================');
  items.forEach((item, index) => {
    console.log(`\nItem: ${index + 1}`);
    console.log(`Produto: ${item.name}\nPreço: ${item.price}`);
    console.log(`___________________________________________\n\n`);
  });
  return items;
};

//let addMoreItem = await newPrompt(schema[5]);
const choice = async (itens) => {
  let addItem = (await newPrompt(schemas[4])) - 1;
  const isValidChoice = addItem <= itens.length;
  if (!isValidChoice) {
    console.log('Esse item não existe!!!');
    return;
  }
  const fullItem = itens[addItem]; // Adicionar isso no banco
  console.log(fullItem);
};

export const registerItemInCart = async () => {
  await closePrompt();
  const itens = await showItens();
  await choice(itens);

  // while (addMore === '1') {
  //   await showItens();
  //   add = await newPrompt(schema[4]);
  // }
};
