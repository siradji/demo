import Battery from '@modules/atom/battery';
import { Logo } from '@modules/atom/logo';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

interface IProps {
  src: string;
  value: string;
  select: any;
  selected: any[];
}

export const Icon: FC<IProps> = ({
  src, value, select, selected,
}: IProps) => (
  <Wrap onClick={(e) => select([...selected, e.currentTarget.value])} value={value}>
    <Image src={src} />
  </Wrap>
);

const Wrap = styled.button`
  background-color: ${({ theme }) => theme.accent};
  border-radius: ${({ theme }) => theme.corner};
  padding: 1em 1.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadow};
  margin-right: 1em;
`;

const Image = styled.img`
  width: 50px;
`;
