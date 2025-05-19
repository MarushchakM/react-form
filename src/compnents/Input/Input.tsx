import { Controller, useFormContext } from "react-hook-form";
import style from './Input.module.scss';
import classNames from "classnames";
import { IMaskInput } from "react-imask";

type Props = {
  name: string;
  isLabel?: boolean;
  placeholder: string;
  mask?: string;
}

export const Input: React.FC<Props> = ({ name, placeholder, isLabel = true, mask }) => {
  const { register, formState: { errors }, control } = useFormContext();

  const snakeCaseName = name.toLowerCase().split(' ').join('-');
  const hasError = !!errors[snakeCaseName];
  const errorMessage = hasError ? (errors[snakeCaseName]?.message as string) : '';

  return (
    <label className={style.label}>
      {isLabel && name}

      <Controller
        {...register(snakeCaseName)}
        control={control}
        render={({ field }) => (
          <IMaskInput
            {...field}
            mask={mask}
            unmask={true}
            placeholder={placeholder} 
            className={classNames({[style.error] : hasError})}
          />
        )}
      />
      {hasError && <p className={style['error-message']}>{errorMessage}</p>}
    </label>
  )
}