import { generate } from '@terran-one/ldtk';
import parser from './parser';

(async() => {
  await generate(parser);
})();
