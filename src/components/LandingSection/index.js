import React from 'react'
import { LandingContainer, LandingBg, VideoBg, LandingContent, LandingH1, LandingP } from './LandingElements'
import video from '../../videos/video3.mp4';
import { Button } from '../ButtonElement';

const LandingSection = () => {
    return (
        <LandingContainer id='home'>

            <LandingBg>
                <VideoBg autoPlay muted loop src={video} type='/video/mp4' />
            </LandingBg>

            <LandingContent>

                <LandingH1>
                    Highland Histories
                </LandingH1>

                <LandingP>
                    A group of people at IIIT Hyderabad, who are intrested in exploring the histories of Highland regions of India.
                </LandingP>



            </LandingContent>

            

        </LandingContainer>



    )
}

export default LandingSection;