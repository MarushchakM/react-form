import { useForm } from "react-hook-form";

type Props = {
  name: string;
  placeholder: string;
  onQuestion: (isFocused: boolean) => void;
}

export const InputNumber: React.FC<Props> = ({ name, placeholder,  onQuestion}) => {
  const { register } = useForm();
  return (
    <input
      type='number'
      placeholder={placeholder}
      {...register(name)}
      onFocus={() => onQuestion(true)} 
      onBlur={() => onQuestion(false)}
    /> 
  )
}