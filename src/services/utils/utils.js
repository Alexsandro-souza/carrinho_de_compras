import { toRead } from '../conectionDB/conectionDb.js';

const showItens = async (dbPath) => {
  const items = await toRead(dbPath);
  console.log('====================');
  items.forEach((item, index) => {
    console.log(`\nItem: ${index + 1}`);
    console.log(
      `Produto: ${item.name}\nDescrição: ${
        item.description
      }\nPreço: ${formatCoin(item.price)}\nQuantidade: ${item.amount}`
    );
    console.log(`___________________________________________\n\n`);
  });
  return items;
};

const formatCoin = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

export { showItens, formatCoin };
