import {UserIcon} from '@sanity/icons';
import {defineArrayMember, defineField, defineType} from 'sanity';

export const authorType = defineType({
    name: 'author',
    title: '作者',
    type: 'document',
    icon: UserIcon,
    fields: [
        defineField({
            name: 'name',
            title: '名字',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name'
            }
        }),
        defineField({
            name: 'avatar',
            title: '头像',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: 'bio',
            title: '介绍',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'block',
                    styles: [{title: 'Normal', value: 'normal'}],
                    lists: []
                })
            ]
        })
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image'
        }
    }
});
