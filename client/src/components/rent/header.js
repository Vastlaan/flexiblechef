import React from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { fonts, respond, Header } from "../../styles";

export default function Headerr() {
    const intl = useIntl();

    return (
        <Container>
            <Header>{intl.formatMessage({ id: "rentHeaderHeader" })}</Header>
            <ul>
                <li>{intl.formatMessage({ id: "rentHeaderStep1" })}</li>
                <li>{intl.formatMessage({ id: "rentHeaderStep2" })}</li>
                <li>{intl.formatMessage({ id: "rentHeaderStep3" })}</li>
            </ul>
        </Container>
    );
}

const Container = styled.div`
    ul {
        margin: 0 auto;
        margin-top: 2rem;
        width: 100%;
        padding: 2rem;
        list-style: none;
        background-color: ${(props) => props.theme.tertiary};
        border-radius: 3px;

        ${() => respond("m", "width: 75%;")};
        ${() => respond("l", "width: 50%;")};

        li {
            margin: 1rem auto;
            font-family: ${fonts.rajdhani};
            font-size: 2rem;
            text-align: center;
            color: snow;
        }
    }
`;
