import React from 'react';

const CliProject = ({ name, repoLink, stack, numOfProjects, idx }) => {
  return (
    <div className="cli-project-container">
      <a className="repo-link" href={repoLink} target="_blank" rel="noreferrer">
        {name}
      </a>

      <div className="project-stack">
        {stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      {numOfProjects - 1 === idx ? '' : <hr />}
    </div>
  );
};

export default CliProject;
