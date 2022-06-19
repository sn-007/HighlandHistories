import React from 'react'
import {Button} from 'react-scroll';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Topline, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements'


const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, img }) => {
    return (
        <>
            <InfoContainer lightBg = {lightBg} id = {id} >
                <InfoWrapper>
                    <InfoRow imgStart = {imgStart}>
                        <Column1>
                            <TextWrapper>

                                <Topline>{topLine}</Topline>
                                <Heading lightText = {lightText}>{headline}</Heading>
                                <Subtitle darkText = {darkText}>{description}</Subtitle>

                               
                            </TextWrapper>

                        </Column1>

                        <Column2>
                            <ImgWrap>

                                <Img src={img} />
 
                            </ImgWrap>
                            
                        </Column2>

                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>












        </>

    )
}

export default InfoSection