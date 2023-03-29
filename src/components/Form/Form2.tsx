import { IFormData, IState } from './FormTypes';
import CardForm from '../CardForm/CardForm';
import styles from './Form.module.css';
import { useForm } from 'react-hook-form';

function Form2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();
  return <div>Form2</div>;
}

export default Form2;
