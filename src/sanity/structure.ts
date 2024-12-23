import type {StructureResolver} from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = S =>
    S.list()
        .title('Blog')
        .items([
            S.documentTypeListItem('post'),
            S.documentTypeListItem('category'),
            S.documentTypeListItem('author'),
            S.divider(),
            ...S.documentTypeListItems().filter(
                item => item.getId() && !['post', 'category', 'author'].includes(item.getId()!)
            )
        ]);
