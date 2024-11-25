import NextImage, {ImageProps} from 'next/image';
import {getPreviewImage} from '@/libs/previewImage';

async function BlurImage(props: ImageProps) {
    const previewImage = await getPreviewImage(props.src as string);

    return (
        <NextImage
            className="max-w-full rounded-xl"
            placeholder="blur"
            blurDataURL={previewImage?.dataURIBase64 ?? ''}
            {...props}
        />
    );
}

export default BlurImage;
