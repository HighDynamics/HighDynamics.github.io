import React from 'react';

const Portfolio = () => {
  const deployedProjects = [
    {
      name: 'effect tracker',
      deployedLink: 'https://highdynamics.github.io/effect-tracker',
      repoLink: 'https://github.com/HighDynamics/effect-tracker',
      image: require('../images/effect-tracker.png'),
      stack: ['React'],
      underDevelopment: false,
    },
    {
      name: 'tech blog',
      deployedLink: 'https://murmuring-badlands-76079.herokuapp.com',
      repoLink: 'https://github.com/HighDynamics/tech-blog',
      image: require('../images/tech-blog.png'),
      stack: ['MySql', 'Express.js', 'Node.js'],
      underDevelopment: false,
    },
    {
      name: 'weather dashboard',
      deployedLink: 'https://highdynamics.github.io/weather-dashboard/',
      repoLink: 'https://github.com/HighDynamics/weather-dashboard',
      image: require('../images/weather-dashboard.png'),
      stack: ['HTML', 'CSS', 'JavaScript'],
      underDevelopment: false,
    },
    {
      name: 'code quiz',
      deployedLink: 'https://highdynamics.github.io/code-quiz/',
      repoLink: 'https://github.com/HighDynamics/code-quiz',
      image: require('../images/code-quiz.png'),
      stack: ['HTML', 'CSS', 'JavaScript'],
      underDevelopment: false,
    },
    {
      name: 'd&d app',
      deployedLink: 'https://highdynamics.github.io/dnd-app',
      repoLink: 'https://github.com/HighDynamics/dnd-app',
      image: require('../images/dnd-app.png'),
      stack: ['React'],
      underDevelopment: true,
    },
    {
      name: 'many dice',
      deployedLink: 'https://highdynamics.github.io/many-dice',
      repoLink: 'https://github.com/HighDynamics/many-dice',
      image: require('../images/many-dice.png'),
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
      {deployedProjects.map((project) => (
        <div className="project-container" key={project.name}>
          <div className="image-container">
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
            <span className="project-name">{project.name}</span>
            <span className="project-stack">{project.stack}</span>
            <a className="deployed-link" href={project.deployedLink}>
              visit
            </a>
            <a className="repo-link" href={project.repoLink}>
              repo
            </a>
            {project.underDevelopment && <span>⚠︎ under development ⚠︎</span>}
          </div>
        </div>
      ))}

      <h2>cli projects</h2>
      {cliProjects.map((project) => (
        <div className="cli-project-container" key={project.name}>
          <h3>{project.name}</h3>
          <p>{project.stack}</p>
          <a className="repo-link" href={project.repoLink}>
            repo
          </a>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
