import React from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { fonts, respond } from "../../../styles";
import Me from "../../../img/me.jpg";

export default function About() {
    const intl = useIntl();
    return (
        <Container>
            <Header>{intl.formatMessage({ id: "aboutHeader" })}</Header>
            <Image>
                <img src={Me} alt="me an chef" />
            </Image>
            <Text>{intl.formatMessage({ id: "aboutText" })}</Text>
            <Wave>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#2A9D8F"
                        fillOpacity="1"
                        d="M0,224L48,202.7C96,181,192,139,288,138.7C384,139,480,181,576,176C672,171,768,117,864,112C960,107,1056,149,1152,144C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            </Wave>
        </Container>
    );
}

const Container = styled.div`
    margin: 10rem auto;
    padding: 2rem;
    height: auto;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Header = styled.h3`
    font-family: ${fonts.baumans};
    font-size: 3rem;
    color: ${(props) => props.theme.primary};
    text-transform: uppercase;
    text-align: center;
`;
const Image = styled.div`
    margin: 5rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 25rem;
    height: 25rem;
    border-radius: 50%;

    img {
        width: 100%;
    }
`;
const Wave = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 3;
`;
const Text = styled.p`
    margin-bottom: 5rem;
    text-align: center;
    width: 90%;
    z-index: 6;
    font-family: ${fonts.cormorant};
    font-size: 2.2rem;
    color: ${(props) => props.theme.font};

    ${() => respond("m", "width: 50%;")}

    strong {
        font-weight: 600;
    }
`;
