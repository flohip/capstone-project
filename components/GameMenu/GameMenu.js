import Image from "next/image";
import calculateHeight from "../../utils/calculateHeight";
import gummiBearPicture from "../../images/altair-valasek-6uHnajYSsW0-unsplash.jpg"; // 4000 x 1844 px
import fireworksPicture from "../../images/ray-hennessy-gdTxVSAE5sk-unsplash.jpg"; // 4091 x 2720 px
import styled from "styled-components";
export default function GameMenu({
  startTheGame,
  wonGame,
  guessedAllWords,
  score,
}) {
  const gummiBearWidth = 300;
  const fireworksWidth = 300;

  return guessedAllWords ? (
    <>
      <StyledStartButton onClick={() => startTheGame(true)}>
        Neues Spiel starten
      </StyledStartButton>
      <StyledInfoText>
        <p>Du hast das Spiel beendet und alle</p>
        <StyledScore>{score}</StyledScore>
        <p>Wörter erraten!</p>
      </StyledInfoText>

      <Image
        src={fireworksPicture}
        alt="a picture of fireworksPicture at the sea"
        width={fireworksWidth}
        height={calculateHeight(fireworksWidth, 0.6648)}
      />
    </>
  ) : wonGame ? (
    <>
      <StyledInfoText>
        <p>Du hast das Wort erraten!!!</p>
        <p>Hier sind ein paar Gummibärchen als Belohnung...</p>
      </StyledInfoText>
      <Image
        src={gummiBearPicture}
        alt="a picture of gummi bears"
        width={gummiBearWidth}
        height={calculateHeight(gummiBearWidth, 0.461)}
      />
      <StyledStartButton onClick={() => startTheGame(false)}>
        Nächstes Spiel
      </StyledStartButton>
    </>
  ) : (
    <>
      <StyledInfoText>
        <p>Mal sehen wie dein Wissen über</p>
        <p>
          <StyledWord>deutsche Großstädte</StyledWord> ist...
        </p>
      </StyledInfoText>

      <StyledStartButton onClick={() => startTheGame(true)}>
        Spiel starten
      </StyledStartButton>
    </>
  );
}

const StyledStartButton = styled.button`
  @media (min-width: 600px) {
    width: 300px;
    height: 60px;
    border-radius: 12px;
    margin: 1.5rem;
    font-size: 1.5rem;
  }
  @media (max-width: 600px) {
    width: 200px;
    height: 40px;
    border-radius: 8px;
    margin: 1rem;
    font-size: 1rem;
  }
  margin: 2rem;
  padding: 0.3rem;
  height: fit-content;
  background-color: var(--fontColor);
`;
const StyledInfoText = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 600px) {
    margin: 2rem;
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    margin: 1rem;
    font-size: 1rem;
    max-width: 300px;
  }
  border-radius: 10px;
  color: var(--fontColor);
  text-shadow: -1px 0 black;
  > p {
    margin: 0.3rem;
  }
`;

const StyledWord = styled.span`
  text-decoration: underline;
  color: lightgrey;
`;

const StyledScore = styled.span`
  color: hotpink;
  font-size: 3rem;
  text-shadow: -2px 2px black;
`;