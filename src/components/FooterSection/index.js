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
                            <FooterLink to='/'>How it works</FooterLink>
                            <FooterLink to='/'>Publications</FooterLink>
                            <FooterLink to='/'>Careers</FooterLink>
                            <FooterLink to='/'>Terms of Service</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle> Videos</FooterLinkTitle>
                            <FooterLink to='/'>Oral History</FooterLink>
                            <FooterLink to='/'>Ambassadors</FooterLink>
                            <FooterLink to='/'>Agency</FooterLink>

                        </FooterLinkItems>

                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Social</FooterLinkTitle>
                            <FooterLink to='/'>Instagram</FooterLink>
                            <FooterLink to='/'>Email</FooterLink>
                            <FooterLink to='/'>Facebook</FooterLink>
                            <FooterLink to='/'>Twitter</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle> Openings</FooterLinkTitle>
                            <FooterLink to='/'> Roles</FooterLink>
                            <FooterLink to='/'>Our Alumni</FooterLink>
                            <FooterLink to='/'>Contact us</FooterLink>
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