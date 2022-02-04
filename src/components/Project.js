import React from 'react';

const Project = (props) => {
  const { name, deployedLink, repoLink, image, stack, underDevelopment } =
    props;

  return (
    <div className="project-container">
      <div className="image-container">
        <img src={image} alt={name} className="project-image" />
        <div className="project-details">
          <div className="project-text">
            <span className="project-name">{name}</span>
            <br />
            <div className="project-stack">
              {stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          {underDevelopment && (
            <span className="under-development">⚠︎ under development ⚠︎</span>
          )}
          <div className="project-links">
            <a
              className="deployed-link"
              href={deployedLink}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
            <a
              className="repo-link"
              href={repoLink}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
