import clsx from 'clsx';
import React, { FC } from 'react';
import styled from 'styled-components';

export type CardSize = 'md' | 'sm' | 'lg';

export const CardVariant: Record<CardSize, string> = {
  lg: ' shadow-lg p-12 max-w-50',
  sm: ' shadow-sm p-6 max-w-35',
  md: ' shadow p-10 max-w-28',
};

interface IProps {
  variant: CardSize;
}

export const Card: FC<IProps> = ({ variant, children }) => (
  <Wrap className={clsx(CardVariant[variant], 'rounded overflow-hidden my-2')}>
    {children}
  </Wrap>
);

const Wrap = styled.div`
  background-color: ${({ theme }) => theme.primary};
  border-radius: ${({ theme }) => theme.corner};
`;
