import styled from "styled-components";

//  Colors
export const lightTheme = {
    primary: "#264653",
    secondary: "#E9C46A",
    tertiary: "#2A9D8F",
    fresh: "#149911",
    warm: "#E76F51",
    bg: "#FFFCF9",
    font: "#050609",
    grey: "#ebecf0",
    footer: "#264653",
};
export const darkTheme = {
    primary: "#E9C46A",
    secondary: "#264653",
    tertiary: "#2A9D8F",
    fresh: "#149911",
    warm: "#E76F51",
    bg: "#050609",
    font: "#FFFCF9",
    grey: "#ebecf0",
    footer: "#050609",
};

//  Fonts

export const fonts = {
    cormorant: " 'Cormorant Garamond', serif; ",
    rajdhani: " 'Rajdhani', sans-serif; ",
    baumans: " 'Baumans', cursive; ",
};

//  Responsive

export const respond = (type, content) => {
    if (type === "s") {
        return `@media only screen and (min-width: 576px){
    ${content}
  }`;
    } else if (type === "m") {
        return `@media only screen and (min-width: 780px){
    ${content}
  }`;
    } else if (type === "l") {
        return `@media only screen and (min-width: 1050px){
    ${content}
  }`;
    } else if (type === "xxl") {
        return `@media only screen and (min-width: 1662px){
    ${content}
  }`;
    }
};

export const Button = styled.button`
    margin: 2rem auto;
    padding: 1rem 3rem;
    border: 1px solid ${(props) => props.color};
    background-color: ${(props) => props.theme.bg};
    color: ${(props) => props.color};
    font-size: 2.2rem;
    font-family: ${fonts.rajdhani};
    cursor: pointer;

    &:focus,
    :active {
        outline: none;
    }
`;

export const Header = styled.h1`
    font-family: ${fonts.baumans};
    font-size: 3rem;
    color: ${(props) => props.theme.primary};
    text-transform: uppercase;
    text-align: center;
`;
