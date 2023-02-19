import React from 'react';
import { HeaderContainer, HeaderNav, HeaderLink, HeaderButton } from './styles';
// import logo from './logo.svg';

function Header() {
  return (
    <HeaderContainer>
      {/* <HeaderLogo src={logo} alt="Logo" /> */}
      <HeaderNav>
        <HeaderLink href="#about">Sobre</HeaderLink>
        <HeaderLink href="#projects">Projetos</HeaderLink>
        <HeaderLink href="#contact">Contato</HeaderLink>
      </HeaderNav>
      <HeaderButton>Contratar</HeaderButton>
    </HeaderContainer>
  );
}

export default Header;