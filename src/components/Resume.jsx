import React from 'react';
import resumePage1 from '../assets/images/resume-pg1.png';
import resumePage2 from '../assets/images/resume-pg2.png';

const resumeLink =
  'https://docs.google.com/document/d/1-TVB-4PuC9y46DB065aTZxZhYFFlNFSZbTxTf6Zz1-Y/export?format=pdf';

const Resume = () => {
  return (
    <section id="resume">
      <h1>resume</h1>
      <a href={resumeLink} target="_blank" rel="noreferrer">
        download resume
      </a>
      <div className="resume-container">
        <img
          className="resume"
          src={resumePage1}
          alt="resume page 1"
        />
        <img
          className="resume"
          src={resumePage2}
          alt="resume page 2"
        />
      </div>
    </section>
  );
};

export default Resume;
