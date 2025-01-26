import NextImage, { ImageProps } from 'next/image';
import { getPreviewImage } from '@/libs/previewImage';
import { LazyImage } from '@/components/features';

type CustomImageProps = Omit<ImageProps, 'src'> & {
  src: string;
};

export default async function Image(props: CustomImageProps) {
  const { src, alt, className = '', ...restProps } = props;

  // 获取预览图
  const previewImage = await getPreviewImage(src);

  return (
    <LazyImage
      src={src}
      alt={alt}
      className={`max-w-full rounded-xl ${className}`} // 合并 className
      {...restProps} // 保留其他 props
    />
  );
}
