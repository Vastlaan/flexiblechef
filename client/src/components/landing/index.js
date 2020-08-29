import React from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
//components
import Header from "../header";
import Intersection from "../intersection";
import About from "../about";
import Services from "../services";
import Reviews from "../reviews";

import WhatsApp from "../whatsApp";
//icons
import { RiHeartsLine, RiMoneyEuroCircleLine } from "react-icons/ri";
//styles
import { respond } from "../../styles";

export default function Landing() {
    const intl = useIntl();
    return (
        <Main>
            <BackgroundVideo>
                <video preload="auto" loop autoPlay>
                    <source
                        src="https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/headerCompressed.mp4"
                        type="video/mp4"
                    />
                </video>

                <Header />
            </BackgroundVideo>

            <About />

            <Intersection
                header={intl.formatMessage({
                    id: "intersection1Header",
                })}
                text={intl.formatMessage({
                    id: "intersection1Text",
                })}
                price={null}
            >
                <RiHeartsLine />
            </Intersection>

            <Services />

            <Reviews />

            <Intersection
                header={intl.formatMessage({
                    id: "intersection2Header",
                })}
                text={intl.formatMessage({
                    id: "intersection2Text",
                })}
                price={`24.95`}
                priceDetail={intl.formatMessage({
                    id: "intersection2Price",
                })}
            >
                <RiMoneyEuroCircleLine color={"#2A9D8F"} />
            </Intersection>

            <WhatsApp />
        </Main>
    );
}
const Main = styled.div`
    width: 100%;
    overflow-x: hidden;
`;
const BackgroundVideo = styled.div`
    position: relative;
    overflow: hidden;
    height: 75vh;
    width: 100%;

    video {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        object-fit: cover;
        object-position: 50% 50%;
        width: 100%;
        height: 100%;

        ${() => respond("m", `min-height: 100%; width: 100%;`)}
    }
`;
