import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { useIntl } from "react-intl";
import Card from "./card";
import Chef from "../../../img/chef-preparing.png";
import Catering from "../../../img/catering.png";
import Banq from "../../../img/banqueting.png";
import { fonts, respond } from "../../../styles";

export default function Services(props) {
    const themeContext = useContext(ThemeContext);
    const intl = useIntl();

    return (
        <Main>
            <Header>{intl.formatMessage({ id: "servicesHeader" })}</Header>
            <Offert>
                <Card
                    color="#2A9D8F"
                    header={`Restaurants`}
                    services={[
                        intl.formatMessage({ id: "servicesRestaurants1" }),
                        intl.formatMessage({ id: "servicesRestaurants2" }),
                        intl.formatMessage({ id: "servicesRestaurants3" }),
                        intl.formatMessage({ id: "servicesRestaurants4" }),
                        intl.formatMessage({ id: "servicesRestaurants5" }),
                    ]}
                    intl={intl}
                >
                    <img src={Chef} alt="chef preparing dish" />
                </Card>
                <Card
                    color="#E76F51"
                    header={`Catering`}
                    services={[
                        intl.formatMessage({ id: "servicesCatering1" }),
                        intl.formatMessage({ id: "servicesCatering2" }),
                        intl.formatMessage({ id: "servicesCatering3" }),
                        intl.formatMessage({ id: "servicesCatering4" }),
                    ]}
                    intl={intl}
                >
                    <img src={Catering} alt="catering dishes" />
                </Card>
                <Card
                    color={themeContext.primary}
                    header={`Banqueting`}
                    services={[
                        intl.formatMessage({ id: "servicesBanqueting1" }),
                        intl.formatMessage({ id: "servicesBanqueting2" }),
                        intl.formatMessage({ id: "servicesBanqueting3" }),
                        intl.formatMessage({ id: "servicesBanqueting4" }),
                    ]}
                    intl={intl}
                >
                    <img src={Banq} alt="banqueting dishes" />
                </Card>
            </Offert>
        </Main>
    );
}

const Main = styled.section`
    margin: 10rem auto;
`;
const Header = styled.h3`
    font-family: ${fonts.baumans};
    font-size: 3rem;
    color: ${(props) => props.theme.primary};
    text-transform: uppercase;
    text-align: center;
`;
const Offert = styled.div`
    margin: 5rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${() =>
        respond(
            "l",
            "flex-direction: row; justify-content: space-between; align-items: stretch;"
        )}
`;
