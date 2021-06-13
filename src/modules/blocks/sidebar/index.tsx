import Battery from '@modules/atom/battery';
import { Logo } from '@modules/atom/logo';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

interface IProps {
  camera: any;
  browser: any;
  rss: any;
  gallery: any;
}

export const Sidebar: FC<IProps> = ({ camera, gallery, browser, rss }: IProps) => {
  return (
    <Wrap>
      <Inner>
        <Icon onClick={() => camera(true)}>
          <Image src="https://image.flaticon.com/icons/png/512/3249/3249934.png" />
        </Icon>
        <Icon onClick={() => rss(true)}>
          <Image src="https://image.flaticon.com/icons/png/512/1176/1176875.png" />
        </Icon>
        <Icon onClick={() => browser(true)}>
          <Image src="https://image.flaticon.com/icons/png/512/3820/3820255.png" />
        </Icon>
        <Icon onClick={() => gallery(true)}>
          <Image src="https://image.flaticon.com/icons/png/512/3342/3342176.png" />
        </Icon>
      </Inner>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 37em;
`;

const Icon = styled.button`
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

const Inner = styled.div`
  background-color: ${({ theme }) => theme.primary};
  padding: 1em 2em;
  margin-top: auto;

  border-radius: ${({ theme }) => theme.corner};
  display: flex;
`;
