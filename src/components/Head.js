import React from "react";
import styled from "styled-components";

export const RowHead = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-left: 15%;
  padding-right: 15%;
  padding-bottom: 90px;
  padding-top: 60px;

  @media (max-width: 700px) {
    padding-left: 5%;
    padding-right: 5%;
  }

  @media (max-width: 400px) {
    padding-left: 2%;
    padding-right: 2%;
  }
`;

export const ColumnHeadLeft = styled.div`
  flex: 10%;
  max-width: 100%;
  padding: 0 4px;

  @media (max-width: 700px) {
    flex: 100%;
  }
`;

export const ColumnHeadRight = styled.div`
  flex: 25%;
  max-width: 100%;
  padding: 0 4px;
  @media (max-width: 700px) {
    flex: 100%;
    margin-top: 50px;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-left: 15%;
  padding-right: 15%;
`;

export const Column = styled.div`
  flex: 25%;
  max-width: 100%;
  padding: 0 4px;
`;

export const DivText = styled.div`
  height: auto;
  width: 100%;
`;

export const Title = styled.div`
  font-family: PT Serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 48px;
  letter-spacing: -0.045em;
  color: #000000;
`;

export const TextWho = styled.div`
  height: auto;
  width: 100%;
`;

export const WhoTitle = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  text-transform: uppercase;
  color: #000000;
`;

export const WhoDescription = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: #000000;
  margin-top: 10px;
`;

const Head = () => {
  return (
    <RowHead>
      <ColumnHeadLeft>
        <DivText>
          <Title> The creative crew </Title>
        </DivText>
      </ColumnHeadLeft>

      <ColumnHeadRight>
        <TextWho>
          <WhoTitle>Who we are</WhoTitle>
          <WhoDescription>
            We are team of creatively diverse. driven. innovative individuals
            working in various locations from the world.
          </WhoDescription>
        </TextWho>
      </ColumnHeadRight>
    </RowHead>
  );
};

export default Head;
