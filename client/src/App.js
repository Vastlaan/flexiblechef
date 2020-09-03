import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useIntl } from "react-intl";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Context } from "./store";
//components
import SEO from "./components/SEO";
import ScrollToTop from "./components/scrollToTop";
import Nav from "./components/nav";
import Landing from "./components/landing";
import Rent from "./components/rent";
import Gallery from "./components/gallery";
import Footer from "./components/footer";
import Cookies from "./components/cookies";
//styles
import { lightTheme, darkTheme, respond } from "./styles";

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

                <Router>
                    <ScrollToTop />
                    <Nav
                        isDarkTheme={isDarkTheme}
                        setIsDarkTheme={setIsDarkTheme}
                    />
                    <Switch>
                        <Route exact={true} path="/" component={Landing} />
                        <Route exact={true} path="/rentme" component={Rent} />
                        <Route
                            exact={true}
                            path="/gallery"
                            component={Gallery}
                        />
                    </Switch>
                    <Footer />
                </Router>

                {store.cookies.display ? <Cookies /> : null}
            </ThemeProvider>
        </div>
    );
}

const GlobalStyles = createGlobalStyle`

    @keyframes changeInfo{
        0%{
            opacity: 0;
            transform: scale(1.2);
        }
        100%{
            opacity: 1;
            transform: scale(1);
        }
    }

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

export default App;
