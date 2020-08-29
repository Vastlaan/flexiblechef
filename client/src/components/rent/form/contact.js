import React from "react";
import styled from "styled-components";
import { respond, fonts } from "../../../styles";

export default function Contact({ setName, setAddress, setEmail, setPhone }) {
    return (
        <Container>
            <p style={{ fontSize: "3rem", color: "#2A9D8F" }}>Contact data:</p>
            <div>
                <label htmlFor="name">Company Name:</label>
                <input
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="address">Company Address:</label>
                <h6>[post code, street, number]</h6>
                <input
                    type="text"
                    name="address"
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="tel">Phone Number:</label>
                <input
                    type="tel"
                    name="phone"
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
