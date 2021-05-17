import React from "react";
import styled, {keyframes} from "styled-components";
import {colors} from "../../theme";
import {LinkedInRounded as LinkedInRoundedSVG} from "../../assets/icons/LinkedInRounded";


export const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
`;

export const Box = styled.div`
  flex: 1;

  :first-child a {
    margin-right: auto;
  }

  :last-child ul {
    margin-right: auto;
  }
`;

export const HomeLogo = styled.a`
  //font-family: Roboto Condensed;
  background-color: black;
  border-radius: 4px;
  max-width: 100px;
  width: 100px;
  height: 29px;
  padding: 7px 17px 9px 17px;
  border-radius: 4px;
  color: black !important;
  :visited {
    color: black;
  }
  font-style: normal;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 21px;
  letter-spacing: 0.02em;
  text-decoration: none;
  color: ${colors.icon};

  :visited {
    color: ${colors.icon};
  }

  :hover {
    opacity: 0.7;
  }
`;

export const LinkedInRounded = styled(LinkedInRoundedSVG)`
  margin: 0 14px;
`;

export const Socials = styled.div`
  text-align: center;

  > svg {
    width: 24px;
    height: 24px;
    color: ${colors.icon};

    :hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
`;

export const Nav = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style-type: none;
`;

export const NavItem = styled.a`
  font-style: normal;
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 16px;
  color: ${colors.iconHover};
  margin-right: 24px;
  text-decoration: none;

  :last-child {
    margin-right: 0;
  }
  
  :hover{
    opacity: 0.7;
  }
  
  :visited{
    
  }
`;

export const NavCTA = styled.a`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  text-decoration: none;
  //height: 29px;

  line-height: 14px;
  border: none;
  color: #ffffff;
  padding: 7px 17px 9px 17px;
  background: ${colors.typography};
  border-radius: 4px;

  :hover {
    opacity: 0.7;
  }
`;