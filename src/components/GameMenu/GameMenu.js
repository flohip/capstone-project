import Image from "next/image";
import calculateHeight from "../../utils/calculateHeight";
import gummiBearPicture from "../../images/altair-valasek-6uHnajYSsW0-unsplash.jpg"; // 4000 x 1844 px
import fireworksPicture from "../../images/ray-hennessy-gdTxVSAE5sk-unsplash.jpg"; // 4091 x 2720 px
import sandglassPicture from "../../images/aron-visuals-BXOXnQ26B7o-unsplash.jpg"; // 6000 x 4000 px
import styled from "styled-components";
import Button from "../Button/Button";
export default function GameMenu({
  startTheGame,
  wonGame,
  guessedAllWords,
  score,
  timeOver,
  category,
  currentWord,
}) {
  const gummiBearWidth = 300;
  const fireworksWidth = 300;
  const sandglassWidth = 300;

  if (guessedAllWords) {
    return (
      <>
        <Button
          onClick={() => startTheGame(true)}
          content={"Neues Spiel starten"}
        />
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
    );
  } else if (timeOver) {
    return (
      <>
        <Button
          onClick={() => startTheGame(true)}
          content={"Neues Spiel starten"}
        />
        <StyledInfoText>
          <p>Dir ist leider die Zeit ausgegangen!!!</p>
          <Image
            src={sandglassPicture}
            alt="a picture of gummi bears"
            width={sandglassWidth}
            height={calculateHeight(sandglassWidth, 0.6666)}
          />
          <p>Aber nicht verzagen und einfach eine neue Runde wagen!</p>
        </StyledInfoText>
      </>
    );
  } else if (wonGame && !timeOver) {
    return (
      <>
        <StyledInfoText>
          <p>Du hast das Wort erraten!!!</p>
          <StyledCurrentWord>{currentWord}</StyledCurrentWord>
          <Image
            src={gummiBearPicture}
            alt="a picture of gummi bears"
            width={gummiBearWidth}
            height={calculateHeight(gummiBearWidth, 0.461)}
          />
          <p>Hier sind ein paar Gummibärchen als Belohnung...</p>
        </StyledInfoText>
        <Button
          onClick={() => startTheGame(false)}
          content={"Nächstes Spiel"}
        />
      </>
    );
  } else {
    return (
      <>
        <StyledInfoText>
          <p>Mal sehen wie dein Wissen über</p>
          <p>
            <StyledWord>{category}</StyledWord> ist...
          </p>
        </StyledInfoText>
        <Button onClick={() => startTheGame(true)} content={"Spiel starten"} />
      </>
    );
  }
}

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

const StyledCurrentWord = styled.p`
  padding: 0.3rem;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
