import React from 'react';
import { AboutContainer, AboutTitle, AboutText, AboutImageContainer, AboutImage, AboutButton } from './styles';

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutTitle>About Me</AboutTitle>
      <AboutText>
        Hi there! I'm a software developer with experience in web & mobile development. I love coding and I'm passionate about building high-quality, user-friendly and responsive websites.
      </AboutText>
      <AboutImageContainer>
        <AboutImage src="https://media.licdn.com/dms/image/D4D03AQE56Zx4Q96CEA/profile-displayphoto-shrink_800_800/0/1665007584266?e=1682553600&v=beta&t=mlU_vUTdSsCkOFuUgIDdP-jiHow-aDEw8KCPDAID5K8" alt="Profile" />
      </AboutImageContainer>
      <AboutButton href="#Projects">View My Portfolio</AboutButton>
    </AboutContainer>
  );
}

export default About;
