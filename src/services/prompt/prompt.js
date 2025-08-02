import readline from 'readline';

let prompt;
const question = async (text) => {
  return new Promise((resolve) => {
    prompt.question(text, resolve);
  });
};

const newPrompt = async (schema) => {
  prompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let isValid = false;
  let response;
  while (!isValid) {
    response = await question(schema.message);
    isValid = schema.validate.test(response);
    if (!isValid && response.length > 0) console.log(schema.error);
  }
  return response;
};

const closePrompt = async () => {
  prompt.close();
};

export { newPrompt, closePrompt };
