import React from "react";
import styled from "styled-components";
import { respond, Button } from "../styles";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Confirmation({ setIsFullScreen, currentImage }) {
    return (
        <FullScreen>
            <CustomButton onClick={() => setIsFullScreen(false)}>
                <AiOutlineCloseCircle />
            </CustomButton>
            <div>
                <img src={currentImage} alt="food" />
            </div>
        </FullScreen>
    );
}
const FullScreen = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        margin: 2rem auto;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 90%;

            ${() => respond("m", "width: 50%;")}
        }
    }
`;

const CustomButton = styled(Button)`
    position: absolute;
    top: 8rem;
    right: 2rem;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0;

    svg {
        color: snow;
        font-size: 5rem;
    }
`;
