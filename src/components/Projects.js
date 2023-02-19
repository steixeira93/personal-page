import React from 'react';
import {
  ProjectsContainer,
  ProjectsTitle,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectInfo,
  ProjectTitle,
  ProjectDescription,
  ProjectLink,
} from './styles';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Projeto 1',
      description: 'Descrição do projeto 1',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      link: 'https://github.com',
    },
    {
      id: 2,
      title: 'Projeto 2',
      description: 'Descrição do projeto 2',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80',
      link: 'https://github.com',
    },
    {
      id: 3,
      title: 'Projeto 3',
      description: 'Descrição do projeto 3',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      link: 'https://github.com',
    },
  ];

  return (
    <ProjectsContainer>
      <ProjectsTitle>Projetos</ProjectsTitle>
      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectLink href={project.link} target="_blank">
                Ver projeto
              </ProjectLink>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;

