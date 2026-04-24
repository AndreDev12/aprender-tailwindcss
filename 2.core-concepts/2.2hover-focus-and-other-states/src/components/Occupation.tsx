import type { OccupationProps } from '../types';

export const Occupation = ({ name, title, email }: OccupationProps) => {
  return (
    <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900/50 dark:even:bg-gray-950">
      <td>{name}</td>
      <td>{title}</td>
      <td>{email}</td>
    </tr>
  );
};
