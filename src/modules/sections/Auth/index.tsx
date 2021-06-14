
import { FC, useState } from 'react';
import firebase from 'firebase';
import styled from 'styled-components';

import { Button } from '@modules/atom/button';
import { Card } from '@modules/blocks/card';
import { InputComponent } from '@modules/atom/input/Input';


export const Auth: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const togglePasswordVisiblity = () => {
    setShowPass(!showPass);
  };
  const Signin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Wrap>
      <Inner>
        <Card variant="lg">
          <InputComponent handleChange={setEmail} type={'email'} placeholder={'Enter email'} />
          <Contain>
            <InputComponent handleChange={setPassword} type={showPass ? 'text' : 'password'} placeholder={'Enter Password'} />
            <i onClick={togglePasswordVisiblity} className="far fa-eye-slash" />
          </Contain>
          <Button onClick={Signin}>
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
