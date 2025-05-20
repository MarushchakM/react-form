import { useFormContext } from "react-hook-form";
import USStateFullName from "../../enums/USStateFullName";
import style from './Select.module.scss';
import classNames from "classnames";
import type { IForm } from "../../enums/IForm";

type Props = {
  name: keyof IForm;
  label: string;
  placeholder: string;
}

export const Select: React.FC<Props> = ({ name, label, placeholder }) => {
  const { register, formState: { errors } } = useFormContext();
  
  const snakeCaseName = name.toLowerCase().split(' ').join('-');
  const hasError = !!errors[snakeCaseName];
  const errorMessage = hasError ? (errors[snakeCaseName]?.message as string) : '';

  return (
    <div className={style.wrapper}>
      <label className={style.label}>
        {label}
        <select {...register(snakeCaseName)} className={classNames({ [style.error]: hasError })}>
          <option
            className={style.placeholder}
            value="" disabled
            selected
          >{placeholder}</option>
            {Object.values(USStateFullName).map((stateName) => (
              <option key={stateName} value={stateName}>
                {stateName}
              </option>
            ))}
        </select>
        
      </label>
      { hasError && <p className={style['error-message']}>{errorMessage}</p> }
    </div>
  )
}