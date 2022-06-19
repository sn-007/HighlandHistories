import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink } from './FooterElements'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'
import { SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'

const Footer = () => {
    return (

        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About us</FooterLinkTitle>
                            <FooterLink to='home'>How it works</FooterLink>
                            <FooterLink to='home'>Publications</FooterLink>
                            <FooterLink to='home'>Careers</FooterLink>
                            <FooterLink to='home'>Terms of Service</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle> Videos</FooterLinkTitle>
                            <FooterLink to='home'>Oral History</FooterLink>
                            <FooterLink to='home'>Ambassadors</FooterLink>
                            <FooterLink to='home'>Agency</FooterLink>

                        </FooterLinkItems>

                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Social</FooterLinkTitle>
                            <FooterLink to='home'>Instagram</FooterLink>
                            <FooterLink to='home'>Email</FooterLink>
                            <FooterLink to='home'>Facebook</FooterLink>
                            <FooterLink to='home'>Twitter</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle> Openings</FooterLinkTitle>
                            <FooterLink to='home'> Roles</FooterLink>
                            <FooterLink to='home'>Our Alumni</FooterLink>
                            <FooterLink to='home'>Contact us</FooterLink>
                        </FooterLinkItems>

                    </FooterLinksWrapper>
                </FooterLinksContainer>


                <SocialMedia>
                    <SocialMediaWrap>

                        {/* <SocialLogo>
                            IIITH
                        </SocialLogo> */}

                        <SocialIcons>

                            <SocialIconLink href='/' target='_blank' aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>

                            <SocialIconLink href='/' target='_blank' aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>

                            <SocialIconLink href='/' target='_blank' aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>

                            <SocialIconLink href='/' target='_blank' aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>



                        </SocialIcons>




                        <WebsiteRights>
                            Highland Histories © {new Date().getFullYear()} All rights reserved.
                        </WebsiteRights>




                    </SocialMediaWrap>
                </SocialMedia>


            </FooterWrap>
        </FooterContainer>






    )
}

export default Footer