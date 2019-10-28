import unified from 'unified';
import revibe from '.';
import revibe2rehype from 'revibe-rehype';
import html from 'rehype-stringify';
import inspect from 'unist-util-inspect';

const processor = unified()
  .use(revibe)
  .use(revibe2rehype)
  .use(html);

const input = `
# はじめての Vibrant.js＜ヴァイブラント＞

**太字**や_斜体_も自由自在
`;

const parsed = processor.parse(input);
console.log(inspect(parsed));
const transformed = processor.runSync(parsed);
console.log(inspect(transformed));

processor.process(input).then(({contents}) => {
  console.log(contents);
});
