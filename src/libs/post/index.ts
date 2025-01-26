import fs, { readFileSync } from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { remark } from 'remark';
import { visit } from 'unist-util-visit';

import { IGetAllPostsParams, IMDFile, IHeading, TPostListData, TPost } from '@/libs/post/type';
import { slugify } from '@/utils/mark';

const ROOT_DIR = path.join(process.cwd(), 'content');

const getFullPath = (dir: string) => {
  return `${ROOT_DIR}/${dir}`;
};

const getAllMdFilePath = (dir: string = ''): string[] => {
  try {
    const fullDirPath = getFullPath(dir);
    const files = fs.readdirSync(fullDirPath);
    const mdFileList: string[] = [];
    files.forEach((file) => {
      const fullPath = path.join(fullDirPath, file);
      if (fs.statSync(fullPath).isFile() && path.extname(file) === '.md') {
        mdFileList.push(fullPath);
      }
    });
    return mdFileList;
  } catch (e) {
    console.error(`读取文件夹失败：${e}`);
    return [];
  }
};

const parseMdFile = (filePath: string) => {
  const fileContent = readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContent) as unknown as IMDFile;
  return {
    content,
    data,
  };
};

export const getAllPosts = (params: IGetAllPostsParams): TPostListData => {
  const { dir, pageSize = 999, pageNum = 1 } = params;

  const mdFilePathList = getAllMdFilePath(dir);
  const posts: IMDFile[] = mdFilePathList.map((filePath) => parseMdFile(filePath));

  const sortPosts = posts.sort((a, b) => {
    const timeA = +a.data.publishedAt;
    const timeB = +b.data.publishedAt;
    return timeB - timeA;
  });

  return {
    list: sortPosts.slice(pageSize * (pageNum - 1), pageSize * pageNum),
    count: sortPosts.length,
  };
};

/**
 * 获取heading数组
 * @param content mdx string
 * @param limit 获取标题层级限制 默认3 排除1
 */
const getHeadings = (content: string, limit = 3) => {
  const headings: IHeading[] = [];
  remark()
    .use(() => (tree) => {
      visit(tree, 'heading', (node) => {
        if (node['depth'] > 1 && node['depth'] <= limit) {
          /* @ts-expect-error 这里的类型找不到 先跳过 */
          const text = node.children.map((child) => child.value).join('');
          headings.push({ text, id: slugify(text), depth: node['depth'] });
        }
      });
    })
    .processSync(content);

  return headings;
};

export const getPostBySlug = (dir = 'posts', slug: string): TPost => {
  const allMdxFiles = getAllPosts({ dir });
  const file = allMdxFiles.list.find((cur) => cur.data.slug === slug);
  if (!file) {
    throw new Error('post is not found');
  }
  const headings: IHeading[] = getHeadings(file.content);
  return {
    ...file,
    headings,
  };
};
