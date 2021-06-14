
import { FC, ReactChild, MouseEvent } from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  children: ReactChild;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: FC<ButtonProps> = ({
  onClick,
  children,
  type = 'button',
}) => (
  <ButtonComponent 
     type={type} 
     data-testid="main-button-cp" 
     onClick={(e: MouseEvent<HTMLButtonElement>) => onClick(e)}
     >
    {children}
  </ButtonComponent>
);

const ButtonComponent = styled.button`
  color: ${({ theme }) => theme.accent};
  font-size: 1rem;
  padding: 10px 20px;
  border-radius: ${({ theme }) => theme.corner};
  border: none;
  background-color: rgba(0, 0, 0, 0.72);
  &:focus {
    outline: 0 !important;
  }
  @media screen and (max-width: 540px) {
    padding: 15px 20px;
  }
  width: 100%;
`;
