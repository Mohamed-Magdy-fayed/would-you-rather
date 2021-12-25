import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import middleware from './middleware'
import { HashRouter } from 'react-router-dom';
import { auth } from './firebase/config';
import {
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState()

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    return signOut(auth)
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  }
  return value
}

const store = createStore(reducers, middleware)

ReactDOM.render(
  <HashRouter>
    <Provider store={store} value={useAuth} >
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);
