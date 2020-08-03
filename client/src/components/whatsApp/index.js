import React from "react";
import styled from "styled-components";
import { IoLogoWhatsapp } from "react-icons/io";

export default function WhatsApp() {
    return (
        <Container>
            <p>Contact Me!</p>
            <Link href="https://wa.me/31682307051?text=Hoi%21%20Ik%20ben%20ge%C3%AFnteresseerd%20in%20samenwerking%20met%20jou%21%0ANeem%20alsjeblieft%20een%20contact%20met%20mij%20op.%20Groeten%21">
                <IoLogoWhatsapp />
            </Link>
        </Container>
    );
}

const Container = styled.div`
    width: 12rem;
    height: 12rem;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
`;
const Link = styled.a`
    text-decoration: none;
    color: #4fce5d;
    font-size: 10rem;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        transform: scale(1.1);
    }
`;
