import React from "react";
import styled from "styled-components";

export default function ButtonMenu({ isOpen, setIsOpen }) {
    //this button takes its state as a props, uncomment code below if it does't
    //const [isOpen, setIsOpen] = useState(false);
    return (
        <Button
            isOpen={isOpen}
            onClick={() => setIsOpen((prevState) => !prevState)}
        >
            <div></div>
        </Button>
    );
}

const Button = styled.button`
    width: 3rem;
    height: 3rem;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:active,
    :focus {
        outline: none;
    }

    div {
        width: 3rem;
        height: 2px;
        background-color: ${(props) => props.theme.primary};
        position: relative;
        transition: all 0.3s;
        transform: ${(props) => (props.isOpen ? "rotate(135deg)" : "")};
        pointer-events: none;

        &:after {
            width: 3rem;
            height: 2px;
            content: "";
            display: block;
            position: absolute;
            background-color: ${(props) => props.theme.primary};
            top: -1rem;
            left: 0;
            transition: all 0.3s;
            transform: ${(props) =>
                props.isOpen ? "translate(0%,1rem) rotate(90deg)" : ""};
        }
        &:before {
            width: 3rem;
            height: 2px;
            content: "";
            display: ${(props) => (props.isOpen ? "none" : "block")};
            position: absolute;
            background-color: ${(props) => props.theme.primary};
            top: 1rem;
            left: 0;
        }
    }
`;
