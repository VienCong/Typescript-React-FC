import { useState } from 'react';

interface User {
  name: string;
  age: number;
}

const App = () => {
  // 空值推断
  // useState<undefined>(): [undefined, React.Dispatch<React.SetStateAction<undefined>>]
  const [undefinedVal1, setUndefinedVal1] = useState();

  // 类型推断
  // useState<undefined>(initialState: (() => undefined) | undefined): [undefined, React.Dispatch<React.SetStateAction<undefined>>]
  const [undefinedVal2, setUndefinedVal2] = useState(undefined);
  // useState<null>(initialState: (() => null) | null): [null, React.Dispatch<React.SetStateAction<null>>]
  const [nullVal, setNullVal] = useState(null);

  // 声明类型-赋值为空
  // useState<number>(): [number | undefined, React.Dispatch<React.SetStateAction<number | undefined>>]
  const [val, setVal] = useState<number>();

  // 推荐声明方式
  const [user1, setUser1] = useState<User | null>(null);
  const [user2, setUser2] = useState<User>({} as User);

  const usageOfUserData = () => {
    console.log(user1?.age);
    console.log(user2.age);
  };

  return (
    <div>
      <div>test</div>
    </div>
  );
};

export default App;
