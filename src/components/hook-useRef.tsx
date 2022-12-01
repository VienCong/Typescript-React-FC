import { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';

// App1
// dom ref
export const App1 = () => {
  // useRef<HTMLInputElement>(initialValue: HTMLInputElement | null): React.RefObject<HTMLInputElement>
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <input ref={inputRef} type="text" />;
};

// App2
// dom forwardRef
export const App2 = () => {
  // useRef<HTMLInputElement>(initialValue: HTMLInputElement | null): React.RefObject<HTMLInputElement>
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="App">
      <ForwardRefMyInput ref={inputRef} />
    </div>
  );
};

const ForwardRefMyInput = forwardRef<HTMLInputElement>((props, ref) => {
  return <input {...props} ref={ref} type="text" />;
});

// App3 useImperativeHandle
type CountdownHandleRef = {
  start: () => void;
};

export const App3 = () => {
  // useRef<CountdownHandleRef>(initialValue: CountdownHandleRef | null): React.RefObject<CountdownHandleRef>
  const countdownEl = useRef<CountdownHandleRef>(null);

  useEffect(() => {
    countdownEl.current?.start();
  }, []);

  return <Countdown ref={countdownEl} />;
};

const Countdown = forwardRef<CountdownHandleRef>((...[, ref]) => {
  useImperativeHandle(ref, () => ({
    start() {
      console.log('Start');
    },
  }));

  return <div>Countdown</div>;
});

// App4 获取最新值
export const App4 = () => {
  // useRef<number>(initialValue: number): React.MutableRefObject<number>
  const intervalRef = useRef<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      intervalRef.current++;
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getTempVal = () => {
    console.log(intervalRef.current);
  };

  return (
    <div>
      <button onClick={getTempVal}>getTempVal</button>
    </div>
  );
};
