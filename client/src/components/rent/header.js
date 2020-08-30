import React from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { fonts } from "../../styles";

export default function Header() {
    const intl = useIntl();

    return (
        <Container>
            <h1>{intl.formatMessage({ id: "rentHeaderHeader" })}</h1>
            <ul>
                <li>{intl.formatMessage({ id: "rentHeaderStep1" })}</li>
                <li>{intl.formatMessage({ id: "rentHeaderStep2" })}</li>
                <li>{intl.formatMessage({ id: "rentHeaderStep3" })}</li>
            </ul>
        </Container>
    );
}

const Container = styled.div`
    h1 {
        font-family: ${fonts.rajdhani};
        font-size: 4rem;
        color: ${(props) => props.theme.primary};
        text-align: center;
        font-weight: 400;
    }
    ul {
        padding: 0rem 2rem;
        list-style: none;

        li {
            font-family: ${fonts.rajdhani};
            font-size: 2rem;
            text-align: center;
            color: ${(props) => props.theme.warm};
        }
    }
`;
