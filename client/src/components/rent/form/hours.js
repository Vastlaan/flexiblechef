import React, { useEffect } from "react";
import styled from "styled-components";
import { respond, fonts } from "../../../styles";

export default function Hours({ hour, setHour, intl }) {
    useEffect(() => {}, [hour]);
    return (
        <Container>
            {!hour[0] | !hour[1] ? (
                <p style={{ fontSize: "3rem", color: "orangered" }}>
                    {intl.formatMessage({ id: "rentHours" })}
                </p>
            ) : (
                <p style={{ fontSize: "3rem", color: "#2A9D8F" }}>
                    {intl.formatMessage({ id: "rentHoursDone" })} {hour[0]}
                    {" : "}
                    {!hour[1] ? "???" : hour[1]}
                </p>
            )}

            <div>
                <label htmlFor="timeFrom">
                    {intl.formatMessage({ id: "rentHoursFrom" })}
                </label>
                <input
                    type="time"
                    name="timeFrom"
                    id="timeFrom"
                    onChange={(e) => {
                        e.persist();
                        setHour((prevState) => {
                            return [e.target.value, prevState[1]];
                        });
                    }}
                    value={hour[0]}
                    step="900"
                />
            </div>
            <div>
                <label htmlFor="timeTill">
                    {intl.formatMessage({ id: "rentHoursTill" })}
                </label>
                <input
                    type="time"
                    name="timeTill"
                    id="timeTill"
                    onChange={(e) => {
                        e.persist();
                        setHour((prevState) => {
                            return [prevState[0], e.target.value];
                        });
                    }}
                    value={hour[1]}
                    step="900"
                />
            </div>
        </Container>
    );
}

const Container = styled.div`
width: 100%;
    margin: 0 auto;
    font-size: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${() => respond("m", "width: 50%")}

    p {
      font-family: ${fonts.cormorant}
      font-size: 2rem;
      text-align: center;
      width: 100%;
      transition: all .3s;
      animation: changeInfo .3s linear;
    }

    div {
      margin: 1rem;
      padding: 1rem;
      

      label{
          margin-right: 2rem;
      }
     
    }
`;
