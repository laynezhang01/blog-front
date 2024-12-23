import {TagIcon} from '@sanity/icons';
import {defineField, defineType} from 'sanity';

export const categoryType = defineType({
    name: 'category',
    title: '分类',
    type: 'document',
    icon: TagIcon,
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
                maxLength: 96
            }
        }),
        defineField({
            name: 'description',
            title: '说明',
            type: 'text'
        })
    ]
});
