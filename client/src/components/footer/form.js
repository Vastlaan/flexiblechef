import React, { useState } from "react";
import styled from "styled-components";
import { fonts, respond } from "../../styles";
import { MdClose } from "react-icons/md";

export default function Form({ intl }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [warning, setWarning] = useState("");
    const [displayConfirmation, setDisplayConfirmation] = useState(false);

    const submitContactForm = (e) => {
        e.preventDefault();
        if (!email || !message) {
            return setWarning("Fields EMAIL and MESSAGE are required");
        }
        if (!isValidEmail(email)) {
            return setWarning("Email address is not valid");
        }
        const dataToSend = { name, email, message };

        //change hostname to /
        fetch("/api/submitForm", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataToSend),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data === "Sucess" || "Failed") {
                    console.log(data);
                    setDisplayConfirmation(true);
                }
            });
        setWarning("");
        return e.target.reset();
    };
    const isValidEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    return (
        <Container onSubmit={submitContactForm}>
            <Header>{intl.formatMessage({ id: "footerContactHeader" })}</Header>
            <Text>{intl.formatMessage({ id: "footerContactText" })}</Text>
            {warning ? <div style={{ color: "red" }}>{warning}</div> : null}
            <Section>
                <label htmlFor="name">
                    {intl.formatMessage({ id: "footerContactName" })}
                </label>
                <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    id="name"
                    name="name"
                    required
                />
            </Section>
            <Section>
                <label htmlFor="email">
                    {intl.formatMessage({ id: "footerContactEmail" })}
                </label>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email"
                    name="email"
                    required
                />
            </Section>
            <Section>
                <label htmlFor="msg">
                    {intl.formatMessage({ id: "footerContactMsg" })}
                </label>
                <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    type="text"
                    maxLength="500"
                    id="msg"
                    name="msg"
                    required
                ></textarea>
            </Section>
            <Section>
                <Button type="submit">
                    {intl.formatMessage({ id: "footerContactBtn" })}
                </Button>
            </Section>
            {displayConfirmation ? (
                <Confirmation>
                    <div onClick={() => setDisplayConfirmation(false)}>
                        <MdClose />
                    </div>
                    <h1>Thank you for your message!</h1>
                    <h1>I will contact you as soon as possible.</h1>
                    <a href="#" onClick={() => setDisplayConfirmation(false)}>
                        <span>Ok</span>
                    </a>
                </Confirmation>
            ) : null}
        </Container>
    );
}

const Container = styled.form`
    padding: 2rem;
    display: flex;
    flex-direction: column;
`;
const Section = styled.div`
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    ${() =>
        respond(
            "m",
            "width: 60rem; flex-direction: row;justify-content: space-between;"
        )}
    label {
        font-family: ${fonts.rajdhani};
        font-size: 2.2rem;
        color: snow;
    }
    input,
    textarea {
        width: 100%;
        border: 1px solid snow;
        padding: 1rem 3rem;
        background-color: transparent;
        color: snow;

        ${() => respond("m", "width: 50rem;")}

        &:focus,
        :active {
            outline: none;
        }
    }
    textarea {
        height: 15rem;
    }
`;
const Header = styled.h3`
    font-family: ${fonts.rajdhani};
    font-size: 3rem;
    font-weight: 400;
    color: snow;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    text-align: center;
`;
const Text = styled.p`
    margin: 1rem auto;
    font-family: ${fonts.rajdhani};
    font-size: 1.8rem;
    font-weight: 300;
    color: snow;
    text-align: center;
`;
const Button = styled.button`
    width: 60%;
    background-color: transparent;
    border: 1px solid snow;
    padding: 1rem 3rem;
    color: snow;
    font-family: ${fonts.rajdhani};
    font-size: 3rem;
    letter-spacing: 0.2rem;
    cursor: pointer;
    transition: all 0.3s;

    ${() => respond("s", "width: 40%")}

    &:hover {
        color: ${(props) => props.theme.footer};
        background-color: snow;
    }

    &:focus,
    :active {
        outline: none;
    }
`;
const Confirmation = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 99;

    div {
        position: absolute;
        top: 2rem;
        right: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            color: ${(props) => props.theme.bg};
            font-size: 5rem;
            cursor: pointer;
        }
    }

    h1 {
        font-family: ${fonts.rajdhani};
        font-size: 3rem;
        color: ${(props) => props.theme.bg};
    }

    a {
        margin-top: 2rem;
        color: ${(props) => props.theme.bg};
        border: 1px solid ${(props) => props.theme.bg};
        font-size: 2.2rem;
        text-decoration: none;
        padding: 1rem 2rem;
        cursor: pointer;
    }
`;
