import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from 'remark-gfm'; // markdown→html(table)
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";


/**
 * remarkによるmarkdownの構文変換を行う
 * @param markdown markdownで書かれたプレーンテキスト
 * @returns String 変換結果
 */
const markdownToHtml = async (markdown) => {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}

export default markdownToHtml;