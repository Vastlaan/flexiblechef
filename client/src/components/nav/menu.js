import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { fonts, respond } from "../../styles";

export default function Navigation({ isOpen, setIsOpen }) {
    const intl = useIntl();

    return (
        <Nav isOpen={isOpen}>
            <ul>
                <Link
                    to="/"
                    onClick={() =>
                        window.innerWidth < 780 ? setIsOpen(false) : null
                    }
                >
                    {intl.formatMessage({ id: "navigationHome" })}
                </Link>
                <Link
                    to="/rentme"
                    onClick={() =>
                        window.innerWidth < 780 ? setIsOpen(false) : null
                    }
                >
                    {intl.formatMessage({ id: "navigationRent" })}
                </Link>
                <Link
                    to="/gallery"
                    onClick={() =>
                        window.innerWidth < 780 ? setIsOpen(false) : null
                    }
                >
                    {intl.formatMessage({ id: "navigationGallery" })}
                </Link>
                <Link
                    to="/certificates"
                    onClick={() =>
                        window.innerWidth < 780 ? setIsOpen(false) : null
                    }
                >
                    {intl.formatMessage({ id: "navigationCertificates" })}
                </Link>
            </ul>
        </Nav>
    );
}

const Nav = styled.nav`
    background-color: ${(props) => props.theme.tertiary};
    width: 100%;
    transition: all 0.3s;
    height: ${(props) => (props.isOpen ? "28rem" : "0rem")};
    visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
    padding: ${(props) => (props.isOpen ? "2rem" : "0rem")};
    overflow: hidden;
    z-index: 11;

    ${(props) => {
        if (props.isOpen) {
            return respond("m", ` height:3.5rem; padding:0rem;`);
        } else {
            return respond("m", `height:0rem; padding:0rem;`);
        }
    }}

    ul {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        height: 100%;
        list-style: none;
        ${(props) =>
            respond(
                "m",
                `flex-direction: row; align-items: center; justify-content: space-around;`
            )}

        a {
            text-decoration: none;
            font-family: ${fonts.rajdhani};
            font-size: 2rem;
            color: snow;
            text-transform: capitalize;
            cursor: pointer;
            margin: 1rem;
            ${(props) => respond("m", `margin: 1rem`)};
            position: relative;

            &::after {
                content: "";
                display: inline-block;
                width: 0;
                height: 2px;
                background-color: snow;
                transition: all 0.3s;
                position: absolute;
                bottom: 0;
                left: 0;
                opacity: 0;
            }

            &:hover {
                &::after {
                    width: 100%;
                    opacity: 1;
                }
            }
        }
    }
`;
