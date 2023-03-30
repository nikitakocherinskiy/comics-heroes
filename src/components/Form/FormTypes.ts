export interface IFormData {
  name: string;
  surname: string;
  birthday: string;
  country: string;
  city: string;
  consent: boolean;
  present: boolean;
  gender: string;
  profilePic: FileList | string;
}

export interface FormFuncType {
  setCardList: React.Dispatch<React.SetStateAction<IFormData[]>>;
}

// export interface IState {
//   formData: IFormData;
//   submittedData: IFormData[];
//   errors: Partial<Record<keyof IFormData, string>>;
//   isFormSubmitted: boolean;
// }
