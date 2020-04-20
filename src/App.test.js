import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/carrefours">Carrefours Transmart</Dropdown.Item>
    <Dropdown.Item href="/farmers">AFarmers Market</Dropdown.Item>
    <Dropdown.Item href="/ranchos">Ranch Market</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
