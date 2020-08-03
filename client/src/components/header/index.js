import React from "react";
import styled from "styled-components";
import Board from "./board";
import Events from "./events";

export default function Header() {
    return (
        <Main>
            <Board />
            <Events />
        </Main>
    );
}

const Main = styled.header`
    display: block;
    height: 100%;
    width: 100%;
`;
