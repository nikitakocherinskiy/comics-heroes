import { Component } from 'react';
import { IFormData } from '../Form/FormTypes';

interface ICardProps {
  data: IFormData;
}

class CardForm extends Component<ICardProps> {
  render() {
    const { data } = this.props;
    return (
      <div>
        <p>Name: {data.name}</p>
        <p>Surname: {data.surname}</p>
        <p>Birthday: {data.birthday}</p>
        <p>Country: {data.country}</p>
        <p>State: {data.state}</p>
        <p>Gender: {data.gender}</p>
        <p>Extra presents: {data.present ? 'Yes' : 'No'}</p>
        <p>
          Profile picture:{' '}
          {data.profilePic ? <img src={URL.createObjectURL(data.profilePic)} /> : 'No picture'}
        </p>
      </div>
    );
  }
}

export default CardForm;
