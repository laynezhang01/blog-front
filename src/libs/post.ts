import fs from 'fs';
import {readdir, readFile} from 'node:fs/promises';
import path from 'path';
import matter from 'gray-matter';
import {visit} from 'unist-util-visit';
import {remark} from 'remark';
import {slugify} from '@/utils/mark';
import dayjs from '@/utils/dayjs';
import {POST_DEFAULT_COVER_MAP} from '@/config/post';

const POSTS_DIR = path.join(process.cwd(), 'posts');

export interface IGetAllPostsFilter {
    dir?: string;
    pageSize?: number;
    pageNumber?: number;
}

export interface IGetAllPostsRes {
    list: IParseMDFile[];
    count: number;
}

export type MetaData = {
    title: string;
    createdAt: string;
    updatedAt?: string;
    tags?: string;
    cover?: string;
    location?: string;
    summary?: string;
};

export interface IMatter extends matter.GrayMatterFile<string> {
    data: MetaData;
    content: string;
}

export interface IParseMDFileMetaData extends Omit<MetaData, 'createdAt' | 'updatedAt'> {
    createdAt: number;
    updatedAt: number;
}

export interface IParseMDFile {
    data: IParseMDFileMetaData;
    slug: string;
    content: string;
}

export interface IGetPostBySlugRes extends IParseMDFile {
    headings: IHeading[];
}

export interface IHeading {
    text: string;
    id: string;
    depth: number;
}

export const readMDXFile = (filePath: string): IMatter => {
    let rawContent = fs.readFileSync(filePath, 'utf8');
    return matter(rawContent) as IMatter;
};

/**
 * 递归获取传入dir的所有md文件路径
 * @param dir 文章路径 默认值是全部posts
 */
export const getDirAllMDPath = async (dir: string = POSTS_DIR) => {
    const entries = await readdir(dir, {withFileTypes: true});
    const files: string[] = [];

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        const isMdFile = entry.name.endsWith('.md') || entry.name.endsWith('mdx');
        if (entry.isDirectory()) {
            const nestedFiles = await getDirAllMDPath(fullPath);
            files.push(...nestedFiles);
        }
        if (entry.isFile() && isMdFile) {
            files.push(fullPath);
        }
    }

    return files;
};

/**
 * 获取heading数组
 * @param content mdx string
 * @param limit 获取标题层级限制 默认3 排除1
 */
const getHeadings = (content: string, limit = 3) => {
    const headings: IHeading[] = [];
    remark()
        .use(() => tree => {
            visit(tree, 'heading', node => {
                if (node['depth'] > 1 && node['depth'] <= limit) {
                    /* @ts-expect-error 这里的类型找不到 先跳过 */
                    const text = node.children.map(child => child.value).join('');
                    headings.push({text, id: slugify(text), depth: node['depth']});
                }
            });
        })
        .processSync(content);

    return headings;
};

/**
 * md文件转换
 * @param filePath 文件地址
 */
const parseMDFile = async (filePath: string): Promise<IParseMDFile> => {
    const content = await readFile(filePath, 'utf8');
    const {data, content: body} = matter(content) as IMatter;
    const curDir = filePath.split('/');
    // TODO 这里获取可能不太合理 后面再看一下
    const cover = data.cover ? data.cover : POST_DEFAULT_COVER_MAP[curDir[curDir.length - 2]];

    return {
        data: {
            ...data,
            cover: cover,
            createdAt: +dayjs(data.createdAt),
            updatedAt: data.updatedAt ? +dayjs(data.updatedAt) : 0
        },
        slug: slugify(path.basename(filePath, path.extname(filePath))),
        content: body
    };
};

export const getAllPosts = async (params: IGetAllPostsFilter = {}): Promise<IGetAllPostsRes> => {
    const {dir, pageSize = 999, pageNumber = 1} = params;
    const files = await getDirAllMDPath(dir);

    const posts: Awaited<IParseMDFile>[] = await Promise.all(
        files.map(async file => {
            return await parseMDFile(file);
        })
    );
    const sortPosts = posts.sort((a, b) => {
        const timeA = a.data.updatedAt ?? a.data.createdAt;
        const timeB = b.data.updatedAt ?? b.data.createdAt;
        return timeB - timeA;
    });

    return {
        list: sortPosts.slice(pageSize * (pageNumber - 1), pageSize * pageNumber),
        count: sortPosts.length
    };
};

/**
 * 通过slug获取文章
 * @param slug 文章slug
 */
export const getPostBySlug = async (slug: string): Promise<IGetPostBySlugRes> => {
    const allMdxFiles = await getAllPosts();
    const file = allMdxFiles.list.find(cur => slugify(cur.slug === slug));
    if (!file) {
        throw new Error('post is not found');
    }
    const headings: IHeading[] = getHeadings(file.content);
    return {
        ...file,
        headings
    };
};

/**
 * 筛选
 * @param options
 */
// export const filterMDXFile = (options: Partial<IArticleFilters>) => {
//     let allMdxFiles = getMDXFiles();
//     const {tag, pageNumber, pageSize} = options;
//
//     if (pageNumber && pageSize) {
//         const start = pageSize * pageNumber - 1;
//         const end = start + pageSize;
//         allMdxFiles = allMdxFiles.slice(start, end);
//     }
//
//     if (tag) {
//         return allMdxFiles.filter(file => {
//             const {data} = readMDXFile(path.join(ARTICLES_DIR, file));
//             return data.tags?.includes(tag);
//         });
//     }
//
//     return allMdxFiles;
// };

// export const strToTags = (str?: string): ITag[] => {
//     if (!str) {
//         return [];
//     }
//     return str.split(',').map(item => ({slug: slugify(item), text: item}));
// };

/**
 * 获取所有标签
 */
// export const getAllTags = (): ITag[] => {
//     const dir = path.join(process.cwd(), 'content');
//     const allMdxFiles = getMDXFiles();
//
//     // 取出所有标签
//     const filesAllTag = allMdxFiles
//         .map(file => {
//             const {data} = readMDXFile(path.join(dir, file));
//             return strToTags(data.tags);
//         })
//         .flat();
//
//     // 去重所有标签
//     return filesAllTag.reduce((pre: ITag[], cur) => {
//         if (!pre.some(tag => tag.slug === cur.slug)) {
//             pre.push(cur);
//         }
//         return pre;
//     }, []);
// };
