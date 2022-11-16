import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuth } from './AuthProvider';

export default function Signup() {
  const auth = useAuth();

  function registerBtn(evt) {
    auth.register();
  }

  return auth?.token ? (
    <>
      <h1>
        Welcome {auth.idTokenParsed.given_name} {auth.idTokenParsed.family_name}
      </h1>
      <p>email : {auth.idTokenParsed.email}</p>
    </>
  ) : (
    <>
      <Button onClick={registerBtn}>Register</Button>
    </>
  );
}