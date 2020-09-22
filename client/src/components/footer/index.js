import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useIntl } from "react-intl";
import Contact from "./contact";
import Form from "./form";
import { fonts, respond } from "../../styles";

export default function Footer() {
    const intl = useIntl();
    return (
        <Container id="contact">
            <Main>
                <Contact intl={intl} />
                <Form intl={intl} />
            </Main>
            <Copyright>
                <p>
                    Copyright &copy;{new Date().getFullYear()}{" "}
                    <a href="https://michalantczak.com">Michal Antczak</a>.{" "}
                    {intl.formatMessage({ id: "footerCopyright" })}
                </p>
                <p>
                    <Link to="/algemene-voorwaarden">
                        {intl.formatMessage({
                            id: "footerCopyrightVoorwaarden",
                        })}
                    </Link>
                </p>
            </Copyright>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
    background-color: ${(props) => props.theme.footer};
    border-top: 1px solid #fffcf9;
`;
const Main = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${() =>
        respond(
            "l",
            "flex-direction: row; justify-content: space-between; align-items: stretch;"
        )}
`;

const Copyright = styled.div`
    border-top: 1px solid snow;
    margin-top: 2rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    p {
        font-family: ${fonts.rajdhani};
        font-size: 1.6rem;
        color: snow;
        text-align: center;
        letter-spacing: 0.2rem;

        a {
            text-decoration: none;
            color: gold;
        }
    }
`;
