import { useMemo, useState } from 'react';
interface CalcResult {
  val: number;
}
export const App1 = () => {
  const [memoDeps] = useState<number>(0);

  const computedVal = useMemo<CalcResult>(() => {
    return { val: memoDeps };
  }, [memoDeps]);

  return (
    <div>
      <div>{computedVal.val}</div>
    </div>
  );
};
