import React, { useContext, useState, useEffect } from "react";
import styled, { ThemeContext } from "styled-components";
import { useIntl } from "react-intl";
// import { Link } from "react-router-dom";
import { Context } from "../../store";
import { fonts, respond } from "../../styles";
import { FaCookieBite } from "react-icons/fa";
import Policy from "../legal";

export default function CookiesStatement() {
    const intl = useIntl();
    const { store, dispatch } = useContext(Context);
    const themeContext = useContext(ThemeContext);

    const [necessary, setNecessary] = useState(true);
    const [analitycs, setAnalitycs] = useState(true);
    const [preferences, setPreferences] = useState(false);
    // //not using this type of cookies in this app
    // const [marketing, setMarketing] = useState(false);

    const [displayPolicy, setDisplayPolicy] = useState(false);

    useEffect(() => {
        const cookiesPresets = window.localStorage.getItem("cookiesPresets");

        if (cookiesPresets) {
            const cookiesPresetsObject = JSON.parse(cookiesPresets);

            return dispatch({
                type: "setCookies",
                payload: cookiesPresetsObject,
            });
        }
    }, [store]);

    const allowAll = () => {
        const { cookies } = store;
        cookies.display = false;
        cookies.types.forEach((each) => {
            each.allow = true;
        });
        localStorage.setItem("cookiesPresets", JSON.stringify(cookies));
        const cookiesPresets = window.localStorage.getItem("cookiesPresets");
        const cookiesPresetsObject = JSON.parse(cookiesPresets);
        return dispatch({
            type: "setCookies",
            payload: cookiesPresetsObject,
        });
    };

    const allowSelected = () => {
        const { cookies } = store;
        cookies.display = false;
        cookies.types.forEach((each) => {
            if (each.type === "necessary") {
                return (each.allow = necessary);
            }
            if (each.type === "analitycs") {
                return (each.allow = analitycs);
            }
            if (each.type === "preferences") {
                return (each.allow = preferences);
            }
            // if (each.type === "marketing") {
            //     return (each.allow = marketing);
            // }
        });
        localStorage.setItem("cookiesPresets", JSON.stringify(cookies));
        const cookiesPresets = window.localStorage.getItem("cookiesPresets");
        const cookiesPresetsObject = JSON.parse(cookiesPresets);
        return dispatch({
            type: "setCookies",
            payload: cookiesPresetsObject,
        });
    };
    const allowNecessary = () => {
        const { cookies } = store;
        cookies.display = false;
        cookies.types.forEach((each) => {
            if (each.type === "necessary") {
                return (each.allow = necessary);
            } else {
                return (each.allow = false);
            }
        });
        localStorage.setItem("cookiesPresets", JSON.stringify(cookies));
        const cookiesPresets = window.localStorage.getItem("cookiesPresets");
        const cookiesPresetsObject = JSON.parse(cookiesPresets);
        return dispatch({
            type: "setCookies",
            payload: cookiesPresetsObject,
        });
    };

    return (
        <Cookies>
            <Statement>
                <Icon>
                    <FaCookieBite />
                </Icon>

                <Info>
                    <h3>
                        {intl.formatMessage({ id: "cookiesStatementHeader" })}
                    </h3>
                    <p>{intl.formatMessage({ id: "cookiesStatementText" })}</p>
                </Info>
            </Statement>
            <Selections>
                <div>
                    <label htmlFor="necessary">Necessary</label>
                    <input
                        type="checkbox"
                        id="necessary"
                        name="necessary"
                        checked={necessary}
                        onChange={() => setNecessary(true)}
                    />
                </div>
                <div>
                    <label htmlFor="analitycs">Analytics</label>
                    <input
                        type="checkbox"
                        id="analitycs"
                        name="analitycs"
                        checked={analitycs}
                        onChange={() => setAnalitycs((prevState) => !prevState)}
                    />
                </div>
                <div>
                    <label htmlFor="preferences">Preferences</label>
                    <input
                        type="checkbox"
                        id="preferences"
                        name="preferences"
                        checked={preferences}
                        onChange={() =>
                            setPreferences((prevState) => !prevState)
                        }
                    />
                </div>
            </Selections>
            <Buttons>
                <button
                    style={{ backgroundColor: themeContext.grey }}
                    onClick={allowNecessary}
                >
                    Allow only necessary cookies
                </button>
                <button
                    style={{ backgroundColor: themeContext.grey }}
                    onClick={allowSelected}
                >
                    Allow selected cookies
                </button>
                <button
                    style={{
                        backgroundColor: themeContext.fresh,
                        color: themeContext.bg,
                    }}
                    onClick={allowAll}
                >
                    Allow all cookies
                </button>
            </Buttons>
            <ReadMore>
                <button onClick={() => setDisplayPolicy(true)}>
                    Read more about cookies
                </button>
            </ReadMore>
            {displayPolicy ? (
                <Policy setDisplayPolicy={setDisplayPolicy} />
            ) : null}
        </Cookies>
    );
}

const Cookies = styled.section`
    padding: 2rem;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    max-height: 80vh;
    border: 3px solid ${(props) => props.theme.tertiary};
    background-color: ${(props) => props.theme.bg};
    overflow: scroll;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
    z-index: 10;
`;
const Statement = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Icon = styled.div`
    padding: 3rem;
    color: ${(props) => props.theme.tertiary};
    font-size: 5rem;
`;
const Info = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    flex: 1;

    h3 {
        font-family: ${fonts.rajdhani};
        font-size: 3rem;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
    }
    p {
        font-family: ${fonts.cormorant};
        font-size: 2rem;
    }
`;
const Selections = styled.div`
    display: flex;
    padding: 1rem;
    margin: 1rem;
    flex-direction: column;
    align-items: center;

    ${() =>
        respond("l", "flex-direction: row; justify-content: space-around;")};

    div {
        border: 1px solid ${(props) => props.theme.grey};
        margin: 0.5rem;
        padding: 0.5rem;
        width: 20rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        label {
            font-size: 1.6rem;
            margin-right: 1rem;
        }
    }
`;
const Buttons = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;

    ${() => respond("l", "flex-direction: row; justify-content: space-around;")}

    button {
        width: 30rem;
        margin: 1rem;
        padding: 0.5rem 1.5rem;
        border: 1px solid ${(props) => props.theme.font};
        color: ${(props) => props.theme.font};
        background-color: ${(props) => props.theme.bg};
        cursor: pointer;
        font-family: ${fonts.cormorant};
        font-size: 2rem;

        &::active,
        ::focus {
            outline: none;
        }
        &::hover {
        }
    }
`;

const ReadMore = styled.div`
    margin: 1rem;
    padding: 1rem;

    button {
        padding: 0.5rem 1.5rem;
        border: 1px solid ${(props) => props.theme.font};
        color: ${(props) => props.theme.font};
        text-decoration: none;
        cursor: pointer;
        font-family: ${fonts.rajdhani};
        font-size: 2rem;
        font-weight: 400;

        &::active,
        ::focus {
            outline: none;
        }
    }
`;
