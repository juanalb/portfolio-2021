import React from "react";
import styled from "styled-components";
import {Card} from "../card/Card";
import piekscraperCover from "../../assets/images/pieksscraper-cover.jpg";
import tgfCover from "../../assets/images/tgf-cover.jpg";
import jogoCover from "../../assets/images/jogo-cover.jpg";
import {css} from "styled-components/macro";

export function MyWork() {
    const Container = styled.section`
      display: flex;
      flex-direction: column;
      height: 130vh;
    `;

    const Header = styled.h3`
      font-weight: 300;
      font-size: 48px;
      line-height: 56px;
      color: #000000;

      width: 100%;
      margin-top: 160px;
      margin-bottom: 8px;
    `;

    const Subtitle = styled.p`
      font-weight: 300;
      font-size: 1.5rem;
      line-height: 28px;
      color: #454545;
      margin-bottom: 80px;
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

    const NewCardsContainer = styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-row: 1;
      //grid-row-gap: 8px;
      //grid-column-gap: 8px;
      //margin: 20px auto;
      //width: 100%;
      //height: 64%;
      grid-column-gap: 15%;
      height: 150vh;
    `;

    const data: CardiProps[] = [{
        title: "Creating a responsive web application with React.js, Headless CMS and Express.",
        company: "The Global Fund",
        image: "json",
        categorie: "Web Development"
    }, {
        title: "Building an dashboard and data explorer to promote transparency of Finlands' aid stream.",
        company: "Ministry of Finland",
        image: "json",
        categorie: "Web Development"
    }, {
        title: "Building a query builder web application to explore the IATI datastore.",
        company: "Zimmerman | IATI ",
        image: "json",
        categorie: "Web Development"
    }, {
        title: "Creating a responsive web application with React.js, Headless CMS and Express.",
        company: "JOGO",
        image: "json",
        categorie: "Data Analysis"
    }, {
        title: "Generating a data set from scraping different auction websites for their information.",
        company: "Victor Pieksma",
        image: "json",
        categorie: "Web scraping"
    }]

    const cards = data.map((item) =>
        <Cardi {...item}/>
    );

    return (
        <Container id={"my-work"}>
            <Header>My work</Header>
            <Subtitle>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into
                electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of.
            </Subtitle>
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
    image: string;
}

export function Cardi(props: CardiProps) {
    const styles = css`
      border: 1px solid red;
      border-radius: 4px;
      height: 90vh;
      margin-bottom: 10vh;
    `;

    const Card = styled.div`
      display: flex;
      flex-direction: column;
      background-color: #f7f7f7;
      padding: 32px;
      margin-bottom:  72px;
    `;

    const Logo = styled.svg`
      //display: flex;
      //flex-direction: column;
      //height: 130vh;
    `;

    const Categorie = styled.div`
      height: 69px;
      padding: 13px;

      font-size: 21px;
      line-height: 25px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #000000;
    `;

    const Image = styled.svg`
            //height: ;
      //display: flex;
      //flex-direction: column;
      //height: 130vh;
    `;

    const Overline = styled.h3`
      font-weight: 300;
      font-size: 48px;
      line-height: 56px;
      color: #000000;
    `;

    const Title = styled.p`
      font-weight: 300;
      font-size: 1.5rem;
      line-height: 28px;
      color: #454545;
    `;

    return <div css={styles}>
        <Card>
            <Logo/>
            <Image/>
            <Categorie>{props.categorie}</Categorie>
        </Card>
        <Overline>{props.company}</Overline>
        <Title>{props.title}</Title>
    </div>
}