import { useEffect, useState } from 'react';

export const App1 = () => {
  const [effectDep] = useState<number>(0);

  useEffect(() => {
    console.log('test...');
  }, [effectDep]);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('test.......');
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div>useEffect</div>
    </div>
  );
};
