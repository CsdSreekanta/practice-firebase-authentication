import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

import "./App.css";
import app from "./firebase.init";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .cath((error) => {
        setUser({});
      });
  };

  const handleGitSignIn = () => {
    const gitProvider = new GithubAuthProvider();
    signInWithPopup(auth, gitProvider)
      .then((res) => {
        const user = res.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="App">
      {user.email ? (
        <button onClick={handleSignOut}>SignOut</button>
      ) : (
        <div>
          <button onClick={handleGoogleSignIn}>Google Sign In</button>
          <button onClick={handleGitSignIn}>Git Sign In</button>
        </div>
      )}

      <h1>Name: {user.displayName}</h1>
    </div>
  );
}

export default App;
