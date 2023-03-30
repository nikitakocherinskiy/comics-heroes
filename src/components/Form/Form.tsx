import { IFormData } from './FormTypes';
import CardForm from '../CardForm/CardForm';
import styles from './Form.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';

function Form() {
  const {
    register,
    formState: { isSubmitted, isValid, errors },
    handleSubmit,
    reset,
  } = useForm<IFormData>({ mode: 'onBlur' });
  const [cardList, setCardList] = useState<IFormData[]>([]);

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    setCardList([data, ...cardList]);
    if (data.profilePic) {
      console.log(data.profilePic[0]);
    }
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
        <label>
          <h4 className={styles.inputHeading}>Name:</h4>
          <input
            {...register('name', {
              required: 'This field is required',
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors?.name && <p className={styles.error}>{errors?.name?.message || 'Error!'}</p>}
        </label>
        <label>
          <h4 className={styles.inputHeading}>Surname:</h4>
          <input
            {...register('surname', {
              required: 'This field is required',
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors?.surname && (
            <p className={styles.error}>{errors?.surname?.message || 'Error!'}</p>
          )}
        </label>
        <label>
          <h4 className={styles.inputHeading}>Birthday:</h4>
          <input
            {...register('birthday', {
              required: 'This field is required',
            })}
            type="date"
          />
          {errors?.birthday && (
            <p className={styles.error}>{errors?.birthday?.message || 'Error!'}</p>
          )}
        </label>
        <label>
          <h4 className={styles.inputHeading}>Country:</h4>
          <select
            {...register('country', {
              required: 'This field is required',
            })}
          >
            <option value="">Select country</option>
            <option value="USA">USA</option>
            <option value="Canada">Russia</option>
            <option value="Mexico">Mexico</option>
          </select>
          {errors?.country && (
            <p className={styles.error}>{errors?.country?.message || 'Error!'}</p>
          )}
        </label>
        <label>
          <h4 className={styles.inputHeading}>City:</h4>
          <input
            {...register('city', {
              required: 'This field is required',
            })}
          />
          {errors?.city && <p className={styles.error}>{errors?.city?.message || 'Error!'}</p>}
        </label>
        <label>
          <h4 className={styles.inputHeading}>Consent:</h4>
          <input
            type="checkbox"
            {...register('consent', {
              required: 'This field is required',
            })}
          />
          {errors?.consent && (
            <p className={styles.error}>{errors?.consent?.message || 'Error!'}</p>
          )}
        </label>
        <label>
          <h4 className={styles.inputHeading}>Extra presents:</h4>
          <input
            type="checkbox"
            {...register('present', {
              required: 'This field is required',
            })}
          />
          {errors?.present && (
            <p className={styles.error}>{errors?.present?.message || 'Error!'}</p>
          )}
        </label>
        {/* <fieldset> */}

        <label className={styles.genderWrapper}>
          <h4 className={styles.genderHeading}>Gender:</h4>
          <label>
            <p>Male</p>
            <input
              type="radio"
              value="male"
              {...register('gender', {
                required: 'This field is required',
              })}
              className={styles.checkboxInput}
            />
          </label>
          <label>
            <p>Female</p>
            <input
              type="radio"
              value="female"
              {...register('gender', {
                required: 'This field is required',
              })}
              className={styles.checkboxInput}
            />
          </label>
          {errors?.gender && <p className={styles.error}>{errors?.gender?.message || 'Error!'}</p>}
        </label>
        {/* </fieldset> */}
        <label>
          <h4 className={styles.inputHeading}>Profile picture:</h4>
          <input
            type="file"
            {...register('profilePic', {
              required: 'This field is required',
            })}
          />
          {errors?.profilePic && (
            <p className={styles.error}>{errors?.profilePic?.message || 'Error!'}</p>
          )}
        </label>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
      {isSubmitted && isValid && (
        <div>
          <p className={styles.success}>Thank you for submitting the form!</p>
        </div>
      )}
      <div className={styles.cardsConrainer}>
        {cardList.map((data, index) => (
          <CardForm key={index} data={data} />
        ))}
      </div>
    </div>
  );
}

export default Form;
