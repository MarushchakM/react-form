import { useForm } from "react-hook-form"
import { InputType } from "../../enums/InputType";
import USStateFullName from "../../enums/USStateFullName";

type Props = {
  name: string;
  isLabel?: boolean;
  type?: InputType;
  placeholder: string;
}

export const Input: React.FC<Props> = ({ name, isLabel = true, type, placeholder }) => {
  const { register } = useForm();

  //Maybe it's better to use camel case, but create a snake case issue
  
  const snakeCaseName = name.toLowerCase().split(' ').join('-');
  return (
    <label>
      {isLabel && name}
      {type !== InputType.SELECT ? (
        <input type={type ? type : 'text'} {...register(`${snakeCaseName}`)} placeholder={placeholder} />
      ) : (
          <select {...register(`${snakeCaseName}`)} >
            <option className="placeholder" value="" disabled selected>{placeholder}</option>
            {Object.values(USStateFullName).map((stateName) => (
              <option key={stateName} value={stateName}>
                {stateName}
              </option>
        ))}
          </select>
      )}
    </label>
  )
}