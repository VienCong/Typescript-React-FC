import React from 'react';
import './App.css';
// import Test from './components/aa';
// import HookuseState from './components/hook-useState';
// import { App3, App4 as Test } from './components/hook-useRef';
// import { App1 as Test } from './components/hook-useContext';
import { App1 as Test } from './components/event';
const MyContext = React.createContext<{ a: number } | undefined>(undefined);
function App() {
  return (
    <div className="App">
      <MyContext.Provider value={{ a: 111 }}>
        <Test />
      </MyContext.Provider>
    </div>
  );
}

export default App;
