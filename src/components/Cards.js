import React from "react";
import styled from "styled-components";
import Image1 from "../images/photo1.png";
import Image2 from "../images/photo2.png";
import Image3 from "../images/photo3.png";
import Image4 from "../images/photo4.png";
import Image5 from "../images/photo5.png";
import Image6 from "../images/photo6.png";

export const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-left: 15%;
  padding-right: 15%;
  @media (max-width: 700px) {
    padding-left: 5%;
    padding-right: 5%;
  }

  @media (max-width: 400px) {
    padding-left: 2%;
    padding-right: 2%;
  }
`;

export const Column = styled.div`
  flex: 30%;
  max-width: 100%;
  @media (max-width: 700px) {
    max-width: 50%;
  }
`;

export const One = styled.div`
  height: 300px;
`;

export const Two = styled.div`
  height: 300px;
  @media (max-width: 700px) {
    margin-top: 120px;
  }
`;

export const Three = styled.div`
  height: 300px;
  margin-top: 90px;
  text-align: center;
  @media (max-width: 700px) {
    margin-top: 120px;
  }
`;

export const Four = styled.div`
  height: 300px;
  margin-top: 150px;
  text-align: center;
  @media (max-width: 700px) {
    margin-top: 0px;
  }
`;

export const Five = styled.div`
  height: 300px;
  text-align: right;
`;

export const Six = styled.div`
  height: 300px;
  text-align: right;
  @media (max-width: 700px) {
    margin-top: 120px;
  }
`;

export const Image = styled.img`
  margin-right: 10px;
  width: 200px;

  @media (max-width: 700px) {
    width: 150px;
  }
`;

export const DivImage = styled.div`
  float: left;
`;

export const TextVertical = styled.div`
  writing-mode: vertical-lr;
  font-family: PT Serif;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: #000000;
`;
export const Name = styled.p`
  text-align: initial;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #000000;
`;

const Cards = () => {
  return (
    <Row>
      <Column>
        <One>
          <DivImage>
            <Image src={Image1} />
            <Name>
              <strong>Bill Mahoney</strong>
            </Name>
          </DivImage>
          <TextVertical>Product owner</TextVertical>
        </One>
      </Column>

      <Column>
        <Three>
          <DivImage>
            <Image src={Image2} />
            <Name>
              <strong>Saba Cabrera</strong>
            </Name>
          </DivImage>
          <TextVertical>Art director</TextVertical>
        </Three>
      </Column>

      <Column>
        <Five>
          <DivImage>
            <Image src={Image3} />
            <Name>
              <strong>Shae Le</strong>
            </Name>
          </DivImage>
          <TextVertical>Tech Lead</TextVertical>
        </Five>
      </Column>

      <Column>
        <Two>
          <DivImage>
            <Image src={Image4} />
            <Name>
              <strong>Skylah Lu</strong>
            </Name>
          </DivImage>

          <TextVertical>UX Designer</TextVertical>
        </Two>
      </Column>

      <Column>
        <Four>
          <DivImage>
            <Image src={Image5} />
            <Name>
              <strong>Griff Richards</strong>
            </Name>
          </DivImage>
          <TextVertical>Developer</TextVertical>
        </Four>
      </Column>

      <Column>
        <Six>
          <DivImage>
            <Image src={Image6} />
            <Name>
              <strong>Stan John</strong>
            </Name>
          </DivImage>
          <TextVertical>Deverloper</TextVertical>
        </Six>
      </Column>
    </Row>
  );
};

export default Cards;
