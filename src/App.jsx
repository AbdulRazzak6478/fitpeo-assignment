import './App.css';
import './styles/mediaQuery.css';
import LeftBoard from './LeftBoard';
import RightBoard from './RightBoard';

function App() {

  return (
    <>
      <div className="container">
        <LeftBoard />
        <RightBoard />
      </div>
    </>
  )
}

export default App
