import React from 'react';
import Project from './Project';
import CliProject from './CliProject';
import effectTrackerImage from '../assets/images/effect-tracker.png';
import techBlogImage from '../assets/images/tech-blog.png';
import weatherDashboardImage from '../assets/images/weather-dashboard.png';
import codeQuizImage from '../assets/images/code-quiz.png';
import dndAppImage from '../assets/images/dnd-app.png';
import manyDiceImage from '../assets/images/many-dice.png';

const Portfolio = () => {
  const deployedProjects = [
    {
      name: 'effect tracker',
      deployedLink: 'https://highdynamics.github.io/effect-tracker',
      repoLink: 'https://github.com/HighDynamics/effect-tracker',
      image: effectTrackerImage,
      stack: ['React'],
      underDevelopment: false,
    },
    {
      name: 'tech blog',
      deployedLink: 'https://murmuring-badlands-76079.herokuapp.com',
      repoLink: 'https://github.com/HighDynamics/tech-blog',
      image: techBlogImage,
      stack: ['MySql', 'Express.js', 'Node.js'],
      underDevelopment: false,
    },
    {
      name: 'weather dashboard',
      deployedLink: 'https://highdynamics.github.io/weather-dashboard/',
      repoLink: 'https://github.com/HighDynamics/weather-dashboard',
      image: weatherDashboardImage,
      stack: ['HTML', 'CSS', 'JavaScript'],
      underDevelopment: false,
    },
    {
      name: 'code quiz',
      deployedLink: 'https://highdynamics.github.io/code-quiz/',
      repoLink: 'https://github.com/HighDynamics/code-quiz',
      image: codeQuizImage,
      stack: ['HTML', 'CSS', 'JavaScript'],
      underDevelopment: false,
    },
    {
      name: 'd&d app',
      deployedLink: 'https://highdynamics.github.io/dnd-app',
      repoLink: 'https://github.com/HighDynamics/dnd-app',
      image: dndAppImage,
      stack: ['React'],
      underDevelopment: true,
    },
    {
      name: 'many dice',
      deployedLink: 'https://highdynamics.github.io/many-dice',
      repoLink: 'https://github.com/HighDynamics/many-dice',
      image: manyDiceImage,
      stack: ['React'],
      underDevelopment: true,
    },
  ];

  const cliProjects = [
    {
      name: 'social network api',
      repoLink: 'https://github.com/HighDynamics/social-network-api',
      stack: ['MongoDB', 'Express.js', 'Node.js'],
    },
    {
      name: 'employee tracker',
      repoLink: 'https://github.com/HighDynamics/employee-tracker',
      stack: ['MySql', 'Node.js'],
    },
    {
      name: 'team profile generator',
      repoLink: 'https://github.com/HighDynamics/team-profile-generator',
      stack: ['Node.js'],
    },
  ];

  return (
    <section id="portfolio">
      <h1>portfolio</h1>
      <div className="projects-collection">
        {deployedProjects.map((project) => (
          <Project
            name={project.name}
            key={project.name}
            deployedLink={project.deployedLink}
            repoLink={project.repoLink}
            image={project.image}
            stack={project.stack}
            underDevelopment={project.underDevelopment}
          />
        ))}
      </div>

      <hr />
      <h2>cli projects</h2>
      {cliProjects.map((project, i) => (
        <CliProject
          name={project.name}
          key={project.name}
          repoLink={project.repoLink}
          stack={project.stack}
          numOfProjects={cliProjects.length}
          idx={i}
        />
      ))}
    </section>
  );
};

export default Portfolio;
