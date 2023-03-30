import { MemoryRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import CardForm from './CardForm';
import { IFormData } from '../Form/FormTypes';

describe('CardForm', () => {
  const id = 14124;
  // const fileList =
  const data: IFormData = {
    name: 'Nikita',
    surname: 'Koch',
    birthday: '04-04-2002',
    country: 'Russia',
    city: 'Moscow',
    consent: true,
    present: false,
    gender: 'male',
    profilePic: '',
  };
  it('Renders CardItem', () => {
    const { getByText } = render(
      <MemoryRouter>
        <CardForm key={id} data={data} />
      </MemoryRouter>
    );

    expect(getByText(`Name: ${data.name}`)).toBeInTheDocument();
    expect(getByText(`Surname: ${data.surname}`)).toBeInTheDocument();
    expect(getByText(`Birthday: ${data.birthday}`)).toBeInTheDocument();
    expect(getByText(`Country: ${data.country}`)).toBeInTheDocument();
    expect(getByText(`State: ${data.city}`)).toBeInTheDocument();
    expect(getByText(`Gender: ${data.gender}`)).toBeInTheDocument();
    expect(getByText(`Extra presents: No`)).toBeInTheDocument();
    expect(getByText(`Profile picture:No picture`)).toBeInTheDocument();
  });
});
