import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { WebcamComponent } from '@modules/blocks/Webcam/Webcam';

interface IProps {
  camera: (boolean) => void;
}

export const Camera: FC<IProps> = ({ camera }: IProps) => {
  const [expand, setExpand] = useState<boolean>(false);

  const rangeTop: number = Math.floor(Math.random() * 20);
  const rangeLeft: number = Math.floor(Math.random() * 50);

  const toggleExpand = () => setExpand(!expand)

  return (
    <Wrap
      style={{
        top: `${expand ? '0' : rangeTop}%`,
        left: `${expand ? '0' : rangeLeft}%`,
        width: `${expand ? '100%' : '700px'}`,
        height: `${expand ? '100vh' : '500px'}`,
        position: `${expand ? 'relative' : 'absolute'}`,
      }}
    >
      <Top>
        <p>Camera</p>

        <div className="flex">
          <i
            onClick={() => camera(false)}
            style={{ marginRight: '1em' }}
            className="fas fa-times"
          />
          <i onClick={toggleExpand} className="fas fa-square" />
        </div>
      </Top>
      <Middle>
        <Wrapper>
          <WebcamComponent />
          <Flex>
            <button className="flex justify-center items-center">
              <i className="fas fa-camera" />
            </button>
          </Flex>
        </Wrapper>
      </Middle>
      <Bottom />
    </Wrap>
  );
};

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 85%;
  left: 40%;
  z-index: 9;
  button {
    background-color: #f54748;
    padding: 2em;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    cursor: pointer;
  }
  i {
    color: ${({ theme }) => theme.accent};
    font-size: 1.5rem;
  }
`;

const Wrap = styled.div`
  background-color: ${({ theme }) => theme.accent};
  border-radius: ${({ theme }) => theme.corner};
`;

const Top = styled.div.attrs({ className: 'flex justify-between' })`
  background-color: ${({ theme }) => theme.primary};
  padding: 0 1em;
  i {
    color: ${({ theme }) => theme.accent};
    cursor: pointer;
  }
  p {
    color: ${({ theme }) => theme.accent};
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const Middle = styled.div.attrs({ className: 'flex' })`
  background-color: ${({ theme }) => theme.primary};
  height: 100%;
  width: 100%;
`;

const Bottom = styled.div.attrs({ className: 'flex' })`
  background-color: ${({ theme }) => theme.accent};
`;
