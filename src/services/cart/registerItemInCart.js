import { toRead } from '../conectionDB/conectionDb.js';
import { closePrompt, newPrompt } from '../prompt/prompt.js';
import schemas from '../prompt/schema.js';
import { database, cart } from '../conectionDB/pathDbs.js';
import { showItens } from '../utils/utils.js';
import {toRegister } from '../conectionDB/conectionDb.js'

const choice = async (itens) => {
  let addItem = (await newPrompt(schemas[4])) - 1;
  const isValidChoice = addItem <= itens.length;
  if (!isValidChoice) {
    console.log('Esse item não existe!!!');
    return;
  }
  const chosenItem = itens[addItem];
  await closePrompt();
  return chosenItem;
};

export const registerItemInCart = async () => {
  await closePrompt();
  const itensDb = await showItens(database);
  const chosen = await choice(itensDb);
  toRegister(chosen, cart);
  const itensCart = await showItens(cart);
  console.log('Item adicionado ao carrinho com sucesso!!!');
};
