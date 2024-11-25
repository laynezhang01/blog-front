import fs from 'fs';
import path from 'path';
import {slugify} from '@/utils/mark';
import dayjs from 'dayjs';
import matter from 'gray-matter';

const POSTS_DIR = path.join(process.cwd(), 'posts');

export interface ITag {
    slug: string;
    text: string;
}

export interface IPostFilters {
    tag?: string;
    pageSize?: number;
    pageNumber?: number;
}

export type MetaData = {
    title: string;
    createdAt: string;
    updatedAt?: string;
    tags?: string;
    cover?: string;
    category?: string;
    city?: string;
    province?: string;
    country?: string;
};

export interface IMatter extends matter.GrayMatterFile<string> {
    data: MetaData;
}

export interface IListPostData {
    data: MetaData;
    slug: string;
}

export interface IGetPostsRes {
    list: IListPostData[];
    total: number;
    pageSize?: number;
    pageNum?: number;
}

export interface ISlugPostData extends IListPostData {
    content: string;
    // headings: IHeading[];
}

export const readMDXFile = (filePath: string): IMatter => {
    let rawContent = fs.readFileSync(filePath, 'utf8');
    return matter(rawContent) as IMatter;
};

/**
 *  获取content文件夹下mdx文件列表
 *  dir 文件夹 默认读取content文件夹
 */
export const getMDXFiles = (dir = POSTS_DIR) => {
    return fs.readdirSync(dir).filter(file => path.extname(file) === '.mdx');
};

/**
 * 按照创建时间倒序
 * @param postFiles 文件名列表
 */
const sortPostByCreateDate = (postFiles: string[]) => {
    return postFiles.sort((a, b) => {
        const before = readMDXFile(path.join(POSTS_DIR, a));
        const after = readMDXFile(path.join(POSTS_DIR, b));
        const beforeDate = +dayjs(before.data.createdAt);
        const afterDate = +dayjs(after.data.createdAt);
        return afterDate - beforeDate;
    });
};

/**
 * 筛选
 * @param options
 */
export const filterMDXFile = (options: Partial<IPostFilters>) => {
    let allMdxFiles = getMDXFiles();
    const {tag, pageNumber, pageSize} = options;

    if (pageNumber && pageSize) {
        const start = pageSize * pageNumber - 1;
        const end = start + pageSize;
        allMdxFiles = allMdxFiles.slice(start, end);
    }

    if (tag) {
        return allMdxFiles.filter(file => {
            const {data} = readMDXFile(path.join(POSTS_DIR, file));
            return data.tags?.includes(tag);
        });
    }

    return allMdxFiles;
};

/**
 * 获取所有文章
 * @param options 可以筛选标签
 */
export const getAllBlogPosts = (options: IPostFilters = {}): IGetPostsRes => {
    const filterData = filterMDXFile(options);
    let sortData = sortPostByCreateDate(filterData);

    const list = sortData.map(file => {
        const {data} = readMDXFile(path.join(POSTS_DIR, file));
        // 获取文件名 不包含后缀
        const filename = path.basename(file, path.extname(file));
        const slug = slugify(filename);

        return {
            data,
            slug
        };
    });

    const res: IGetPostsRes = {
        list,
        total: list.length
    };

    if (options.pageNumber && options.pageSize) {
        res.pageNum = options.pageNumber;
        res.pageSize = options.pageSize;
    }
    return res;
};

/**
 * 通过slug获取文章
 * @param slug 文章slug
 */
export const getBlogPostBySlug = (slug: string): ISlugPostData => {
    const allMdxFiles = getMDXFiles();
    const file = allMdxFiles.find(filename => slugify(filename.replace(/.mdx/, '')) === slug);
    if (!file) {
        throw new Error('post is not found');
    }
    const {data, content} = readMDXFile(path.join(POSTS_DIR, file));
    // 获取文件名 不包含后缀
    // const headings = extractMarkdownHeaders(content);

    return {
        data,
        slug,
        content
        // headings
    };
};

export const strToTags = (str?: string): ITag[] => {
    if (!str) {
        return [];
    }
    return str.split(',').map(item => ({slug: slugify(item), text: item}));
};

/**
 * 获取所有标签
 */
export const getAllTags = (): ITag[] => {
    const dir = path.join(process.cwd(), 'content');
    const allMdxFiles = getMDXFiles();

    // 取出所有标签
    const filesAllTag = allMdxFiles
        .map(file => {
            const {data} = readMDXFile(path.join(dir, file));
            return strToTags(data.tags);
        })
        .flat();

    // 去重所有标签
    return filesAllTag.reduce((pre: ITag[], cur) => {
        if (!pre.some(tag => tag.slug === cur.slug)) {
            pre.push(cur);
        }
        return pre;
    }, []);
};
