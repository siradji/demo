import { Icon } from '@modules/atom/icon';
import { Logo } from '@modules/atom/logo';
import { Card } from '@modules/blocks/card';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import firebase from 'firebase';
import { Button } from '@modules/atom/button';

export const Auth: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const togglePasswordVisiblity = () => {
    setShowPass(showPass ? false : true);
  };
  const Signin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Wrap>
      <Inner>
        <Card variant="lg">
          <Input
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            type="text"
          />
          <Contain>
            <Input
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              type={showPass ? 'text' : 'password'}
            />
            <i onClick={togglePasswordVisiblity} className="far fa-eye-slash"></i>
          </Contain>
          <Button fill onClick={Signin}>
            submit
          </Button>
        </Card>
      </Inner>
    </Wrap>
  );
};

const Wrap = styled.div`
  background-image: url('https://images.unsplash.com/photo-1520901157462-0ea3fb2f9024?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80');
  // backdrop-filter: blur(20%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Contain = styled.div`
  position: relative;
  i {
    position: absolute;
    top: 53%;
    left: 80%;
    color: ${({ theme }) => theme.primary};
    font-size: 1.5rem;
  }
  margin-bottom: 1em;
`;

const Inner = styled.div``;

const Input = styled.input`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.72);
  border: none;
  font-size: 1.5rem;
  border-radius: ${({ theme }) => theme.corner};
  &:focus {
    outline: 0 !important;
  }
  margin-top: 1.5em;
  padding: 1em 1.2em;
  color: ${({ theme }) => theme.accent};
`;
