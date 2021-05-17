import React from 'react';
import styled from "styled-components";
import {ReactIcon} from "../../assets/icons/technologies/React";
import {Typescript} from "../../assets/icons/technologies/Typescript";
import {CSS3} from "../../assets/icons/technologies/CSS3";
import {HTML5} from "../../assets/icons/technologies/HTML5";
import {Python} from "../../assets/icons/technologies/Python";

interface CardProps {
    id: string;
    title: string;
    description: string;
    imageURI: string;
    technologies: ["react" | "html" | "css" | "javascript" | "typescript" | "python"];
    linkTo: string;
}

export function Card(props: CardProps) {
    const Container = styled.article`
      width: calc(100% - 64px);
      height: calc(100% - 64px);
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.12);
      border-radius: 4px;
      padding: 32px;
      background: url(${props.imageURI}) no-repeat;
      background-position: center;
      background-size: cover;
      -webkit-transition: .2s all;
      -moz-transition: .2s all;
      -ms-transition: .2s all;
      -o-transition: .2s all;
      transition: .2s all;: brightness(50 %);

      //:hover {
      -webkit-filter: brightness(50%);
      filter: brightness(50%);
      cursor: pointer;

      //p {
      //  transition: visibility 3s;
      //  visibility: visible;
      //  z-index: 1;
      //}
      //}

    `;

    const Hover = styled.div`
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: center;
    `;

    const Header = styled.h4`
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;
      color: #FFFFFF;
    `;

    const Description = styled.p`
      //visibility: hidden;
      width: 70%;
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;
      color: #FFFFFF;
      text-align: center;
      margin: auto;
    `;

    const Cover = styled.img`
      height: 100%;
      width: 100%;
      background: no-repeat center center fixed;
      object-fit: contain;
    `;
    const Icons = styled.div``;
    const Icon = styled.svg``;

    return <Container>
        <Header>{props.title}</Header>
        <Hover>
            <Description>{props.description}</Description>
        </Hover>
        {/*<Cover src={props.imageURI}/>*/}
        {/*<Icons>*/}
        {/*    {props.technologies.includes("react") && <ReactIcon/>}*/}
        {/*    {props.technologies.includes("typescript") && <Typescript/>}*/}
        {/*    {props.technologies.includes("html") && <HTML5/>}*/}
        {/*    {props.technologies.includes("css") && <CSS3/>}*/}
        {/*    {props.technologies.includes("python") && <Python/>}*/}
        {/*</Icons>*/}
    </Container>;
}