import React from "react";
import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-left: 20%;
  padding-right: 20%;
  padding-bottom: 50px;
  padding-top: 60px;

  @media (max-width: 700px) {
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 10px;
    padding-top: 10px;
  }

  @media (max-width: 400px) {
    padding-left: 2%;
    padding-right: 2%;
  }
`;

export const Column = styled.div`
  flex: 10%;
  max-width: 100%;
  padding: 0 4px;
`;

export const DivText = styled.div`
  height: auto;
  width: 100%;
`;

export const Title = styled.p`
  text-align: center;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #a9a9a9;
`;

const Head = () => {
  return (
    <Row>
      <Column>
        <DivText>
          <Title> Lorraine @ DevChallenges.io </Title>
        </DivText>
      </Column>
    </Row>
  );
};

export default Head;
