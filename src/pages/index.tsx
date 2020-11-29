import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #0277bd;
  color: #ffffff;
`;
const Main = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Home: React.FC = () => (
  <Container>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Main>Sandbox Blog for myself by Next.js</Main>
  </Container>
);

export default Home;
