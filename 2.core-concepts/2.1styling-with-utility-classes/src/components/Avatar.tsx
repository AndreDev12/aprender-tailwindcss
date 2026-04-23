import type { AvatarProps } from '../types';

export const Avatar = ({ src }: AvatarProps) => {
  return (
    <img
      className="inline-block size-12 rounded-full ring-2 ring-white"
      src={src}
      alt=""
    />
  );
};
