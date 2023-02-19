import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { ContactContainer, ContactTitle, ContactLink } from './styles';

const Contact = () => {
  return (
    <ContactContainer>
      <ContactTitle>Contact Me</ContactTitle>
      <ContactLink href="mailto:seuemail@mail.com">
        <FaEnvelope />
        contact@samuel.dev
      </ContactLink>
      <ContactLink href="https://www.linkedin.com/in/seulinkedin" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
        LinkedIn
      </ContactLink>
      <ContactLink href="https://github.com/seugithub" target="_blank" rel="noopener noreferrer">
        <FaGithub />
        GitHub
      </ContactLink>
    </ContactContainer>
  );
};

export default Contact;

