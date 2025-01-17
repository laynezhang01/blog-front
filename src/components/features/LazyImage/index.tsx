import NextImage, {ImageProps} from 'next/image';

import {getPreviewImage} from '@/libs/previewImage';

export interface LazyImageProps extends Omit<ImageProps, 'width' | 'height'> {
    width?: number;
    height?: number;
}

export default async function LazyImage(props: LazyImageProps) {
    const {src, style = {}, ...rest} = props;
    if (!src) {
        return null;
    }
    const previewImage = await getPreviewImage(props.src as string);

    return (
        <NextImage
            src={src}
            width={500}
            height={500}
            style={{objectFit: 'cover', objectPosition: 'center', ...style}}
            placeholder={previewImage?.dataURIBase64 ? 'blur' : 'empty'}
            blurDataURL={previewImage?.dataURIBase64}
            {...rest}
        />
    );
}
