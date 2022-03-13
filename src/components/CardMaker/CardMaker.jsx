import React from 'react';
import { useAuth } from '../../services/auth';

const CardMaker = (props) => {
  const { user, setUser, login, logout } = useAuth();

  return <>hi! {user.displayName}</>;
};

export default CardMaker;
