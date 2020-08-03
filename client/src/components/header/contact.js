import React from "react";
import { useIntl } from "react-intl";
import { fonts } from "../../styles";
import styled from "styled-components";
import { RiTimeLine, RiPhoneLine, RiMailLine } from "react-icons/ri";

export default function Contactt() {
    const intl = useIntl();
    return (
        <Contact>
            <Time>
                <RiTimeLine />
                <p>{intl.formatMessage({ id: "headerContactAvailable" })}</p>
            </Time>
            <Phone href="tel:0031682307051">
                <RiPhoneLine />
                <span>06 82 30 70 51</span>
            </Phone>
            <Mail href="mailto:info@michalantczak.com">
                <RiMailLine />
                <span>info@michalantczak.com</span>
            </Mail>
        </Contact>
    );
}

const Contact = styled.div`
    flex: 0 0 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;
const Time = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: gold;

    svg {
        margin-right: 1rem;
        font-size: 3rem;
    }
    p {
        font-family: ${fonts.rajdhani};
        font-size: 2.5rem;
    }
`;
const Phone = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: snow;
    text-decoration: none;
    color: ${(props) => props.theme.tertiary};
    font-family: ${fonts.rajdhani};
    font-size: 2.5rem;

    svg {
        margin-right: 1rem;
        font-size: 3rem;
    }
`;
const Mail = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: snow;
    text-decoration: none;
    color: ${(props) => props.theme.warm};
    font-family: ${fonts.rajdhani};
    font-size: 2.5rem;

    svg {
        margin-right: 1rem;
        font-size: 3rem;
    }
`;
