// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context

import { createContext, useContext } from 'react';
interface User {
  name: string;
  age: number;
}
const UserContext = createContext<User | null>(null);
export const App1 = () => {
  return (
    <UserContext.Provider value={{ name: 'test', age: 19 }}>
      <SonApp />
    </UserContext.Provider>
  );
};

const SonApp = () => {
  const context = useContext(UserContext);
  return <div>{context?.age}</div>;
};
