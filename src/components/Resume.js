import React from 'react';

const resumeLink =
  'https://docs.google.com/document/d/1-TVB-4PuC9y46DB065aTZxZhYFFlNFSZbTxTf6Zz1-Y/export?format=pdf';

const Resume = () => {
  return (
    <>
      <a href={resumeLink} target="_blank" rel="noreferrer">
        download resume
      </a>
      <div className="resume-container">
        <img
          className="resume"
          src={require('../assets/images/resume-pg1.png')}
          alt="resume page 1"
        />
        <img
          className="resume"
          src={require('../assets/images/resume-pg2.png')}
          alt="resume page 2"
        />
      </div>
    </>
  );
};

export default Resume;
