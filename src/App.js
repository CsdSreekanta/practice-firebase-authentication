import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";

import './App.css';
import app from './firebase.init';


const auth = getAuth(app);






function App() {
  const [user, setUser] = useState({})
  const handleGoogleSignIn= ()=>{

    const googleProvider = new GoogleAuthProvider()
    signInWithPopup(auth, googleProvider)
    .then((result) =>{
      const user = result.user
      setUser(user)
      console.log(user)
    })
    .catch((error)=>{
      console.log(error)
    })
  
  }
  
  return (
    
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
      <h1>Name: {user.displayName}</h1>
    </div>
  );
}

export default App;
