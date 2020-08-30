import React from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { fonts, respond } from "../../styles";

export default function Eventss() {
    const intl = useIntl();
    return (
        <Events>
            <div>
                <p>{intl.formatMessage({ id: "headerEvents1" })}</p>
                <p>{intl.formatMessage({ id: "headerEvents2" })}</p>
            </div>
            <div>
                <p>{intl.formatMessage({ id: "headerEvents3" })}</p>
                <p>{intl.formatMessage({ id: "headerEvents4" })}</p>
            </div>
        </Events>
    );
}
const Events = styled.div`
    position: absolute;
    bottom: 1rem;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    z-index: 4;

    div {
        flex: 1;
        display: flex;
        justify-content: space-evenly;
    }

    p {
        font-family: ${fonts.baumans};
        font-size: 1.35rem;
        text-transform: uppercase;
        opacity: 0.9;
        color: ${(props) => props.theme.grey};
        margin: 0 1rem;
        ${() => respond("s", "font-size: 2rem; letter-spacing: 0.2rem;")}
        ${() => respond("m", "font-size: 3rem; letter-spacing: 0.2rem;")}
    }
`;
