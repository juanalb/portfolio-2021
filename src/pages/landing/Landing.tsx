import React from "react";
import {css} from "styled-components/macro";
import {Navigation} from "../../components/navigation/Navigation";
import {Hero} from "../../components/hero/Hero";
import {MyWork} from "../../components/work/MyWork";
import styled from "styled-components";

export interface LandingProps {
}

//TODO: MOVE TO STYLES.tsx FILE
export const landingStyle = css`
  border: 1px red solid;
`;

export const styles = {
    container: css`
      max-width: 1240px;
      padding: 0 20px;
      margin: 0 auto;
    `,
    nav: css`
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 82px;
      margin-bottom: 92px;

      ul {
        list-style-type: none;
        display: flex;
      }

      li {
        margin-left: 16px;
      }
    `,
    h1: css`
      font-size: 4rem;
      font-weight: bold;
      margin-bottom: 8px;
    `,
    h2: css`
      font-size: 4rem;
      line-height: 0.9;
      margin-bottom: 40px;
    `,
    a: css,
    h3: css`
      font-size: 1.125rem;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;
      letter-spacing: 0.02em;
      color: #454545;
    `,
    p: css`
      font-size: 1.75rem;
      margin-bottom: 28px;
      //width: 60%;
    `,
    about: css`
      display: flex;
      justify-content: space-between;
    `,
    icon: css`
      border-radius: 50%;
      width: 24px;
      height: 24px;
      background-color: gainsboro;
    `,
    iconList: css`
      margin-left: 24px;
    `,
    headerImagePlaceholder: css`
      width: 48%;
      //height: 100px;
      background-color: gainsboro;
    `,
    typeContainer: css`
      width: 48%;
    `,
};

const Container = styled.main`
  max-width: 1440px;
  margin: 0 auto;
`;


export const AboutMe = () => {
    return <></>;
};

