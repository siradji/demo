import clsx from 'clsx';
import { FC, ReactChild } from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  onClick?: (e: any) => void;
  children: ReactChild;
  type?: 'button' | 'submit' | 'reset';
  fill?: boolean;
  outline?: boolean;
  width?: string;
}

export const Button: FC<ButtonProps> = ({
  onClick,
  fill,
  children,
  type = 'button',
  outline,
  width,
}) => (
  <But type={type} data-testid="main-button-cp" onClick={onClick}>
    {children}
  </But>
);

const But = styled.button`
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
