import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useIntl } from "react-intl";
//components
import Calender from "./calender";
import Hours from "./hours";
import Contact from "./contact";
import Confirmation from "./confirmation";
import Buttons from "./buttons";
import Conf from "./requestConfirmation";

export default function Form() {
    const intl = useIntl();
    let history = useHistory();

    const [warning, setWarning] = useState(null);
    const [confirmationRequest, setConfirmationRequest] = useState(false);
    const [step, setStep] = useState(1); // max 4 steps
    const [date, setDate] = useState("");
    const [hour, setHour] = useState(["", ""]);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [price, setPrice] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const reserve = (e) => {
        e.preventDefault();
        if (!isChecked) {
            return setWarning(intl.formatMessage({ id: "rentWarningCheck" }));
        }
        const data = {
            name,
            email,
            address,
            phone,
            date,
            start: hour[0],
            end: hour[1],
            price,
        };
        fetch("/submitChefRequest", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if ((data = "Succes")) {
                    console.log("1");
                    setConfirmationRequest(true);
                } else {
                    console.log("error");
                }
            })
            .catch((e) => {
                console.error(e);
            });
    };
    const next = (e) => {
        e.preventDefault();
        if (step === 1 && !date) {
            return setWarning(intl.formatMessage({ id: "rentCalender" }));
        }
        if (step === 2 && !hour | !hour[0] | !hour[1]) {
            return setWarning(intl.formatMessage({ id: "rentHours" }));
        }
        if (step === 3 && !name | !address | !email | !phone) {
            return setWarning(
                intl.formatMessage({ id: "rentConfirmationWarning" })
            );
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
            {confirmationRequest ? (
                <Conf
                    name={name}
                    address={address}
                    email={email}
                    phone={phone}
                    hour={hour}
                    date={date}
                    price={price}
                    setConfirmationRequest={setConfirmationRequest}
                    intl={intl}
                    history={history}
                />
            ) : null}
            {step === 1 ? (
                <Calender date={date} setDate={setDate} intl={intl} />
            ) : step === 2 ? (
                <Hours hour={hour} setHour={setHour} intl={intl} />
            ) : step === 3 ? (
                <Contact
                    address={address}
                    name={name}
                    setWarning={setWarning}
                    email={email}
                    phone={phone}
                    setName={setName}
                    setAddress={setAddress}
                    setEmail={setEmail}
                    setPhone={setPhone}
                    intl={intl}
                />
            ) : (
                <Confirmation
                    date={date}
                    hour={hour}
                    name={name}
                    address={address}
                    email={email}
                    phone={phone}
                    intl={intl}
                    price={price}
                    setPrice={setPrice}
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
                intl={intl}
                setIsChecked={setIsChecked}
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
        padding: 1rem;
    }
`;
