import { toRead } from '../conectionDB/conectionDb.js';
import { closePrompt, newPrompt } from '../prompt/prompt.js';
import schemas from '../prompt/schema.js';
import { database, cart } from '../conectionDB/pathDbs.js';
import { showItens } from '../utils/utils.js';
import {toRegister } from '../conectionDB/conectionDb.js'

const choice = async (itens) => {
  let addItem = (await newPrompt(schemas[5])) - 1;
  const isValidChoice = addItem <= itens.length;
  if (!isValidChoice) {
    console.log('Esse item não existe!!!');
    return;
  }
  const fullItem = itens[addItem];
  await closePrompt();
  const amount = await newPrompt(schemas[4]);
  await closePrompt();
  fullItem.amount = amount;
  return fullItem;
};

export const registerItemInCart = async () => {
  await closePrompt();
  const itensDb = await showItens(database);
  const chosen = await choice(itensDb);
  toRegister(chosen, cart);
  console.log('Item adicionado ao carrinho com sucesso!!!');
};
