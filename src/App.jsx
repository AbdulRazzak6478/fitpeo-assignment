import './App.css';
import './styles/mediaQuery.css';
import LeftBoard from './LeftBoard';
import RightBoard from './RightBoard';
import { useState } from 'react';

function App() {
  const [isMenu,setIsMenu] = useState(true);
  return (
    <>
      <div className="container">
        <LeftBoard isMenu={isMenu} />
        <RightBoard isMenu={isMenu} setIsMenu={setIsMenu} />
      </div>
    </>
  )
}

export default App
