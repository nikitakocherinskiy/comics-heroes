import { MemoryRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Form from './Form';
render(
  <MemoryRouter>
    <Form />
  </MemoryRouter>
);
describe('Form', () => {
  it('Renders Form', () => {
    expect(screen.getByLabelText('Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Surname:')).toBeInTheDocument();
    expect(screen.getByLabelText('Birthday:')).toBeInTheDocument();
    expect(screen.getByLabelText('Country:')).toBeInTheDocument();
    expect(screen.getByLabelText('City:')).toBeInTheDocument();
    expect(screen.getByLabelText('Consent:')).toBeInTheDocument();
    expect(screen.getByLabelText('Extra presents:')).toBeInTheDocument();
    expect(screen.getByLabelText('Male')).toBeInTheDocument();
    expect(screen.getByLabelText('Female')).toBeInTheDocument();
    expect(screen.getByLabelText('Profile picture:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('displays error message if invalid values are entered', async () => {
    render(<Form />);
    const nameInput = screen.getByLabelText('Name:');
    fireEvent.change(nameInput, { target: { value: '123' } });

    const submitButton = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitButton);

    expect(await screen.findByText('Error!')).toBeInTheDocument();
  });

  it('reset form', () => {
    render(<Form />);

    const nameInput = screen.getByLabelText('Name:');
    const surnameInput = screen.getByLabelText('Surname:');
    const birthdayInput = screen.getByLabelText('Birthday:');
    const countrySelect = screen.getByLabelText('Country:');
    const cityInput = screen.getByLabelText('City:');
    const consentCheckbox = screen.getByLabelText('Consent:');
    const presentsCheckbox = screen.getByLabelText('Extra presents:');
    const maleRadio = screen.getByLabelText('Male');
    const profilePicInput = screen.getByLabelText('Profile picture:');
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    const form = screen.getByRole('form');

    fireEvent.change(nameInput, { target: { value: 'Nikita' } });
    fireEvent.change(surnameInput, { target: { value: 'Koch' } });
    fireEvent.change(birthdayInput, { target: { value: '2002-04-04' } });
    fireEvent.change(countrySelect, { target: { value: 'USA' } });
    fireEvent.change(cityInput, { target: { value: 'New York' } });
    fireEvent.click(consentCheckbox);
    fireEvent.click(presentsCheckbox);
    fireEvent.click(maleRadio);
    fireEvent.change(profilePicInput, { target: {} });
    fireEvent.click(submitButton);

    expect(nameInput).toHaveValue('Nikita');
    expect(surnameInput).toHaveValue('Koch');
    expect(birthdayInput).toHaveValue('2002-04-04');
    expect(countrySelect).toHaveValue('USA');
    expect(cityInput).toHaveValue('New York');
  });
});
