import { useLayoutEffect, useState } from 'react';

export const App1 = () => {
  const [effectDep] = useState<number>(0);

  useLayoutEffect(() => {
    console.log('test...');
  }, [effectDep]);

  useLayoutEffect(() => {
    const timer = setInterval(() => {
      console.log('test.......');
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div>useLayoutEffect</div>
    </div>
  );
};
