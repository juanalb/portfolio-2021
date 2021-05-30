import React from "react";
import styled from "styled-components";
import {Card} from "../card/Card";
import piekscraperCover from "../../assets/images/pieksscraper-cover.jpg";
import tgfCover from "../../assets/images/tgf-cover.jpg";
import jogoCover from "../../assets/images/jogo-cover.jpg";
import {css} from "styled-components/macro";
import TgfLogo from "../../assets/companies/Tgf";
import JogoLogo from "../../assets/companies/Jogo";
import MfaLogo from "../../assets/companies/Mfa";
import IatiLogo from "../../assets/companies/Iati";
// import TgfPreview from "../../assets/project-previews/tgf";
// import TgfPreview from "../../assets/project-previews/tgf2.png";
import TgfPreview from "../../assets/project-previews/tgf3.png";
import PieksscraperLogo from "../../assets/companies/Pieksscraper";

export function MyWork() {
    const Container = styled.section`
      display: flex;
      flex-direction: column;
      //height: 130vh;
    `;

    const Header = styled.h3`
      font-weight: 300;
      font-size: 48px;
      line-height: 56px;
      color: #000000;

      width: 100%;
      //margin-top: 160px;
      margin-bottom: 8px;
    `;

    const Subtitle = styled.p`
      font-weight: 300;
      font-size: 1.5rem;
      line-height: 28px;
      color: #454545;
      //margin-bottom: 80px;
      width: 65%;
    `;

    const CardsContainer = styled.div`
      margin: 20px auto;
      width: 100%;
      height: 64%;
      background-color: #fff;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-row: auto auto;
      grid-column-gap: 8px;
      grid-row-gap: 8px;
    `;

    const NewCardsContainer = styled.ul`
      -webkit-column-count: 2; /* Chrome/Opera, Safari */
      -moz-column-count: 2; /* Mozilla Firefox */
      column-count: 2;

      /* Properties below are optional: */
      -webkit-column-gap: 18%; /* Chrome/Opera, Safari */
      -moz-column-gap: 18%; /* Mozilla Firefox */
      column-gap: 18%;

      -webkit-column-rule: 1px single grey; /* Chrome/Opera, Safari */
      -moz-column-rule: 1px single grey; /* Mozilla Firefox */
      column-rule: 1px single grey;
      list-style-type: none;
    `;

    const Copy = styled.div`
      display: flex;
      flex-direction: column;
      height: 65vh;
      justify-content: center;
    `;

    const Image = styled.img`
      width: 100%;
      object-fit: cover;
      position: absolute;
      top: 100px;
      left: -100px;
      
    `;

    const data: CardiProps[] = [{
        title: "Creating a responsive web application with React.js, Headless CMS and Express.",
        company: "The Global Fund",
        image: <Image src={TgfPreview} />,
        categorie: "Web Development",
        logo: <TgfLogo/>,
    }, {
        title: "Creating a responsive web application with React.js, Headless CMS and Express.",
        company: "JOGO",
        image: <img src={"../../assets/project-previews/tgf2.png"} />,
        categorie: "Data Analysis",
        logo: <JogoLogo/>,
    }, {
        title: "Building a query builder web application to explore the IATI datastore.",
        company: "Zimmerman | IATI ",
        image: <img src={"../../assets/project-previews/tgf2.png"} />,
        categorie: "Web Development",
        logo: <IatiLogo/>,
    }, {
        title: "Building a dashboard and data explorer to promote transparency of Finlands' aid stream.",
        company: "Ministry of Finland",
        image: <img src={"../../assets/project-previews/tgf2.png"} />,
        categorie: "Web Development",
        logo: <MfaLogo/>,
    }, {
        title: "Generating a data set from scraping different auction websites for their information.",
        company: "Victor Pieksma",
        image: <img src={"../../assets/project-previews/tgf2"} />,
        categorie: "Web Scraping",
        logo: <PieksscraperLogo/>,
    }]

    const cards = data.map((item) =>
        <Cardi {...item}/>
    );

    return (
        <Container id={"my-work"}>
            <Copy>
                <Header>My work</Header>
                <Subtitle>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap
                    into
                    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                    release of.
                </Subtitle>
            </Copy>
            <NewCardsContainer>
                {cards}
            </NewCardsContainer>
        </Container>
    );
};

interface CardiProps {
    title: string;
    company: string;
    categorie: string;
    image: JSX.Element;
    logo: JSX.Element;
}

export function Cardi(props: CardiProps) {
    const styles = css`
      margin-bottom: 30vh;

      -webkit-column-break-inside: avoid;
      page-break-inside: avoid;
      break-inside: avoid;
      overflow: hidden;
      :nth-child(4) {
        padding-top: 15rem;
      }
    `;

    const Card = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      background-color: #f7f7f7;
      padding: 32px;
      margin-bottom: 72px;
      height: 70vh;
    `;

    const Logo = styled.svg`
      //display: flex;
      //flex-direction: column;
      //height: 130vh;
    `;

    const Categorie = styled.div`
      //height: 69px;
      padding: 22px 13px;
      background-color: white;
      font-size: 21px;
      line-height: 25px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #000000;

      width: fit-content;
    `;

    const Image = styled.svg`
      //height: ;
      //display: flex;
      //flex-direction: column;
      //height: 130vh;
    `;

    const Overline = styled.h6`
      font-weight: 300;
      font-size: 25px;
      line-height: 29px;
      color: #BABABA;
    `;

    const Title = styled.p`
      font-weight: 300;
      font-size: 48px;
      line-height: 57px;

      color: #000000;
    `;

    return <li css={styles}>
        <Card>
            {/*<TgfLogo/>*/}
            {/*<Logo/>*/}
            {props.logo}
            {props.image}
            <Image/>
            <Categorie>{props.categorie}</Categorie>
        </Card>
        <Overline>{props.company}</Overline>
        <Title>{props.title}</Title>
    </li>
}