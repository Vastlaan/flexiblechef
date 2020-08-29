import React, { useEffect } from "react";
import styled from "styled-components";
import { respond, fonts } from "../../../styles";

export default function Hours({ hour, setHour }) {
    const times = [
        "06:00",
        "06:30",
        "07:00",
        "07:30",
        "08:00",
        "08:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
        "17:00",
        "17:30",
        "18:00",
        "18:30",
        "19:00",
        "19:30",
        "20:00",
        "20:30",
        "21:00",
        "21:30",
        "22:00",
        "22:30",
        "23:00",
        "23:30",
    ];
    console.log(hour);
    return (
        <Container>
            {hour ? (
                <p style={{ fontSize: "3rem", color: "#2A9D8F" }}>
                    You have selected: {hour}{" "}
                </p>
            ) : (
                <p style={{ fontSize: "3rem", color: "#2A9D8F" }}>
                    Please choose an hour
                </p>
            )}
            {times.map((time, i) => {
                return (
                    <div
                        key={`${i}. ${time}`}
                        style={
                            hour === time
                                ? { backgroundColor: "#2A9D8F" }
                                : null
                        }
                        onClick={() => setHour(time)}
                    >
                        {time}
                    </div>
                );
            })}
        </Container>
    );
}

const Container = styled.div`
width: 100%;
    margin: 0 auto;
    font-size: 2.5rem;
    display: flex;
    flex-wrap: wrap;

    ${() => respond("m", "width: 50%")}

    p {
      font-family: ${fonts.cormorant}
      font-size: 2rem;
      text-align: center;
      width: 100%;
    }

    div {
      margin: 1rem;
      padding: 1rem;
      cursor: pointer;
      transition: all .3s;

      &:hover {
        background-color: ${(props) => props.theme.tertiary};
      }
    }
`;
