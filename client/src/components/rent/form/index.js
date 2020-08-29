import React, { useState } from "react";
import styled from "styled-components";
import { respond, fonts } from "../../../styles";
//components
import Calender from "./calender";
import Hours from "./hours";
import Contact from "./contact";
import Confirmation from "./confirmation";
import Buttons from "./buttons";

export default function Form() {
    const [warning, setWarning] = useState("");
    const [step, setStep] = useState(1); // max 4 steps
    const [date, setDate] = useState(null);
    const [hour, setHour] = useState(null);
    const [name, setName] = useState(null);
    const [address, setAddress] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);

    const reserve = (e) => {
        e.preventDefault();
        console.log(date, hour, name, address, phone, email);
    };
    const next = (e) => {
        e.preventDefault();
        if (step === 1 && !date) {
            return setWarning("Please select the date");
        }
        if (step === 2 && !hour) {
            return setWarning("Please select the hour");
        }
        if (step === 3 && !name | !address | !email | !phone) {
            return setWarning("Please fill all required fields!");
        }
        setWarning("");
        return setStep((prevState) => {
            return prevState + 1;
        });
    };
    const previous = (e) => {
        e.preventDefault();
        return setStep((prevState) => {
            return prevState - 1;
        });
    };
    return (
        <Container onSubmit={reserve}>
            {step === 1 ? (
                <Calender setDate={setDate} next={next} />
            ) : step === 2 ? (
                <Hours hour={hour} setHour={setHour} />
            ) : step === 3 ? (
                <Contact
                    setName={setName}
                    setAddress={setAddress}
                    setEmail={setEmail}
                    setPhone={setPhone}
                />
            ) : (
                <Confirmation
                    date={date}
                    hour={hour}
                    name={name}
                    address={address}
                    email={email}
                    phone={phone}
                />
            )}
            {warning ? (
                <Warning>
                    <p>{warning}</p>
                </Warning>
            ) : null}
            <Buttons
                step={step}
                next={next}
                previous={previous}
                reserve={reserve}
            />
        </Container>
    );
}
const Container = styled.form`
    margin: 5rem auto;
`;
const Warning = styled.div`
    margin: 1rem auto;
    p {
        text-align: center;
        color: red;
        font-size: 1.8rem;
    }
`;
