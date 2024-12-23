import {TagIcon} from '@sanity/icons';
import {defineField, defineType} from 'sanity';

export const tagType = defineType({
    name: 'tag',
    title: '标签',
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
        })
    ]
});
