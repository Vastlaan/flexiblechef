import React from "react";
import { useIntl } from "react-intl";
import { fonts, respond } from "../../styles";
import styled from "styled-components";
import Contact from "./contact";
import { GiFoodTruck } from "react-icons/gi";

export default function Board() {
    const intl = useIntl();
    return (
        <Head>
            <Slogan>
                <Upper>{intl.formatMessage({ id: "headerSlogan1" })}</Upper>
                <FoodTruck>
                    <GiFoodTruck />
                </FoodTruck>
                <Lower>{intl.formatMessage({ id: "headerSlogan2" })}</Lower>
            </Slogan>
            <Contact />
        </Head>
    );
}

const Head = styled.div`
    padding: 2rem;
    padding-top: 10rem;
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    ${() => respond("m", "flex-direction: row;")}
`;
const Slogan = styled.div`
    position: relative;
    padding: 2rem 0;
    flex: 0 0 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-family: ${fonts.rajdhani};

    &:last-child {
        align-self: flex-end;
    }
`;
const Upper = styled.h1`
    text-align: left;
    text-transform: uppercase;
    color: snow;
    font-size: 5rem;
    font-weight: 400;
    z-index: 5;
    line-height: 2;
`;
const Lower = styled.h1`
    text-align: right;
    text-transform: uppercase;
    color: snow;
    font-size: 5rem;
    font-weight: 400;
    z-index: 5;
    line-height: 2;
`;
const FoodTruck = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25rem;
    color: ${(props) => props.theme.tertiary};
`;
