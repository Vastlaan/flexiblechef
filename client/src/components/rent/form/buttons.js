import React from "react";
import styled from "styled-components";
import { respond } from "../../../styles";

export default function Buttonss({ step, next, previous, intl, setIsChecked }) {
    return (
        <Buttons>
            {step === 4 ? (
                <Checkbox>
                    <input
                        type="checkbox"
                        onChange={() => setIsChecked((prevState) => !prevState)}
                    />
                    <p>
                        Ik bevestig dat ik de{" "}
                        <a href="/algemene-voorwaarden">Algemene Voorwaarden</a>{" "}
                        heb gelezen en ik ga ermee akkoord.
                    </p>
                </Checkbox>
            ) : null}
            {step > 1 ? (
                <Previous onClick={previous}>
                    {intl.formatMessage({ id: "rentButtonPrev" })}
                </Previous>
            ) : null}
            {step === 4 ? (
                <Submit type="submit">
                    {intl.formatMessage({ id: "rentButtonSubmit" })}
                </Submit>
            ) : (
                <Next onClick={next}>
                    {intl.formatMessage({ id: "rentButtonNext" })}
                </Next>
            )}
        </Buttons>
    );
}
const Buttons = styled.div`
    width: 90%;
    margin: 1rem auto;

    ${() => respond("m", "width: 70%")}
`;
const Button = styled.button`
    display: block;
    width: max-content;
    text-decoration: none;
    text-transform: capitalize;
    padding: 1rem 3rem;
    margin: 2rem auto;
    font-size: 2rem;
    transition: all 0.3s;
    cursor: pointer;
    color: ${(props) => props.theme.bg};
    border: 1px solid transparent;
    background-color: ${(props) => props.theme.primary};

    &:hover {
        background-color: ${(props) => props.theme.tertiary};
        color: ${(props) => props.theme.bg};
    }
    &:focus,
    :active {
        outline: none;
    }
`;
const Previous = styled(Button)`
    float: left;
`;
const Next = styled(Button)`
    float: right;
`;
const Submit = styled(Button)`
    float: right;
    background-color: ${(props) => props.theme.tertiary};

    &:hover {
        background-color: ${(props) => props.theme.tertiary};
        color: ${(props) => props.theme.bg};
    }
`;
const Checkbox = styled.div`
    margin: 2rem auto;
    display: flex;
    justify-content: center;

    input {
        margin-right: 1rem;
    }
`;
