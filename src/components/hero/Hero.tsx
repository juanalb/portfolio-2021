import React from "react";
import styled from "styled-components";
import portait from "../../assets/images/portait.png";
import {colors} from "../../theme";

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc(100vh - 56px);
  //gap: 8rem;
`;

const Title = styled.h1`
  //font-family: Roboto Condensed;
  font-style: normal;
  font-weight: 300;
  font-size: 64px;
  line-height: 75px;
  //text-align: center;

  margin-bottom: 0.5rem;
  transform: translateX(-2px);
  color: #000000;
`;

const Subtitle = styled.h2`
  //display: flex;
  //align-self: center;
  //font-family: Roboto Condensed;
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 28px;
  //text-align: center;
  max-width: 604px;

  margin-bottom: 2rem;
  color: #454545;
`;

const Available = styled.h2`
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 28px;
  //text-align: center;
  max-width: 604px;
  margin-bottom: 12px;

  color: #454545;

  :after {
    display: inline-block;
    content: " \\25CF";
    transform: translateY(-12px);
    font-size: 14px;
    color: #34c300;
  }
`;

const CTAButton = styled.button`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  width: 131px;
  height: 39px;
  border: 1px solid #080808;
  background-color: transparent;
  padding: 9px 36px;
  
  :hover{
    opacity: 0.7;
    cursor: pointer;
  }
`;

const Portrait = styled.img`

`;

const TextWrapper = styled.article`
  height: calc(100vh - 56px);
  display: flex;
  flex-direction: column;
  place-content: center;
  position: relative;
`;

const Scroll = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100px;
  border-left: 1px solid ${colors.iconHover};
  
  ::after{
    display: inline-block;
    content: 'Explore my work';
    margin-left: 4px;
  }
`;

export const Hero = () => {
    return (
        <Container id="hero">
            <TextWrapper>
                <Title>Hi, I am Juan.</Title>
                <Subtitle>
                    As a front-end developer I help businesses achieve their goals by realising their digital products.
                    Based in the Netherlands, Amsterdam.
                </Subtitle>
                <Available>Currently looking for a graduation internship.</Available>
                <CTAButton>Hire me</CTAButton>

                <Scroll />
            </TextWrapper>
            <Portrait src={portait} alt="Portrait photo of myself - Juan Albergen"/>
        </Container>
    );
};
