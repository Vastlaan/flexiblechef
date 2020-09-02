import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fonts, respond } from "../../styles";
import SwitchLang from "./switchLang";
import MainButton from "./mainButton";
import Menu from "./menu";
import { RiSunLine, RiMoonLine } from "react-icons/ri";

export default function Nav({ isDarkTheme, setIsDarkTheme }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Container>
            <Navigation>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <Name>Flexible Chef</Name>
                </Link>

                <Options>
                    <SwitchLang />
                    <ToggleTheme
                        onClick={() =>
                            setIsDarkTheme((prevState) => !prevState)
                        }
                    >
                        {isDarkTheme ? <RiSunLine /> : <RiMoonLine />}
                    </ToggleTheme>
                    <MainButton isOpen={isOpen} setIsOpen={setIsOpen} />
                </Options>
            </Navigation>
            <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
        </Container>
    );
}

const Container = styled.div`
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${(props) => props.theme.bg};
`;
const Navigation = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0rem 1rem;
    ${() => respond("m", "padding: 0rem 2rem;")};
    border-bottom: 1px solid ${(props) => props.theme.grey};
`;

const Name = styled.div`
    font-family: ${fonts.baumans};
    letter-spacing: 0.2rem;
    font-size: 4rem;
    color: ${(props) => props.theme.tertiary};
`;
const Options = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const ToggleTheme = styled.button`
    margin-right: 1rem;
    display: flex;
    align-items: center;
    background-color: transparent;
    color: ${(props) => props.theme.primary};
    font-size: 3.5rem;
    cursor: pointer;
    border: none;
    padding: 0.5rem;
    transition: all 0.3s;

    &:hover {
        transform: scale(1.2);
    }

    &:focus,
    :active {
        outline: none;
    }
`;
