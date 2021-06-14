import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

interface IProps {
  rss: any[];
  cancel: (boolean) => void;
}

export const Rss: FC<IProps> = ({ rss, cancel }: IProps) => {
  const [expand, setExpand] = useState<boolean>(false);

  const min = rss.slice(0, 4);
  const max = rss.slice(0, 10);
  const rangeTop: number = Math.floor(Math.random() * 20);
  const rangeLeft: number = Math.floor(Math.random() * 50);

  const toggleExpand = () => setExpand(!expand);

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
        <p>News</p>

        <div className="flex">
          <i
            onClick={() => cancel(false)}
            style={{ marginRight: '1em' }}
            className="fas fa-times"
          />
          <i onClick={toggleExpand} className="fas fa-square" />
        </div>
      </Top>
      <Middle>
        <Wrapper>
          <div className={`${expand ? 'grid grid-cols-3' : 'grid grid-cols-1'}`}>
            {expand ? (
              <>
                {max.map(({
                  title, link, description, enclosure, author,
                }: any) => (
                  <div className="w-full flex overflow-hidden my-2">
                    <div className="w-full" style={{ flexBasis: '60%' }}>
                      <img src={enclosure.link} className="w-full" alt="" />
                    </div>
                    <div className="w-full ml-6" style={{ flexBasis: '40%' }}>
                      <h2 className="prose lg:prose-xl">{title}</h2>
                      <article className="prose lg:prose-sm mt-6">
                        {description}
                      </article>
                      <p className="prose lg:prose-sm mt-6">
                        By:
                        {author}
                      </p>
                      <a href={link} target="_blank" className="mt-6" rel="noreferrer">
                        Read More
                        {' '}
                        <i className="fas fa-chevron-right" />
                      </a>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                {min.map(({
                  title, link, description, enclosure, author,
                }: any) => (
                  <div className="w-full flex overflow-hidden my-2">
                    <div className="w-full" style={{ flexBasis: '60%' }}>
                      <img src={enclosure.link} className="w-full" alt="" />
                    </div>
                    <div className="w-full ml-6" style={{ flexBasis: '40%' }}>
                      <h2 className="prose lg:prose-lg">{title}</h2>
                      <article className="prose lg:prose-sm mt-6">
                        {description}
                      </article>
                      <p className="prose lg:prose-sm mt-6">
                        By:
                        {author}
                      </p>
                      <a href={link} target="_blank" className="mt-6" rel="noreferrer">
                        Read More
                        {' '}
                        <i className="fas fa-chevron-right" />
                      </a>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
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
  a {
    color: ${({ theme }) => theme.secondary};
    font-size: 1.2em;
  }
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
  overflow-y: scroll;
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
  background-color: ${({ theme }) => theme.accent};
  height: 100%;
  width: 100%;
`;

const Bottom = styled.div.attrs({ className: 'flex' })`
  background-color: ${({ theme }) => theme.accent};
`;
