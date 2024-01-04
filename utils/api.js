import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';


// postsが格納されているディレクトリを取得する
const postsDirectory = join(process.cwd(), 'pages/blog/tech');
const sakePostsDirectory = join(process.cwd(), 'pages/blog/sake');

/**
 * pages/blog/{target}/配下にあるディレクトリ名(slug)を全て取得する
 * @param target 取得したい値のターゲット階層
 */
export const getPostSlugs = (target) => {
  // ファイル名、ディレクトリ名を取得
  let allDirents = [];
  if (target === 'tech'){
    // Tech記事
    allDirents = fs.readdirSync(postsDirectory, { withFileTypes: true });
  } else if (target === 'sake'){
    // Sake記事
    allDirents = fs.readdirSync(sakePostsDirectory, { withFileTypes: true });
  }
  // ディレクトリ名のみを返す
  return allDirents
    .filter((dirent) => dirent.isDirectory())
    .map(({ name }) => name);
}

/**
 * 与えられたslugから記事の内容を取得して返す
 * @param slug
 * @param fields 取得したい値(slug|content|title|date|tags)
 * @param target 取得したい値のターゲット階層
 */
export const getPostBySlug = (slug, fields, target) => {
  // ファイルを読み込み
  let fullPath = '';
  if (target === 'tech'){
    fullPath = join(postsDirectory, slug, 'index.md');
  } else if (target === 'sake'){
    fullPath = join(sakePostsDirectory, slug, 'index.md');
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const items = {
    slug: '',
    content: '',
    title: '',
    date: '',
    tags: [],
    despription: '',
    keywords: '',
    image: ''
  }

  // 指定された値を取得する
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    
    if (field === 'title' || 
        field === 'date' || 
        field === 'tags' || 
        field === 'description' ||
        field === 'keywords' ||
        field === 'image') 
    {
      items[field] = data[field];
    }
  });

  return items;
}

/**
 * 全ての記事から指定したfieldsの値を取得する
 * @param fields 取得したい値(slug|content|title|date|tags)
 * @param target 取得したい値のターゲット階層
 */
export const getAllPosts = (fields, target) => {
  const slugs = getPostSlugs(target);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, target))
    .sort((a, b) => {
      // 日付順にソートする(降順)
      const slugA_date = a.date;
      const slugB_date = b.date;
      if (slugA_date < slugB_date) {
        return 1;
      } else {
        slugB_date < slugA_date;
      }
      return slugA_date <= slugB_date ? 1 : -1;
    });
    console.log(posts);
  
  return posts;
}