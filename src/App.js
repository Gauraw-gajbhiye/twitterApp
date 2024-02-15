
import { useEffect, useState } from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import { onAuthStateChanged } from 'firebase/auth';
import LoginResistrationPage from './Pages/LoginResistrationPage';
import { auth } from './firebase';

function App() {

  const [loggedInUser, setloggedInUser] = useState(null)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setloggedInUser(uid)
      } else {
        setloggedInUser(null)
      }
    });
  }, [])

  console.log("ssssss");
  console.log("==>>", loggedInUser);

  return (
    <div>
      {
        loggedInUser ? (<HomePage />) : (<LoginResistrationPage />)
      }
    </div>
  );
}

export default App;
