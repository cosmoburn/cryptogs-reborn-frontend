import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Main>
      <div>
        <TitleImage>
          <StaticImage
            src="../images/cryptogs-title.png"
            alt="Cryptogs Reborn"
            placeholder="transparent"
          />
        </TitleImage>
        <TitleText>
          COMING SOON TO ETHDENVER <br /> 02.16.22
        </TitleText>
      </div>
      <SubText>
        Learn more at{" "}
        <a href="https://www.poapathon.com/cryptogs" target="_blank">
          POAPathon
        </a>
      </SubText>
    </Main>
  );
};

const Main = styled.main`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

const TitleImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleText = styled.div`
  font-size: 3.2em;
  display: flex;
  justify-content: center;
  text-align: center;

  @media only screen and (max-width: 600px) {
    font-size: 2.4em;
    padding: 2em;
  }
`;

const SubText = styled.div`
  font-size: 1.6em;
`;

export default IndexPage;
