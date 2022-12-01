interface AppProps {
  message: string;
}

export const App = ({ message }: AppProps) => {
  return <div>{message}</div>;
};

import { PropsWithChildren } from 'react';

export const AppWithChildren = ({ message, children }: PropsWithChildren<AppProps>) => {
  return (
    <div>
      <div>{message}</div>
      <div>{children}</div>
    </div>
  );
};
