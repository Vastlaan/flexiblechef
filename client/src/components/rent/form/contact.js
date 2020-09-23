import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { respond, fonts } from "../../../styles";

export default function Contact({
    name,
    setWarning,
    email,
    phone,
    address,
    setName,
    setAddress,
    setEmail,
    setPhone,
    intl,
}) {
    const [postCode, setPostCode] = useState("");
    const [streetNumber, setStreetNumber] = useState("");

    useEffect(() => {
        async function getFullAddress(p, n) {
            try {
                const response = await fetch(
                    `https://geodata.nationaalgeoregister.nl/locatieserver/free?fq=postcode:${p}&fq=huisnummer:${n}`
                );
                const data = await response.json();
                console.log(data.response.docs);
                if (data.response.docs.length > 0) {
                    const address = data.response.docs[0].weergavenaam;
                    console.log(address);
                    setWarning("");
                    return setAddress(address);
                } else {
                    setAddress("");
                    return setWarning(
                        intl.formatMessage({ id: "rentConfirmationWarning2" })
                    );
                }
            } catch (e) {
                console.log(e);
            }
        }
        if (postCode.length > 5 && streetNumber.length > 0) {
            getFullAddress(postCode, streetNumber);
        }
    }, [postCode, streetNumber]);

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
                    value={name}
                />
            </div>
            <div>
                <label htmlFor="postcode">
                    {intl.formatMessage({ id: "rentConfirmationAddressPost" })}
                </label>
                <h6>
                    [
                    {intl.formatMessage({
                        id: "rentConfirmationAddressPostSub",
                    })}
                    ]
                </h6>
                <input
                    type="text"
                    name="postcode"
                    onChange={(e) => setPostCode(e.target.value.toUpperCase())}
                    required
                    value={postCode}
                />
            </div>
            <div>
                <label htmlFor="streetnumber">
                    {intl.formatMessage({
                        id: "rentConfirmationAddressNumber",
                    })}
                </label>
                <h6>
                    [
                    {intl.formatMessage({
                        id: "rentConfirmationAddressNumberSub",
                    })}
                    ]
                </h6>
                <input
                    type="text"
                    name="streetnumber"
                    onChange={(e) => setStreetNumber(e.target.value)}
                    required
                    value={streetNumber}
                />
            </div>
            <div>
                <p>
                    {address ? (
                        <p>
                            {intl.formatMessage({
                                id: "rentConfirmationAddress",
                            })}{" "}
                            {address}
                        </p>
                    ) : null}
                </p>
            </div>
            <div>
                <label htmlFor="email2">
                    {intl.formatMessage({ id: "rentConfirmationEmail" })}
                </label>
                <input
                    type="email"
                    name="email2"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    value={email}
                />
            </div>
            <div>
                <label htmlFor="tel2">
                    {intl.formatMessage({ id: "rentConfirmationPhone" })}
                </label>
                <input
                    type="tel"
                    name="tel2"
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    value={phone}
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
