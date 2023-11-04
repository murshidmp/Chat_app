import SignUp from './components/SignUp/SignUp'
import ChatDash from './components/ChatDash/CahtDash'
import { useState } from 'react';
import './App.css';

function App() {
const [isToken, setIsToken] = useState(false);
  return (
    <div >
    <ChatDash/>
      <SignUp/>
      
    </div>
  );
}

export default App;
