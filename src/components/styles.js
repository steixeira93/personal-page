import styled from 'styled-components';

/* Estilo do cabeçalho */
export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

export const HeaderLogo = styled.img`
  height: 50px;
  margin-right: 1rem;
`;

export const HeaderNav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const HeaderLink = styled.a`
  margin: 0 1rem;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.2s;

  &:hover {
    color: #0077b5;
  }
`;

export const HeaderButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #0077b5;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-right: 10px

  &:hover {
    background-color: #005b8a;
  }
`;

/* Estilo do Sobre */
export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
`;

export const AboutTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
`;

export const AboutText = styled.p`
  font-size: 0.8rem;
  line-height: 1.4;
  color: #666;
  margin-bottom: 30px;
  max-width: 800px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 1.8rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const AboutImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const AboutImage = styled.img`
  width: 100%;
  max-width: 250px;
  border-radius: 50%;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.3);
`;

export const AboutButton = styled.a`
  display: inline-block;
  padding: 12px 30px;
  background-color: #333;
  color: #fff;
  font-size: 1.6rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 30px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #444;
    transform: translateY(-3px);
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.3);
  }
`;

/* Estilo dos Projetos */

export const ProjectsContainer = styled.section`
  padding: 4rem 0;
  background-color: #f2f2f2;
`;

export const ProjectsTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

export const ProjectCard = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ProjectInfo = styled.div`
  padding: 1rem;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0 0 1rem;
`;

export const ProjectDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

export const ProjectLink = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #0077b5;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: #005b8a;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0;
`;

export const ContactTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: #1a1a1a;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #6e5494;
  }

  svg {
    margin-right: 0.5rem;
  }
`;

export const FooterContainer = styled.footer`
  background-color: #f5f5f5;
  padding: 20px 0;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const FooterLogo = styled.img`
  width: 100px;
  height: 100px;
`;

export const FooterLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const FooterLink = styled.li`
  margin: 0 20px;

  @media screen and (max-width: 768px) {
    margin: 0 10px;
  }
`;

export const FooterLinkText = styled.a`
  text-decoration: none;
  color: #333;

  &:hover {
    color: #0077b5;
  }
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

