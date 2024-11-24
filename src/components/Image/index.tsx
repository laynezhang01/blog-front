import NextImage, {ImageProps} from 'next/image';
import {getPreviewImage} from '@/libs/previewImage';

async function getPreviewImageFn(src?: string) {
    if (!src) {
        return null;
    }
    return await getPreviewImage(src);
}

async function Image(props: ImageProps) {
    const previewImage = await getPreviewImageFn(props.src as string);

    return (
        <NextImage
            className="max-w-full rounded-xl"
            placeholder="blur"
            blurDataURL={previewImage?.dataURIBase64 ?? ''}
            {...props}
        />
    );
}

export default Image;
