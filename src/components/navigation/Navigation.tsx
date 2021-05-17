import React from "react";
import {SpotifyRounded} from "../../assets/icons/SpotifyRounded";
import {GithubRounded} from "../../assets/icons/GithubRounded";
import {
    Box,
    Container,
    NavCTA,
    HomeLogo,
    LinkedInRounded,
    Nav,
    NavList,
    NavItem,
    Socials
} from "../../pages/landing/style";

export const Navigation = () => {

    React.useEffect(() => {
        const el = document.getElementById("nav-socials");

        const scroll = function () {
            const y = window.scrollY;

            if (y >= 700 && el) {
                el.style.display = "none";
                window.removeEventListener("scroll", scroll)
            } else {
                console.log("nope", el)
            }
        };

        window.addEventListener("scroll", scroll);
    }, [])

    function handleMouseOverSocials() {
        console.log("mouseover")
        const el = document.getElementById("nav-socials");
        if (el) el.style.display = "block";
    }

    return (
        <Container onMouseOver={() => handleMouseOverSocials()}>
            <Box>
                <HomeLogo href={"/"}>Juan Albergen Portfolio</HomeLogo>
            </Box>
            <Box>
                <Socials id={"nav-socials"}>
                    <GithubRounded/>
                    <LinkedInRounded/>
                    <SpotifyRounded/>
                </Socials>
            </Box>
            <Box>
                <NavList>
                    <NavItem href={"#my-work"}>my work</NavItem>
                    <NavItem href={"#about-me"}>about me</NavItem>
                    <NavCTA href={"#contact"}>hire me</NavCTA>
                </NavList>
            </Box>
        </Container>
    );
};
