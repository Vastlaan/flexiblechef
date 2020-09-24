import React from "react";
import styled from "styled-components";
import { fonts } from "../../../styles";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function RequestConfirmation({
    date,
    hour,
    name,
    address,
    email,
    phone,
    price,
    setConfirmationRequest,
    intl,
    history,
}) {
    return (
        <Conf>
            <Close
                onClick={() => {
                    setConfirmationRequest(false);
                    return history.push("/");
                }}
            >
                <AiOutlineCloseCircle />
            </Close>
            <h1>{intl.formatMessage({ id: "rentRequestConfirmationH1" })}</h1>
            <h3>{intl.formatMessage({ id: "rentRequestConfirmationH2" })}</h3>
            <p>
                {intl.formatMessage({ id: "rentRequestConfirmationDate" })}{" "}
                <strong>{date}</strong>
            </p>
            <p>
                {intl.formatMessage({ id: "rentRequestConfirmationStart" })}{" "}
                <strong>{hour[0]}</strong>{" "}
                {intl.formatMessage({ id: "rentRequestConfirmationEnd" })}{" "}
                <strong>{hour[1]}</strong>{" "}
            </p>
            <p>
                {intl.formatMessage({ id: "rentRequestConfirmationCompany" })}{" "}
                <strong>{name}</strong>
            </p>
            <p>
                {intl.formatMessage({ id: "rentRequestConfirmationAddress" })}{" "}
                <strong>{address}</strong>
            </p>
            <p>
                {intl.formatMessage({ id: "rentRequestConfirmationEmail" })}{" "}
                <strong>{email}</strong>
            </p>
            <p>
                {intl.formatMessage({ id: "rentRequestConfirmationPhone" })}{" "}
                <strong>{phone}</strong>
            </p>
            <p>
                {intl.formatMessage({ id: "rentRequestConfirmationPrice" })}{" "}
                <strong>{price}</strong>
                <sub>excl.BTW</sub>
            </p>
            <p>
                {intl.formatMessage({ id: "rentRequestConfirmationRegards" })}
            </p>
        </Conf>
    );
}
const Conf = styled.div`
    padding: 1rem;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    color: snow;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 11;
    text-align: center;

    h1 {
        margin: 1rem auto;
        font-family: ${fonts.rajdhani};
        font-size: 3rem;
        letter-spacing: 0.2rem;
    }
    h3 {
        margin: 1rem auto;
        font-family: ${fonts.rajdhani};
        font-size: 2.5rem;
        letter-spacing: 0.2rem;
    }
    p {
        margin: 1rem auto;
        font-family: ${fonts.rajdhani};
        font-size: 2rem;
        letter-spacing: 0.2rem;
    }
`;

const Close = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    width: 5rem;
    height: 5rem;
    position: absolute;
    top: 1rem;
    right: 1rem;

    &:focus,
    :active {
        outline: none;
    }

    svg {
        font-size: 5rem;
        color: snow;
    }
`;
