import NextImage, { ImageProps } from 'next/image';

import { getPreviewImage } from '@/libs/previewImage';

export interface LazyImageProps extends Omit<ImageProps, 'width' | 'height'> {
  width?: number;
  height?: number;
}

const DEFAULT_BLUR_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/1h1ZAAAAABJRU5ErkJggg==';

export async function LazyImage(props: LazyImageProps) {
  const { src, style = {}, width = 500, height = 500, ...rest } = props;
  if (!src) {
    return null;
  }
  const previewImage = await getPreviewImage(props.src as string);

  return (
    <NextImage
      src={src}
      width={500}
      height={500}
      style={{ objectFit: 'cover', objectPosition: 'center', ...style }}
      placeholder={'blur'}
      blurDataURL={DEFAULT_BLUR_DATA_URL ?? previewImage?.dataURIBase64}
      {...rest}
    />
  );
}
