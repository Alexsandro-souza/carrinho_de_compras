import { newPrompt, closePrompt } from '../src/services/prompt/prompt.js';
import schemas from '../src/services/prompt/schema.js';
import { controller } from '../src/controller/controller.js';

const presentation = await newPrompt(schemas[0]);

controller(presentation);
