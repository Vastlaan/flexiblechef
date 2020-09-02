import React from "react";
import styled from "styled-components";
import { respond, fonts } from "../../../styles";

export default function Confirmation({
    date,
    hour,
    name,
    address,
    phone,
    email,
    intl,
}) {
    const countPrice = () => {
        const price = 24.85;

        const [h1, m1] = hour[0].split(":");
        const time1ToMinutes = Number(h1) * 60 + Number(m1);
        const [h2, m2] = hour[1].split(":");
        const time2ToMinutes = Number(h2) * 60 + Number(m2);

        console.log(time1ToMinutes, time2ToMinutes);
        if (time2ToMinutes > time1ToMinutes) {
            return (((time2ToMinutes - time1ToMinutes) * price) / 60).toFixed(
                2
            );
        } else {
            return (((time1ToMinutes - time2ToMinutes) * price) / 60).toFixed(
                2
            );
        }
    };
    return (
        <Container>
            <h6>{intl.formatMessage({ id: "rentConfirmationHeader" })}</h6>
            <div>
                <p>{intl.formatMessage({ id: "rentConfirmationWorkplace" })}</p>
                <span>{name}</span>
            </div>
            <div>
                <p>{intl.formatMessage({ id: "rentConfirmationAddress" })}</p>
                <span>{address}</span>
            </div>
            <div>
                <p>{intl.formatMessage({ id: "rentConfirmationDate" })}</p>
                <span>{date}</span>
            </div>
            <div>
                <p>{intl.formatMessage({ id: "rentConfirmationTime" })}</p>
                <span>
                    {hour[0]} : {hour[1] ? hour[1] : "???"}
                </span>
            </div>
            <div>
                <p>{intl.formatMessage({ id: "rentConfirmationPhone" })}</p>
                <span>{phone}</span>
            </div>
            <div>
                <p>{intl.formatMessage({ id: "rentConfirmationEmail" })}</p>
                <span>{email}</span>
            </div>
            <div
                style={{
                    fontSize: "3rem",
                    backgroundColor: "orangered",
                    padding: "1rem 2rem",
                    display: "inline-block",
                    margin: "0 auto",
                }}
            >
                <p>{intl.formatMessage({ id: "rentConfirmationPrice" })}</p>
                <span>{countPrice()} &euro; excl.BTW</span>
            </div>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  h6{
     font-family: ${fonts.cormorant}
      font-size: 3rem;
      text-align: center;
      width: 100%;
      color: ${(props) => props.theme.tertiary};
  }
  div{
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
       font-family: ${fonts.cormorant}
      font-size: 2rem;
      text-align: center;
      width: 100%;
      color: ${(props) => props.theme.warm};
    }
    span{
      font-family: ${fonts.cormorant}
      font-size: 2rem;
      text-align: center;
      width: 100%;
      color: ${(props) => props.theme.font};
    }
  }
`;