export const Landing = (props: LandingProps) => {
    const {
        container,
        nav,
        icon,
        iconList,
        h1,
        h2,
        h3,
        about,
        headerImagePlaceholder,
        typeContainer,
    } = styles;
    return (
        <>
            <Navigation/>
            <Container>
                <Hero/>
                <MyWork/>
            </Container>
            {/*<section id="about" css={about}>*/}
            {/*    <article css={typeContainer}>*/}
            {/*        <h1 css={h1}>Hi, I am Juan. <br css={css`margin-bottom: 2px;`}/></h1>*/}
            {/*        <h2 css={h2}>A web developer <br/> based in Amsterdam.</h2>*/}
            {/*        <p css={p}>As a 24-year-old computer science student I've always been interested in creating and*/}
            {/*            developing*/}
            {/*            products with great user experience that just look good and work well. </p>*/}
            {/*        <p css={p}>My journey as a web developer started at Zimmerman, where I had the opportunity to join*/}
            {/*            the*/}
            {/*            development team. During my internship I helped develop online platforms with a strong focus on*/}
            {/*            data visualization for humanitarian organisations and NGO’s, helping them get more insights into*/}
            {/*            their own data. </p>*/}
            {/*        <p css={p}>I am currently available and looking for an internship starting May 2021 - <a href={"/"} >Let's get in touch</a></p>*/}
            {/*    </article>*/}
            {/*    <div css={headerImagePlaceholder}></div>*/}
            {/*</section>*/}

            {/*<section id="projects">*/}
            {/*    <h2>Projects I've worked on</h2>*/}

            {/*    <article>*/}
            {/*        <h3>The Global Fund: Data Explorer</h3>*/}
            {/*        <p>The Global Fund Data Explorer is one of the key transparency tools of the organisation. It covers*/}
            {/*            almost the entire grant lifecycle from replenishment by contributing donors every three years,*/}
            {/*            to allocation to eligible countries, and down to implementation of specific projects by*/}
            {/*            principal recipients.</p>*/}
            {/*        <img/>*/}
            {/*    </article>*/}

            {/*    <article>*/}
            {/*        <h3>Development initiatives: Humanitarian Portal</h3>*/}
            {/*        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim quam, congue sed neque sed,*/}
            {/*            viverra gravida leo. Nam dignissim a purus at venenatis. Sed imperdiet tortor sit amet risus*/}
            {/*            sagittis mollis. Maecenas porttitor aliquet massa, at fermentum tellus accumsan vel. Aliquam*/}
            {/*            feugiat consectetur diam, eu pellentesque justo fermentum blandit. Nullam non nunc ut arcu*/}
            {/*            maximus dictum at quis mi. Phasellus commodo pretium mi, dapibus rutrum orci aliquet eu. Duis*/}
            {/*            vel risus hendrerit, auctor libero a, pretium elit. Nulla id urna lectus.</p>*/}
            {/*        <img/>*/}
            {/*    </article>*/}

            {/*    <article>*/}
            {/*        <h3>Aidsfonds: Zoom </h3>*/}
            {/*        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim quam, congue sed neque sed,*/}
            {/*            viverra gravida leo. Nam dignissim a purus at venenatis. Sed imperdiet tortor sit amet risus*/}
            {/*            sagittis mollis. Maecenas porttitor aliquet massa, at fermentum tellus accumsan vel. Aliquam*/}
            {/*            feugiat consectetur diam, eu pellentesque justo fermentum blandit. Nullam non nunc ut arcu*/}
            {/*            maximus dictum at quis mi. Phasellus commodo pretium mi, dapibus rutrum orci aliquet eu. Duis*/}
            {/*            vel risus hendrerit, auctor libero a, pretium elit. Nulla id urna lectus.</p>*/}
            {/*        <img/>*/}
            {/*    </article>*/}

            {/*    <article>*/}
            {/*        <h3>Piekscraper</h3>*/}
            {/*        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim quam, congue sed neque sed,*/}
            {/*            viverra gravida leo. Nam dignissim a purus at venenatis. Sed imperdiet tortor sit amet risus*/}
            {/*            sagittis mollis. Maecenas porttitor aliquet massa, at fermentum tellus accumsan vel. Aliquam*/}
            {/*            feugiat consectetur diam, eu pellentesque justo fermentum blandit. Nullam non nunc ut arcu*/}
            {/*            maximus dictum at quis mi. Phasellus commodo pretium mi, dapibus rutrum orci aliquet eu. Duis*/}
            {/*            vel risus hendrerit, auctor libero a, pretium elit. Nulla id urna lectus.</p>*/}
            {/*        <img/>*/}
            {/*    </article>*/}

            {/*    <article>*/}
            {/*        <h3>Stichting ELBHO: Erkenningsadviseurs app</h3>*/}
            {/*        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim quam, congue sed neque sed,*/}
            {/*            viverra gravida leo. Nam dignissim a purus at venenatis. Sed imperdiet tortor sit amet risus*/}
            {/*            sagittis mollis. Maecenas porttitor aliquet massa, at fermentum tellus accumsan vel. Aliquam*/}
            {/*            feugiat consectetur diam, eu pellentesque justo fermentum blandit. Nullam non nunc ut arcu*/}
            {/*            maximus dictum at quis mi. Phasellus commodo pretium mi, dapibus rutrum orci aliquet eu. Duis*/}
            {/*            vel risus hendrerit, auctor libero a, pretium elit. Nulla id urna lectus.</p>*/}
            {/*        <img/>*/}
            {/*    </article>*/}

            {/*    <article>*/}
            {/*        <h3>Child Surgery Vietnam: Jo's adventures</h3>*/}
            {/*        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim quam, congue sed neque sed,*/}
            {/*            viverra gravida leo. Nam dignissim a purus at venenatis. Sed imperdiet tortor sit amet risus*/}
            {/*            sagittis mollis. Maecenas porttitor aliquet massa, at fermentum tellus accumsan vel. Aliquam*/}
            {/*            feugiat consectetur diam, eu pellentesque justo fermentum blandit. Nullam non nunc ut arcu*/}
            {/*            maximus dictum at quis mi. Phasellus commodo pretium mi, dapibus rutrum orci aliquet eu. Duis*/}
            {/*            vel risus hendrerit, auctor libero a, pretium elit. Nulla id urna lectus.</p>*/}
            {/*        <img/>*/}
            {/*    </article>*/}

            {/*    <article>*/}
            {/*        <h3>Jogo: Data analysis</h3>*/}
            {/*        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim quam, congue sed neque sed,*/}
            {/*            viverra gravida leo. Nam dignissim a purus at venenatis. Sed imperdiet tortor sit amet risus*/}
            {/*            sagittis mollis. Maecenas porttitor aliquet massa, at fermentum tellus accumsan vel. Aliquam*/}
            {/*            feugiat consectetur diam, eu pellentesque justo fermentum blandit. Nullam non nunc ut arcu*/}
            {/*            maximus dictum at quis mi. Phasellus commodo pretium mi, dapibus rutrum orci aliquet eu. Duis*/}
            {/*            vel risus hendrerit, auctor libero a, pretium elit. Nulla id urna lectus.</p>*/}
            {/*        <img/>*/}
            {/*    </article>*/}
            {/*</section>*/}

            {/*<section id="techstack">*/}

            {/*</section>*/}
            {/*</div>*/}
        </>
    );
};
