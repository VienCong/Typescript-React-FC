import { PropsWithChildren, useState } from 'react';

interface ICellProps<TData> {
  field: keyof TData;
}

// const Cell = <T>(props:PropsWithChildren<ICellProps<T>>) => {
//   return <div>aaa</div>;
// };

const Cell = <T extends Record<string, any>>({ field }: PropsWithChildren<ICellProps<T>>) => {
  return <p>{field.toString()}</p>;
};

type State = ReturnType<typeof useState<number>>;
