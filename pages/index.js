import Head from "next/head";
import styled from "styled-components";
import RequestedWord from "../components/RequestedWord/RequestedWord";
import WordCategory from "../components/WordCategory/WordCategory";
import getRandomInt from "../utils/getRandomInt";
import data from "../data/cityData.json";

export default function Home() {
  const num = getRandomInt(data.length);

  return (
    <>
      <Head>
        <title>Capstone-Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        Welcome to my{" "}
        <a
          href="https://github.com/flohip/capstone-project"
          rel="noreferrer"
          target="_blank"
        >
          Capstone-Project!
        </a>
      </Header>
      <StyledMain>
        <WordCategory data={data} num={num} />
        <RequestedWord data={data} num={num} />
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  @media (min-width: 1024px) {
    font-size: 3rem;
  }
  @media (max-width: 1024px) {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
  }
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: inherit;
`;

const Header = styled.h1`
  @media (min-width: 1024px) {
    font-size: 4rem;
  }
  @media (max-width: 1024px) {
    font-size: 3rem;
  }
  @media (max-width: 600px) {
    font-size: 2rem;
  }
  color: steelblue;
  margin: 0;
  font-size: inherit;
  line-height: 1.15;
  text-align: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  > a {
    color: #0070f3;
  }

  > a:hover,
  > a:focus,
  > a:active {
    text-decoration: underline;
  }
`;
