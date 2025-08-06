import path from 'path';

const database = path.join(process.cwd(), 'src', 'database', 'database.txt');
const cart = path.join(process.cwd(), 'src', 'database', 'cart.txt');

export { database, cart };
