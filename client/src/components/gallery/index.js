import React from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { fonts, respond, Header } from "../../styles";

export default function Gallery() {
    return (
        <Container>
            <Header>Gallery</Header>
        </Container>
    );
}

const Container = styled.div`
    padding: 10rem 0rem;
    width: 100%;
    overflow-x: hidden;
`;
