import { useCallback, useState } from 'react';

export const App = () => {
  const [callBackDeps] = useState<number>(0);

  const memoizedCallback = useCallback<(param1: string, param2: number) => { test: number }>(
    (param1, param2) => {
      console.log(param1, param2);
      return { test: param2 };
    },
    [callBackDeps],
  );
  return (
    <div>
      <button onClick={() => memoizedCallback('test', 111)}></button>
    </div>
  );
};
