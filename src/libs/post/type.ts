export interface IGetAllPostsParams {
    dir?: string;
    pageSize?: number;
    pageNum?: number;
}

export type TMetaStatus = 'published';

export interface IMetaAuthor {
    name: string;
    picture: string;
}

export interface IMetaTags {
    label: string;
    value: string;
}

export type TMetaData = {
    title: string;
    status: TMetaStatus;
    author: IMetaAuthor;
    slug: string;
    description: string;
    coverImage: string;
    coverFull: boolean;
    disabledComments: boolean;
    tags: IMetaTags[];
    publishedAt: Date;
};

export interface IMDFile {
    data: TMetaData;
    content: string;
}

export interface IHeading {
    text: string;
    id: string;
    depth: number;
}

export type TPostListData = {count: number; list: IMDFile[]};

export type TPost = IMDFile & {headings: IHeading[]};
