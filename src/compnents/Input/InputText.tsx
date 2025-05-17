import { useForm } from "react-hook-form";

type Props = {
  name: string;
  placeholder: string;
  onQuestion: (isFocused: boolean) => void;
}

export const InputText: React.FC<Props> = ({ placeholder, name, onQuestion }) => {
   const { register } = useForm();
  return (
    <input 
      type='text' 
      placeholder={placeholder} 
      {...register(name)} 
      onFocus={() => onQuestion(true)} 
      onBlur={() => onQuestion(false)}
    /> 
  )
}