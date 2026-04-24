import type { PersonProps } from '../types';

export const Person = ({ src, name, email }: PersonProps) => {
  return (
    <li className="flex py-4 first:pt-0 last:pb-0">
      <img className="h-10 w-10 rounded-full" src={src} alt={name} />
      <div className="ml-3 overflow-hidden">
        <p className="text-sm font-medium text-gray-900 dark:text-white">
          {name}
        </p>
        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
          {email}
        </p>
      </div>
    </li>
  );
};
