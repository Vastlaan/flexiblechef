import React from "react";
import styled from "styled-components";
import { fonts, respond } from "../../styles";
import {
    RiPhoneLine,
    RiMailLine,
    RiLinkedinBoxLine,
    RiFacebookBoxLine,
} from "react-icons/ri";

export default function Cont({ intl }) {
    return (
        <Contact>
            <Header>
                <h3>Flexible Chef</h3>
                <h4>Michal Antczak</h4>
            </Header>
            <Address>
                <p>Oostervenne 397</p>
                <p>1444XN Purmerend</p>
            </Address>
            <Phone>
                <RiPhoneLine />
                <a href="tel:0031682307051">06 82 30 70 51</a>
            </Phone>
            <Mail>
                <RiMailLine />
                <a href="mailto:info@michalantczak.com">
                    info@michalantczak.com
                </a>
            </Mail>
            <Social>
                <h3>{intl.formatMessage({ id: "footerSocial" })}</h3>
                <div>
                    <RiLinkedinBoxLine />
                    <RiFacebookBoxLine />
                </div>
            </Social>
        </Contact>
    );
}

const Contact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${() => respond("l", "align-items: stretch; justify-content: flex-start;")}
`;
const Header = styled.div`
    text-align: center;
    ${() => respond("l", "text-align: left;")}
    h3 {
        font-family: ${fonts.baumans};
        letter-spacing: 0.2rem;
        font-size: 4rem;
        font-weight: 300;
        color: snow;
    }
    h4 {
        font-family: ${fonts.rajdhani};
        letter-spacing: 0.2rem;
        font-size: 2.5rem;
        font-weight: 300;
        color: snow;
        line-height: 1.2;
    }
`;
const Address = styled.div`
    margin: 1rem 0;
    text-align: center;
    ${() => respond("l", "text-align: left;")}
    p {
        font-family: ${fonts.rajdhani};
        font-size: 2rem;
        font-weight: 300;
        color: snow;
        line-height: 1.2;
        color: ${(props) => props.theme.grey};
    }
`;
const Phone = styled.div`
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    transition: all 0.3s;

    &:hover {
        transform: scale(1.1);
    }

    svg {
        margin-right: 1rem;
        font-size: 3rem;
        color: #e9c46a;
    }
    a {
        text-decoration: none;
        font-family: ${fonts.rajdhani};
        letter-spacing: 0.2rem;
        font-size: 2.5rem;
        font-weight: 500;
        color: #e9c46a;
    }
`;
const Mail = styled.div`
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    transition: all 0.3s;

    &:hover {
        transform: scale(1.1);
    }

    svg {
        margin-right: 1rem;
        font-size: 3rem;
        color: ${(props) => props.theme.warm};
    }
    a {
        text-decoration: none;
        font-family: ${fonts.rajdhani};
        letter-spacing: 0.2rem;
        font-size: 2.5rem;
        font-weight: 500;
        color: ${(props) => props.theme.warm};
    }
`;

const Social = styled.div`
    margin: 1rem 0;
    h3 {
        font-family: ${fonts.rajdhani};
        font-size: 2.2rem;
        font-weight: 300;
        color: ${(props) => props.theme.grey};
    }
    div {
        margin: 1rem 0rem;
        display: flex;
        justify-content: center;

        ${() => respond("l", "justify-content: flex-start;")}
        svg {
            cursor: pointer;
            font-size: 4rem;
            color: ${(props) => props.theme.grey};
            margin-right: 1rem;
            transition: all 0.3s;

            &:hover {
                transform: scale(1.2);
            }
        }
    }
`;
