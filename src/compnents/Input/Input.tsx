import { Controller, useFormContext } from "react-hook-form";
import style from './Input.module.scss';
import classNames from "classnames";
import { IMaskInput } from "react-imask";
import type { IForm } from "../../enums/IForm";

type Props = {
  name: keyof IForm;
  label: string;
  isLabel?: boolean;
  placeholder: string;
  mask?: string;
}

export const Input: React.FC<Props> = ({ name, label, placeholder, mask }) => {
  const { formState: { errors }, control } = useFormContext();

  const hasError = !!errors[name];
  const errorMessage = hasError ? (errors[name]?.message as string) : '';

  return (
    <div className={style.wrapper}>
      <label className={style.label}>
        {label}

        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            mask ? (
              <IMaskInput
                name={name}
                mask={mask}
                unmask={true}
                placeholder={placeholder}
                value={value}
                onAccept={(val: string) => onChange(val)}
                onBlur={onBlur}
                inputRef={ref}
                className={classNames({ [style.error]: hasError })}
              />
            ) : (
              <input
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                ref={ref}
                className={classNames({ [style.error]: hasError })}
              />
            )
          )}
        />
      </label>
      {hasError && <p className={style['error-message']}>{errorMessage}</p>}
    </div>

  )
}