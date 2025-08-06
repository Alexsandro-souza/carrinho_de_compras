import { readFile, writeFile } from 'fs';

const toRead = async (path) => {
  return new Promise((resolve) => {
    readFile(path, 'utf8', (err, data) => {
      err ? console.log(err) : resolve(JSON.parse(data));
    });
  });
};

const toRegister = async (newData, filePath) => {
  const data = await toRead(filePath);
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
