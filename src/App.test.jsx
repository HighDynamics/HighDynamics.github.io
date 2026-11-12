import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('shows the about me section first', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', { name: 'hello, and welcome' })
  ).toBeInTheDocument();
  expect(screen.getByText('about me', { selector: 'li' })).toHaveClass(
    'nav-active'
  );
});

test('navigation switches between sections', async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getByText('portfolio', { selector: 'li' }));
  expect(
    screen.getByRole('heading', { name: 'portfolio' })
  ).toBeInTheDocument();
  expect(
    screen.queryByRole('heading', { name: 'hello, and welcome' })
  ).not.toBeInTheDocument();

  await user.click(screen.getByText('resume', { selector: 'li' }));
  expect(screen.getByAltText('resume page 1')).toBeInTheDocument();
});

test('the contact form marks each field valid once it is filled in', async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getByText('contact', { selector: 'li' }));
  const required = screen.getByText('name is required');
  expect(required).not.toHaveClass('valid');

  await user.type(document.querySelector('input[name=name]'), 'Ada');
  expect(required).toHaveClass('valid');
});
