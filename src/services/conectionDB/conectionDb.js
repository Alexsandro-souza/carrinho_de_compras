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
      (err) => (err ? reject(err) : resolve())
    );
  });
};

const toRemove = (path, index, data) => {
  data.splice(index, 1);
  return new Promise((resolve) => {
    writeFile(path, JSON.stringify([...data], null, 2), 'utf8', (err) => {
      if (err) {
        reject();
        console.log(err);
      }
      console.log(`Item ${index + 1} removido com sucesso!!!\n\n`);
      resolve();
    });
  });
};

const toUpdade = async (path, data, index) => {
  return new Promise((resolve) => {
    writeFile(path, JSON.stringify([...data], null, 2), 'utf8', (err) => {
      if (err) {
        reject();
        console.log(err);
      }
      console.log(`Item ${index + 1} atualizado com sucesso!!!\n\n`);
      resolve();
    });
  });
};

export { toRead, toRegister, toRemove, toUpdade };
