import markdown from 'remark-parse';

import * as ruby from 'revibe-core/lib/syntax/ruby';

export default [markdown, ruby.parser];
