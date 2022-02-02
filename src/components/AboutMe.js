import React from 'react';

const AboutMe = () => {
  return (
    <section id="about-me">
      <section id="hero">
        <h1>hello, and welcome</h1>
        <p>thanks for stopping by</p>
      </section>
      <section>
        <div className="image-container">
          <img src={require('../images/headshot.jpeg')} alt="headshot" />
        </div>
        <div className="text-container">
          <h2>about me</h2>
          <p>
            I started coding in 2019 and have taken great joy in putting pieces
            together and seeing them work. I'm currently enrolled in a coding
            bootcamp with Kansas University where I am learning to be a
            full-stack MERN developer.
          </p>
        </div>
      </section>
    </section>
  );
};

export default AboutMe;
