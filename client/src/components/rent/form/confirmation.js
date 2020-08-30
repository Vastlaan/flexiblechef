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
                <span>{hour}</span>
            </div>
            <div>
                <p>{intl.formatMessage({ id: "rentConfirmationPhone" })}</p>
                <span>{phone}</span>
            </div>
            <div>
                <p>{intl.formatMessage({ id: "rentConfirmationEmail" })}</p>
                <span>{email}</span>
            </div>
        </Container>
    );
}

const Container = styled.div`
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
