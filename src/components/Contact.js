import React, { useEffect, useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState(true);

  const { name, email, message } = formState;

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (name.length > 0 && validateEmail(email) && message.length > 0) {
      setError(false);
    } else {
      setError(true);
    }
  });

  function validateEmail(email) {
    const regex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    return regex.test(email);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (error) {
      return;
    }

    setFormState({ name: '', email: '', message: '' });
    setError(true);

    console.log(formState);
  }

  return (
    <section id="contact">
      <h1>contact</h1>
      <p className="under-development">
        ⚠︎ <br />
        note: this form is under development - please use the contact options at
        the bottom of this page <br />
        ⚠︎
      </p>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" onChange={handleChange} value={name} />
          <span className={`validate ${name.length > 0 && 'valid'}`}>
            name is required
          </span>
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
          />
          <span className={`validate ${validateEmail(email) && 'valid'}`}>
            email is required
          </span>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            onChange={handleChange}
            value={message}
          />
          <span className={`validate ${message.length > 0 && 'valid'}`}>
            message is required
          </span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
