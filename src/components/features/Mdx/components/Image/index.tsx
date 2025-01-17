import NextImage, {ImageProps} from 'next/image';

import {getPreviewImage} from '@/libs/previewImage';

export default async function Image(props: ImageProps) {
    const previewImage = await getPreviewImage((props.src as string) ?? '');

    return (
        <NextImage
            className="max-w-full rounded-xl"
            {...props}
            style={{
                width: '100%',
                height: 'auto',
            }}
            placeholder="blur"
            blurDataURL={previewImage?.dataURIBase64 ?? ''}
        />
    );
}
