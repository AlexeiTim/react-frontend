import React from 'react';
import Greeting from './Greeting';
import style from './style.module.css';

const LoginPage = () => {
  const name = "Alex";
  return (
    <div>
      <h1 className={style.heading}>Login Page</h1>
      <Greeting name={name} />
    </div>
  );
};

export default LoginPage;
