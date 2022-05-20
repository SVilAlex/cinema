/* eslint-disable jsx-a11y/anchor-is-valid */
import { signOut } from 'firebase/auth';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { auth } from '../firebase';
import { notification } from '../notification';

const Header = ({ isConnected, setIsConnected }) => {
  const disConnect = () => {
    signOut(auth)
      .then(() => {
        setIsConnected(false);
        notification('success', 'Déconnection réussi !');
      })
      .catch((error) => {
        notification('error', error.message);
      });
  };

  return (
    <div className="header">
      <nav>
        <ul>
          <NavLink to="/" className={(nav) => (nav.isActive ? 'nav-active' : '')}>
            <li>Accueil</li>
          </NavLink>

          <NavLink to="Films" className={(nav) => (nav.isActive ? 'nav-active' : '')}>
            <li>Films</li>
          </NavLink>
          <NavLink to="coup-de-coeur" className={(nav) => (nav.isActive ? 'nav-active' : '')}>
            <li>Coup-de-coeur</li>
          </NavLink>

          {isConnected ? (
            <a style={{ cursor: 'pointer' }} onClick={disConnect}>
              <li>Se déconnecter</li>
            </a>
          ) : (
            <>
              <NavLink to="/Inscription" className={(nav) => (nav.isActive ? 'nav-active' : '')}>
                <li>Inscription</li>
              </NavLink>

              <NavLink to="/Connection" className={(nav) => (nav.isActive ? 'nav-active' : '')}>
                <li>Connection</li>
              </NavLink>
            </>
          )}
        </ul>
      </nav>
      <h1>React Movies</h1>
    </div>
  );
};

export default Header;
