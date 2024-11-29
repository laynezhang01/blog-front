import NextImage, {ImageProps} from 'next/image';
import {getPreviewImage} from '@/libs/previewImage';

export interface IBlurImageProps extends Omit<ImageProps, 'src' | 'alt'> {
    src?: string;
    alt?: string;
}

async function BlurImage(props: IBlurImageProps) {
    const {src, alt = ''} = props;
    if (!src) {
        return null;
    }
    const previewImage = await getPreviewImage(src);

    return (
        <NextImage
            className="max-w-full rounded-xl"
            placeholder="blur"
            blurDataURL={previewImage?.dataURIBase64 ?? ''}
            width={previewImage?.originalWidth}
            height={previewImage?.originalHeight}
            src={src}
            alt={alt}
            {...props}
        />
    );
}

export default BlurImage;
