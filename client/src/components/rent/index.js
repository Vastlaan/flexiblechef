import React from "react";
import styled from "styled-components";
import ReactGA from "react-ga";
import Header from "./header";
import Form from "./form";

export default function Rent() {
    ReactGA.pageview("/rentme");

    return (
        <Container>
            <Header />
            <Form />
        </Container>
    );
}
const Container = styled.div`
    padding: 10rem 0rem;
    width: 100%;
    overflow-x: hidden;
`;
