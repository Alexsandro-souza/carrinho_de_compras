import { readFile, writeFile } from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src', 'database', 'database.txt');

const toRead = async () => {
  return new Promise((resolve) => {
    readFile(filePath, 'utf8', (err, data) => {
      err ? console.log(err) : resolve(JSON.parse(data));
    });
  });
};

const toRegister = async (newData) => {
  const data = await toRead();
  return new Promise((resolve) => {
    writeFile(
      filePath,
      JSON.stringify([...data, newData], null, 2),
      'utf8',
      (err) => {
        err ? reject(err) : resolve();
      }
    );
  });
};

export { toRead, toRegister };
