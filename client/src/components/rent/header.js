import React from "react";
import styled from "styled-components";
import { respond, fonts } from "../../styles";

export default function Header() {
    return (
        <Container>
            <h1>Rent the Chef</h1>
            <ul>
                <li>
                    1. Fill the underneath form. Click Next/Previous button to
                    navigate between form's sections.
                </li>
                <li>2. Review filled data and submit request.</li>
                <li>
                    3. You will receive a confirmation email. If it is your
                    first time working with me you can expect the call to
                    confirm the request.
                </li>
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
