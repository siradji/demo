import { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface IProps {
  size: string;
  children: ReactNode;
}

export const Logo: FC<IProps> = ({ children, size }: IProps) => {
  return (
    <Text href="/" style={{ fontSize: `${size}px` }}>
      {children}
    </Text>
  );
};

const Text = styled.a`
  color: ${({ theme }) => theme.accent};
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  align-self: center;
`;
