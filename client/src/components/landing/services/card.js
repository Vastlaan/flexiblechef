import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsCheckCircle } from "react-icons/bs";
import { fonts, respond, Button } from "../../../styles";

// props color is a hex value, header is string and services is array of strings

export default function Card({ color, header, services, intl, children }) {
    const scrollToFooter = () => {
        const footer = document.querySelector("#footer");
        return footer.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <Main>
            <Header color={color}>{header}</Header>
            <ImageBox>{children}</ImageBox>
            <List color={color}>
                {services.map((item, i) => {
                    return (
                        <li key={`${header}-${i}`}>
                            <BsCheckCircle />
                            <p>{item}</p>
                        </li>
                    );
                })}
            </List>
            <Link to="/rentme">
                <Button color={color}>
                    {intl.formatMessage({ id: "servicesButton" })}
                </Button>
            </Link>
        </Main>
    );
}

const Main = styled.div`
    margin: 1rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${() => respond("l", "width: 33%;")}
`;
const Header = styled.h4`
    font-family: ${fonts.baumans};
    font-size: 3rem;
    font-weight: 500;
    letter-spacing: 0.2rem;
    color: ${(props) => props.color};
`;
const ImageBox = styled.div`
    margin: 1rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 20rem;
    height: 20rem;
    border-radius: 50%;

    img {
        width: 150%;
    }
`;
const List = styled.ul`
    list-style: none;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
        margin: 1rem auto;
        font-family: ${fonts.cormorant};
        font-size: 2.2rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        ${() => respond("m", "width: auto;")}
        ${() =>
            respond(
                "l",
                "justify-content: flex-start; width: 100%;"
            )}

        svg {
            min-width: 4rem;
            font-size: 3rem;
            color: ${(props) => props.color};
            margin-right: 1rem;
        }

        p {
            color: ${(props) => props.theme.font};

            ${() => respond("l", "flex: 1;")}
        }
    }
`;
