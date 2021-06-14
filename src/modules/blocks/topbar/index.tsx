import Battery from '@modules/atom/battery';
import { Logo } from '@modules/atom/logo';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

export const TopBar: FC = () => {
  const currentDate = new Date();
  const time = currentDate.toLocaleTimeString();
  const date = currentDate.toDateString();
  return (
    <Wrap>
      <Right>
        <Logo size="20">M</Logo>
        <Name className="mr-6">User</Name>
        <ul>
          <li>
            <a href="#">File</a>
          </li>
          <li>
            <a href="#">Edit</a>
          </li>
          <li>
            <a href="#">View</a>
          </li>
          <li>
            <a href="#">Window</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>
      </Right>
      <Middle>
        <Image
          src="https://www.iconsdb.com/icons/preview/black/full-battery-xxl.png"
          alt=""
        />
        <i className="fas fa-search" />
      </Middle>
      <Left>
        <p>
          {date}
          {time}
        </p>
      </Left>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  padding: 3px 20px;
`;

const Right = styled.div.attrs({ className: 'flex' })`
  ul {
    display: inline-flex;
    margin: 0;
    li {
      list-style: none;
      font-size: 1rem;
      margin-right: 0.5em;
      a {
        color: ${({ theme }) => theme.accent};
        text-decoration: none;
      }
    }
  }
  a {
    margin-right: 1em;
  }
`;

const Image = styled.img`
  width: 20px;
`;

const Left = styled.div`
  display: flex;
  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.accent};
    font-weight: bold;
    margin: 0;
  }
`;

const Middle = styled.div.attrs({ className: 'flex' })`
  i {
    color: ${({ theme }) => theme.accent};
    margin-left: 0.5em;
    cursor: pointer;
  }
`;

const Name = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.accent};
  font-weight: bold;
`;
