import React from "react";
import styled from "styled-components";
import { respond } from "../styles";

export default function Layout({ children }) {
    return <Container>{children}</Container>;
}

const Container = styled.div`
    ${() => respond("xl", "width: 1366px; margin: 0 auto;")}
`;
