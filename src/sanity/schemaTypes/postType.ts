import {DocumentTextIcon} from '@sanity/icons';
import {defineArrayMember, defineField, defineType} from 'sanity';
import {cnToSlug} from '@/utils/text';

export const postType = defineType({
    name: 'post',
    title: '文章',
    type: 'document',
    icon: DocumentTextIcon,
    fields: [
        defineField({
            name: 'title',
            title: '标题',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
                slugify: input => {
                    return cnToSlug(input);
                }
            }
        }),
        defineField({
            name: 'author',
            title: '作者',
            type: 'reference',
            to: {type: 'author'}
        }),
        defineField({
            name: 'cover',
            title: '封面',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text'
                }
            ]
        }),
        defineField({
            name: 'categories',
            title: '分类',
            type: 'array',
            of: [defineArrayMember({type: 'reference', to: {type: 'category'}})]
        }),
        defineField({
            name: 'tags',
            title: '标签',
            type: 'array',
            description: '请选择标签',
            of: [{type: 'reference', to: {type: 'tag'}}]
        }),
        defineField({
            name: 'publishedAt',
            title: '发布时间',
            type: 'datetime'
        }),
        defineField({
            name: 'updatedAt',
            title: '更新时间',
            type: 'datetime'
        }),
        defineField({
            name: 'enableComments',
            type: 'boolean',
            title: '启用评论',
            initialValue: true
        }),
        defineField({
            name: 'body',
            type: 'blockContent'
        })
    ],
    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage'
        },
        prepare(selection) {
            const {author} = selection;
            return {...selection, subtitle: author && `by ${author}`};
        }
    }
});
