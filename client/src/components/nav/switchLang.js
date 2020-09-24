import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../../store";
import EnFlag from "../../img/England.png";
import NlFlag from "../../img/Netherlands.png";

export default function SwitchLang() {
    const { store, dispatch } = useContext(Context);

    return (
        <Container>
            {store.lang === "en" ? (
                <button
                    onClick={() => {
                        dispatch({
                            type: "changeLang",
                            payload: "nl",
                        });
                    }}
                >
                    <Flag src={NlFlag} alt="dutch flag" />
                </button>
            ) : (
                <button
                    onClick={() =>
                        dispatch({
                            type: "changeLang",
                            payload: "en",
                        })
                    }
                >
                    <Flag src={EnFlag} alt="english flag" />
                </button>
            )}
        </Container>
    );
}

const Container = styled.div`
    display: flex;

    button {
        background-color: transparent;
        border: none;
        margin-right: 1rem;
        color: ${(props) => props.theme.bg};
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
            transform: scale(1.2);
        }

        &:focus,
        :active {
            outline: none;
        }

        svg {
            font-size: 3.5rem;
            color: ${(props) => props.theme.primary};
        }
    }
`;

const Flag = styled.img`
    width: 3rem;
    height: 3rem;
`;
