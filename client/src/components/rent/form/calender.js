import React from "react";
import styled from "styled-components";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import dateFormat from "dateformat";
import { respond, fonts } from "../../../styles";

export default function Calender({ setDate, intl }) {
    const handleDayClick = (day, modifiers = {}) => {
        if (modifiers.disabled) {
            return;
        }
        setDate(dateFormat(day, "dd.mm.yyyy"));
    };

    return (
        <Container>
            <WrapperStyles>
                <p style={{ fontSize: "3rem", color: "#2A9D8F" }}>
                    {intl.formatMessage({ id: "rentCalender" })}
                </p>
                <DayPicker
                    disabledDays={[{ before: new Date() }]}
                    onDayClick={handleDayClick}
                    lang="nl"
                />
            </WrapperStyles>
        </Container>
    );
}

const Container = styled.div``;
const WrapperStyles = styled.div`
    display: flex;

    flex-direction: column;
    align-items: center;
     p {
      font-family: ${fonts.cormorant}
      font-size: 2rem;
      text-align: center;
      width: 100%;
    }
    .DayPicker {
        font-size: 2rem;
    }
`;
