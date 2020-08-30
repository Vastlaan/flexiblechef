import React from "react";
import styled from "styled-components";
import { respond, fonts } from "../../../styles";

export default function Contact({
    setName,
    setAddress,
    setEmail,
    setPhone,
    intl,
}) {
    return (
        <Container>
            <p style={{ fontSize: "3rem", color: "#2A9D8F" }}>
                {intl.formatMessage({ id: "rentContactHeader" })}
            </p>
            <div>
                <label htmlFor="name2">
                    {intl.formatMessage({ id: "rentConfirmationWorkplace" })}
                </label>
                <input
                    type="text"
                    name="name2"
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="address">
                    {intl.formatMessage({ id: "rentConfirmationAddress" })}
                </label>
                <h6>
                    [{intl.formatMessage({ id: "rentConfirmationAddressSub" })}]
                </h6>
                <input
                    type="text"
                    name="address"
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="email2">
                    {intl.formatMessage({ id: "rentConfirmationEmail" })}
                </label>
                <input
                    type="email2"
                    name="email2"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="tel2">
                    {intl.formatMessage({ id: "rentConfirmationPhone" })}
                </label>
                <input
                    type="tel2"
                    name="tel2"
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
            </div>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 2rem;

    p{
       font-family: ${fonts.cormorant}
      font-size: 2rem;
      text-align: center;
      width: 100%;
    }

    div {
        margin: 1rem auto;
        display: flex;
        flex-direction: column;

        h6 {
            color: var(--color-primary);
            text-align: center;
        }

        input {
            padding: 1rem 5rem;
            text-align: center;
        }
    }
`;
