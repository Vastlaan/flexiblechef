import React from "react";
import styled from "styled-components";
import { fonts, respond } from "../styles";

export default function Intersection({
    header,
    text,
    price,
    priceDetail,
    children,
}) {
    return (
        <Section>
            <Line>
                <Stroke />
                <IconBox>{children}</IconBox>

                <Stroke />
            </Line>
            <Header>
                <h3>{header}</h3>
            </Header>
            {/* Optional*/}
            {price ? (
                <Price>
                    <h1>
                        {price}
                        <sub>€</sub>
                    </h1>
                    <sup>*{priceDetail}</sup>
                </Price>
            ) : null}
            <Text>
                <p>{text}</p>
            </Text>
        </Section>
    );
}

const Section = styled.div`
    margin: 5rem auto;
`;
const Line = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Stroke = styled.div`
    width: 20%;
    height: 1px;
    opacity: 0.4;
    background-color: ${(props) => props.theme.font};
`;
const IconBox = styled.div`
    font-size: 5rem;
    color: ${(props) => props.theme.warm};
`;
const Header = styled.div`
    margin: 2rem auto;

    h3 {
        font-size: 3rem;
        font-family: ${fonts.baumans};
        color: ${(props) => props.theme.primary};
        text-transform: uppercase;
        text-align: center;
    }
`;
const Price = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
        font-size: 6rem;
        font-weight: 400;
        font-family: ${fonts.baumans};
        color: ${(props) => props.theme.warm};

        sub {
            font-size: 3rem;
        }
    }
    sup {
        font-family: ${fonts.rajdhani};
        font-size: 1rem;
        color: ${(props) => props.theme.font};
    }
`;
const Text = styled.div`
    width: 90%;
    margin: 2rem auto;

    ${() => respond("m", "width: 50%")}

    p {
        font-family: ${fonts.cormorant};
        color: ${(props) => props.theme.font};
        font-size: 2.2rem;
        text-align: center;
    }
`;
