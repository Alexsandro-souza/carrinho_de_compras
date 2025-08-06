import { toRead } from '../conectionDB/conectionDb.js';

export const showItens = async (dbPath) => {
  const items = await toRead(dbPath);
  console.log('====================');
  items.forEach((item, index) => {
    console.log(`\nItem: ${index + 1}`);
    console.log(
      `Produto: ${item.name}\nPreço: ${item.description}\nPreço: ${item.price}`
    );
    console.log(`___________________________________________\n\n`);
  });
  return items;
};
