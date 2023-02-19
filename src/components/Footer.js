import React from 'react';
import {
  FooterContainer,
  FooterContent,
  FooterLogo,
  FooterLinks,
  FooterLink,
  FooterLinkText,
  FooterText,
} from './styles';
// import logo from './assets/logo.png';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* <FooterLogo src={logo} alt="Logo" /> */}
        <FooterLinks>
          <FooterLink>
            <FooterLinkText href="#">Sobre</FooterLinkText>
          </FooterLink>
          <FooterLink>
            <FooterLinkText href="#">Projetos</FooterLinkText>
          </FooterLink>
          <FooterLink>
            <FooterLinkText href="#">Contato</FooterLinkText>
          </FooterLink>
        </FooterLinks>
        <FooterText>© 2023 Samuel Teixeira. Todos os direitos reservados.</FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;