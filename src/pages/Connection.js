import React, { useState } from 'react';
import Header from '../components/Header';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { notification } from '../notification';
const Connection = ({ isConnected }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) notification('success', 'Vous êtes connecté');
        window.location.replace('/');
      })
      .catch((error) => {
        notification('error', error.message);
      });
  };

  const onChangeHandler = (e, setData) => setData(e.target.value);

  return (
    <>
      {isConnected ? (
        <h2 style={{ textAlign: 'center', color: 'crimson', fontSize: '2rem' }}>Vous etes deja connecté</h2>
      ) : (
        <div className="home-page">
          <div className="login">
            <form onSubmit={(e) => loginHandler(e)}>
              <div>
                <label htmlFor="name">Names</label>
                <input onChange={(e) => onChangeHandler(e, setEmail)} type="email" name="email" id="email" />
              </div>
              <br />
              <div>
                <label htmlFor="pass">Votre mot de passe :</label>
                <input onChange={(e) => onChangeHandler(e, setPassword)} type="password" name="pass" id="pass" />
              </div>
              <br />
              <input type="submit" value="Envoyer" />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Connection;
