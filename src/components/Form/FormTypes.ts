export interface IFormData {
  name: string;
  surname: string;
  birthday: string;
  country: string;
  state: string;
  consent: boolean;
  present: boolean;
  gender: string;
  profilePic: File | null;
}

export interface IState {
  formData: IFormData;
  submittedData: IFormData[];
  errors: Partial<Record<keyof IFormData, string>>;
  isFormSubmitted: boolean;
}
