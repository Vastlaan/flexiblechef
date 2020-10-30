import React from "react";
import styled from "styled-components";
import Board from "./board";
import Events from "./events";
import { respond } from "../../../styles";

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
    overflow: hidden;

    ${() => respond("xl", "max-width: 1366px; margin: 0 auto;")}
`;
