import { useEffect, useState, useRef } from 'react';
export const EslintPluginReactHooks = () => {
  const [number, setNumber] = useState<number>(0);
  const numRef = useRef<number>(number);
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(numRef.current);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return <div>EslintPluginReactHooks</div>;
};
