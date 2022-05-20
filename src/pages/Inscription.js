import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { notification } from '../notification';

const Inscription = ({ isConnected }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const submit = (e) => {
    e.preventDefault();

    if (password === passwordConfirm) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          notification('success', 'Votre compte à bien été crée');
          return userCredential.user.updateProfile({
            displayName: name,
          });
        })
        .catch((error) => {
          notification('error', error.message);
        });

      window.location.replace('/Connection');
    }
  };
  const onChangeHandler = (e, setData) => setData(e.target.value);

  return (
    <>
      {isConnected ? (
        <h2 style={{ textAlign: 'center', color: 'crimson', fontSize: '2rem' }}>Vous etes deja connecté</h2>
      ) : (
        <div className="home-page">
          <form onSubmit={(e) => submit(e)}>
            <div>
              <label htmlFor="nom">Votre nom :</label>
              <input onChange={(e) => onChangeHandler(e, setName)} type="text" name="nom" id="nom" />
            </div>
            <br></br>
            <div>
              <label htmlFor="email">Votre email :</label>
              <input onChange={(e) => onChangeHandler(e, setEmail)} type="email" name="email" id="email" />
            </div>
            <br />

            <div>
              <label htmlFor="pass">Votre mot de passe :</label>
              <input onChange={(e) => onChangeHandler(e, setPassword)} type="password" name="pass" id="pass" />
            </div>
            <br />
            <div>
              <label htmlFor="confpass">Confirmer votre mot de passe :</label>
              <input
                onChange={(e) => onChangeHandler(e, setPasswordConfirm)}
                type="password"
                name="confpass"
                id="confpass"
              />
            </div>
            <br />
            <input type="submit" value="Envoyer" />
          </form>
        </div>
      )}
    </>
  );
};

export default Inscription;
