import * as React from 'react';
import { IFormData, IState } from './FormTypes';
import CardForm from '../CardForm/CardForm';

type FormProps = {};

class Form extends React.Component<FormProps, IState> {
  constructor(props: FormProps) {
    super(props);
    this.state = {
      formData: {
        name: '',
        surname: '',
        birthday: '',
        country: '',
        state: '',
        consent: false,
        present: false,
        gender: '',
        profilePic: null,
      },
      submittedData: [],
      errors: {},
      isFormSubmitted: false,
    };
  }

  handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = event.target;
    const value =
      target.type === 'checkbox' ? (event.target as HTMLInputElement).checked : target.value;
    const name = target.name;

    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: '',
      },
    }));
  };

  handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    if (target.files && target.files.length > 0) {
      const file = target.files[0];
      this.setState((prevState) => ({
        formData: {
          ...prevState.formData,
          profilePic: file,
        },
      }));
    }
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errors = this.validateForm();
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }

    this.setState((prevState) => ({
      submittedData: [...prevState.submittedData, prevState.formData],
      formData: {
        name: '',
        surname: '',
        birthday: '',
        country: '',
        state: '',
        consent: false,
        present: false,
        gender: '',
        profilePic: null,
      },
      isFormSubmitted: true,
    }));

    setTimeout(() => {
      this.setState({ isFormSubmitted: false });
    }, 3000);
  };

  validateForm = (): Partial<Record<keyof IFormData, string>> => {
    const formData = this.state.formData;
    const errors: Partial<Record<keyof IFormData, string>> = {};

    if (!formData.name) {
      errors.name = 'Please enter your name';
    } else if (!/^[A-Z]/.test(formData.name)) {
      errors.name = 'Name should start with an uppercased letter';
    }

    if (!formData.surname) {
      errors.surname = 'Please enter your surname';
    } else if (!/^[A-Z]/.test(formData.surname)) {
      errors.surname = 'Surname should start with an uppercased letter';
    }

    if (!formData.birthday) {
      errors.birthday = 'Please enter your birthday';
    }

    if (!formData.country) {
      errors.country = 'Please select your country';
    }

    if (!formData.state) {
      errors.state = 'Please select your state';
    }

    if (!formData.consent) {
      errors.consent = 'Please give your consent';
    }

    return errors;
  };
  render() {
    const { formData, submittedData, errors, isFormSubmitted } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={this.handleInputChange}
            />
            {errors.name && <span>{errors.name}</span>}
          </label>
          <label>
            Surname:
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={this.handleInputChange}
            />
            {errors.surname && <span>{errors.surname}</span>}
          </label>
          <label>
            Birthday:
            <input
              type="date"
              name="birthday"
              value={formData.birthday}
              onChange={this.handleInputChange}
            />
            {errors.birthday && <span>{errors.birthday}</span>}
          </label>
          <label>
            Country:
            <select name="country" value={formData.country} onChange={this.handleInputChange}>
              <option value="">Select country</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="Mexico">Mexico</option>
            </select>
            {errors.country && <span>{errors.country}</span>}
          </label>
          <label>
            State:
            <select name="state" value={formData.state} onChange={this.handleInputChange}>
              <option value="">Select state</option>
              <option value="New York">New York</option>
              <option value="California">California</option>
              <option value="Texas">Texas</option>
            </select>
            {errors.state && <span>{errors.state}</span>}
          </label>
          <label>
            Consent:
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={this.handleInputChange}
            />
            {errors.consent && <span>{errors.consent}</span>}
          </label>
          <label>
            Extra presents:
            <input
              type="checkbox"
              name="present"
              checked={formData.present}
              onChange={this.handleInputChange}
            />
          </label>
          <fieldset>
            <legend>Gender:</legend>
            <label>
              Male
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Female
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={this.handleInputChange}
              />
            </label>
          </fieldset>
          <label>
            Profile picture:
            <input type="file" name="picture" onChange={this.handleFileInputChange} />
            {errors.profilePic && <span>{errors.profilePic}</span>}
          </label>
          <button type="submit">Submit</button>
        </form>
        {isFormSubmitted && (
          <div>
            <p>Thank you for submitting the form!</p>
          </div>
        )}
        <div>
          {submittedData.map((data, index) => (
            <CardForm key={index} data={data} />
          ))}
        </div>
      </div>
    );
  }
}

export default Form;
