import React, { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const { name, email, message } = formState;

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  function validateEmail(email) {
    const regex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    return regex.test(email);
  }

  function handleBlur(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage('');
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section>
      <h1>Contact me</h1>
      <span id="under-development">
        ⚠︎ note: this form is under development - please use contact info in the
        footer ⚠︎
      </span>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            defaultValue={name}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            defaultValue={email}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            onChange={handleChange}
            onBlur={handleBlur}
            defaultValue={message}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
