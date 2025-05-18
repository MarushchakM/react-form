import { useFormContext } from "react-hook-form";
import USStateFullName from "../../enums/USStateFullName";
import style from './Select.module.scss';

type Props = {
  name: string;
  placeholder: string;
}

export const Select: React.FC<Props> = ({ name, placeholder }) => {
  const { register, formState: { errors } } = useFormContext();
  
  const snakeCaseName = name.toLowerCase().split(' ').join('-');
  const hasError = !!errors[snakeCaseName];
  const errorMessage = hasError ? (errors[snakeCaseName]?.message as string) : '';

  return (
    <label className={style['label']}>
      {name}
      <select {...register(snakeCaseName)}>
        <option className={style['placeholder']} value="" disabled selected>{placeholder}</option>
          {Object.values(USStateFullName).map((stateName) => (
            <option key={stateName} value={stateName}>
              {stateName}
            </option>
          ))}
      </select>
      {hasError && <p className={style['error-message']}>{errorMessage}</p>}
    </label>
  )
}