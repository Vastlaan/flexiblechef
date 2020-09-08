import React, { useState } from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { respond, Header } from "../../styles";
import FullScreen from "../FullScreenPhoto";

export default function Gallery() {
    const intl = useIntl();

    const [isFullScreen, setIsFullScreen] = useState(false);
    const [currentImage, setCurrentImage] = useState("");

    const displayFullScreen = (e) => {
        e.persist();
        const link = e.target.src;
        setCurrentImage(link);
        return setIsFullScreen(true);
    };

    return (
        <Container>
            <Header>{intl.formatMessage({ id: "galleryHeader" })}</Header>
            <Pictures>
                <Image>
                    <img
                        src="https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/flexiblechef/20190209_122151_HDR.jpg"
                        alt="food"
                        onClick={displayFullScreen}
                    />
                </Image>
                <Image>
                    <img
                        src="https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/flexiblechef/CAM00355.jpg"
                        alt="food"
                        onClick={displayFullScreen}
                    />
                </Image>
                <Image>
                    <img
                        src="https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/flexiblechef/CAM00388.jpg"
                        alt="food"
                        onClick={displayFullScreen}
                    />
                </Image>
                <Image>
                    <img
                        src="https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/flexiblechef/IMG_20151010_063747958.jpg"
                        alt="food"
                        onClick={displayFullScreen}
                    />
                </Image>
                <Image>
                    <img
                        src="https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/flexiblechef/IMG_20151010_063810433.jpg"
                        alt="food"
                        onClick={displayFullScreen}
                    />
                </Image>
                <Image>
                    <img
                        src="https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/flexiblechef/IMG_20171213_100346582_HDR.jpg"
                        alt="food"
                        onClick={displayFullScreen}
                    />
                </Image>
            </Pictures>
            {isFullScreen ? (
                <FullScreen
                    setIsFullScreen={setIsFullScreen}
                    currentImage={currentImage}
                />
            ) : null}
        </Container>
    );
}

const Container = styled.div`
    padding: 10rem 0rem;
    width: 100%;
    overflow-x: hidden;
`;
const Pictures = styled.div`
    margin: 5rem auto;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;

    ${() => respond("s", "flex-direction: row; justify-content: flex-start;")}
`;
const Image = styled.div`
    margin: 1rem;
    width: 20rem;
    height: 20rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        img {
            transform: scale(1.1);
        }
    }

    img {
        width: 100%;
        min-height: 100%;
        object-fit: cover;
        transition: all 0.9s;
    }
`;
