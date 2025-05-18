import { useFormContext } from "react-hook-form";
import style from './Input.module.scss';

type Props = {
  name: string;
  isLabel?: boolean;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export const Input: React.FC<Props> = ({ name, placeholder, isLabel = true, onChange, value }) => {
  const { register, formState: { errors } } = useFormContext();

  const snakeCaseName = name.toLowerCase().split(' ').join('-');
  const hasError = !!errors[snakeCaseName];
  const errorMessage = hasError ? (errors[snakeCaseName]?.message as string) : '';
  
  return (
    <label className={style['label']}>
      {isLabel && name}
        <input 
          type='text' 
          placeholder={placeholder} 
          {...register(snakeCaseName)}
          onChange={onChange}
          value={value}
        /> 
      {hasError && <p className={style['error-message']}>{errorMessage}</p>}
    </label>
  )
}