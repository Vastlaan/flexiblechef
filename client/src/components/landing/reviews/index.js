import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { fonts, respond } from "../../../styles";
import Rev from "../../../img/reviews.jpg";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function Reviews() {
    const [q, setQ] = useState(1);
    const intl = useIntl();

    useEffect(() => {
        const switchQuotes = () => {
            switch (q) {
                case 1:
                    return setQ(2);
                case 2:
                    return setQ(3);
                case 3:
                    return setQ(1);
                default:
                    return setQ(1);
            }
        };
        const interval = setInterval(switchQuotes, 5000);

        return () => clearInterval(interval);
    }, [q]);

    return (
        <Container>
            <BackgroundImage>
                <img src={Rev} alt="office" />
            </BackgroundImage>
            <Header>{intl.formatMessage({ id: "reviewsHeader" })}</Header>
            <Quotes>
                {q === 1 ? (
                    <Text>
                        <QuoteLeft>
                            <FaQuoteLeft />
                        </QuoteLeft>
                        <Quote>{intl.formatMessage({ id: "review1" })}</Quote>
                        <QuoteRight>
                            <FaQuoteRight />
                        </QuoteRight>
                    </Text>
                ) : q === 2 ? (
                    <Text2>
                        <QuoteLeft2>
                            <FaQuoteLeft />
                        </QuoteLeft2>
                        <Quote2>{intl.formatMessage({ id: "review2" })}</Quote2>
                        <QuoteRight2>
                            <FaQuoteRight />
                        </QuoteRight2>
                    </Text2>
                ) : (
                    <Text3>
                        <QuoteLeft3>
                            <FaQuoteLeft />
                        </QuoteLeft3>
                        <Quote3>{intl.formatMessage({ id: "review3" })}</Quote3>
                        <QuoteRight3>
                            <FaQuoteRight />
                        </QuoteRight3>
                    </Text3>
                )}
            </Quotes>
        </Container>
    );
}
const Container = styled.section`
    margin: 5rem auto;
    width: 100%;
    padding: 1rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;
    ${() => respond("s", "padding: 5rem 2rem;")}
`;

const BackgroundImage = styled.div`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    z-index: -1;
    overflow: hidden;

    ${() =>
        respond(
            "xl",
            "transform: translateX(calc((100vw - 1366px) / 2 * -1));"
        )}

    img {
        width: 180%;
        ${() => respond("s", "width: 140%;")}
        ${() => respond("m", "width: 100%;")}
    }
`;
const Header = styled.h3`
    font-family: ${fonts.baumans};
    font-size: 4rem;
    font-weight: 500;
    color: ${(props) => props.theme.grey};
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    text-align: center;
    ${() => respond("s", "font-size: 4.5rem;")}
`;

const Quotes = styled.div`
    position: relative;
    width: 90%;
    height: 42rem;
    margin: 0 auto;
    z-index: 5;
    overflow: hidden;
`;
const Text = styled.div`
    width: 100%;
    position: absolute;
    top: 10%;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform 0.5s;
    animation: slideFromRight 0.3s linear;
    ${() => respond("s", "top:20%")}
`;

const QuoteLeft = styled.p`
    align-self: flex-start;
    font-size: 6rem;
    line-height: 1;
    color: ${(props) => props.theme.grey};
`;
const QuoteRight = styled.p`
    align-self: flex-end;
    font-size: 6rem;
    line-height: 1;
    color: ${(props) => props.theme.grey};
`;
const Quote = styled.p`
    font-size: 2.5rem;
    font-family: ${fonts.rajdhani};
    font-weight: 700;
    letter-spacing: 0.2rem;
    padding: 0rem;
    color: ${(props) => props.theme.grey};
    text-align: center;
    ${() => respond("s", "font-size: 3rem;padding: 0 2rem;")}
`;
const Text2 = styled.div`
    width: 100%;
    position: absolute;
    top: 10%;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform 0.5s;
    animation: slideFromRight 0.3s linear;
    ${() => respond("s", "top:20%")}
`;

const QuoteLeft2 = styled.p`
    align-self: flex-start;
    font-size: 6rem;
    line-height: 1;
    color: ${(props) => props.theme.grey};
`;
const QuoteRight2 = styled.p`
    align-self: flex-end;
    font-size: 6rem;
    line-height: 1;
    color: ${(props) => props.theme.grey};
`;
const Quote2 = styled.p`
    font-size: 2.5rem;
    font-family: ${fonts.rajdhani};
    font-weight: 700;
    letter-spacing: 0.2rem;
    padding: 0rem;
    color: ${(props) => props.theme.grey};
    text-align: center;
    ${() => respond("s", "font-size: 3rem;padding: 0 2rem;")}
`;
const Text3 = styled.div`
    width: 100%;
    position: absolute;
    top: 10%;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform 0.5s;
    animation: slideFromRight 0.3s linear;
    ${() => respond("s", "top:20%")}
`;

const QuoteLeft3 = styled.p`
    align-self: flex-start;
    font-size: 6rem;
    line-height: 1;
    color: ${(props) => props.theme.grey};
`;
const QuoteRight3 = styled.p`
    align-self: flex-end;
    font-size: 6rem;
    line-height: 1;
    color: ${(props) => props.theme.grey};
`;
const Quote3 = styled.p`
    font-size: 2.5rem;
    font-family: ${fonts.rajdhani};
    font-weight: 700;
    letter-spacing: 0.2rem;
    padding: 0rem;
    color: ${(props) => props.theme.grey};
    text-align: center;
    ${() => respond("s", "font-size: 3rem;padding: 0 2rem;")}
`;
