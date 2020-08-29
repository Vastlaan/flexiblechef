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
}) {
    return (
        <Container>
            <h6>Confirm your request:</h6>
            <div>
                <p>Workplace:</p>
                <span>{name}</span>
            </div>
            <div>
                <p>Address:</p>
                <span>{address}</span>
            </div>
            <div>
                <p>Date:</p>
                <span>{date}</span>
            </div>
            <div>
                <p>Time:</p>
                <span>{hour}</span>
            </div>
            <div>
                <p>Contact phone:</p>
                <span>{phone}</span>
            </div>
            <div>
                <p>Contact email:</p>
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
