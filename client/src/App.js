import React, { useState, useContext } from "react";
import { useIntl } from "react-intl";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { Context } from "./store";
import Nav from "./components/nav";
import Header from "./components/header";
import Intersection from "./components/intersection";
import About from "./components/about";
import Services from "./components/services";
import Reviews from "./components/reviews";
import Footer from "./components/footer";
import Cookies from "./components/cookies";
import WhatsApp from "./components/whatsApp";
import SEO from "./components/SEO";
import { lightTheme, darkTheme, respond } from "./styles";
import { RiHeartsLine, RiMoneyEuroCircleLine } from "react-icons/ri";

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const intl = useIntl();
    const { store, dispatch } = useContext(Context);

    return (
        <div>
            <SEO
                title={intl.formatMessage({ id: "htmlTitle" })}
                description={intl.formatMessage({ id: "htmlDescription" })}
                keywords={intl.formatMessage({ id: "htmlKeywords" })}
                author={`Michal Antczak`}
                siteUrl={`https://flexiblechef.nl`}
                robots={`index, follow`}
                canonicalUrl={`https://flexiblechef.nl`}
            />
            <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
                <GlobalStyles />
                <Main>
                    <BackgroundVideo>
                        <video preload="auto" loop autoPlay>
                            <source
                                src="https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/headerCompressed.mp4"
                                type="video/mp4"
                            />
                        </video>

                        <Nav
                            isDarkTheme={isDarkTheme}
                            setIsDarkTheme={setIsDarkTheme}
                        />
                        <Header />
                    </BackgroundVideo>

                    <About />

                    <Intersection
                        header={intl.formatMessage({
                            id: "intersection1Header",
                        })}
                        text={intl.formatMessage({
                            id: "intersection1Text",
                        })}
                        price={null}
                    >
                        <RiHeartsLine />
                    </Intersection>

                    <Services />

                    <Reviews />

                    <Intersection
                        header={intl.formatMessage({
                            id: "intersection2Header",
                        })}
                        text={intl.formatMessage({
                            id: "intersection2Text",
                        })}
                        price={`18.95`}
                        priceDetail={intl.formatMessage({
                            id: "intersection2Price",
                        })}
                    >
                        <RiMoneyEuroCircleLine color={"#2A9D8F"} />
                    </Intersection>

                    <Footer />
                    <WhatsApp />
                    {store.cookies.display ? <Cookies /> : null}
                </Main>
            </ThemeProvider>
        </div>
    );
}

const GlobalStyles = createGlobalStyle`

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    html{
        font-size: 50%;
        line-height:1.4;
        background-color: ${(props) => props.theme.bg};
        color: ${(props) => props.theme.font};
        
        ${(props) => respond("s", `font-size:55%;`)}
        ${(props) => respond("m", `font-size:60%;`)}
        ${(props) => respond("l", `font-size:62.5%;`)}
        ${(props) => respond("xxl", `font-size:100%;`)}

    }
    @keyframes slideFromRight{
        0%{
            transform: translate(100%);
            opacity: 0;
        }
        100%{
            transform: translate(0);
            opacity: 1;
        }
    }
`;
const Main = styled.div`
    width: 100%;
    overflow-x: hidden;
`;
const BackgroundVideo = styled.div`
    position: relative;
    overflow: hidden;
    height: 75vh;
    width: 100%;

    video {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        object-fit: cover;
        object-position: 50% 50%;
        width: 100%;
        height: 100%;

        ${() => respond("m", `min-height: 100%; width: 100%;`)}
    }
`;

export default App;
