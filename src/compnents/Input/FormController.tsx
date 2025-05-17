import { InputType } from "../../enums/InputType";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import './formController.scss';
import classNames from 'classnames';
import { InputText } from "./InputText";
import { InputCard } from "./InputCard";
import { InputNumber } from "./InputNumber";

type Props = {
  name: string;
  isLabel?: boolean;
  type: InputType;
  placeholder: string;
}

export const FormController: React.FC<Props> = ({ name, type, placeholder, isLabel = true }) => {
  const [isFocused, setIsFocused] = useState(false);
  
  const { formState: { errors } } = useFormContext();

  const snakeCaseName = name.toLowerCase().split(' ').join('-');

  const showIconQuestion = (focusedState: boolean) => {
    setIsFocused(focusedState);
  };

  const hasError = !!errors[snakeCaseName];
  const errorMessage = hasError ? (errors[snakeCaseName]?.message as string) : '';
  
  console.log(errorMessage);

  return (
    <label className="label">
      {isLabel && name}
      <div className="input-wrapper">
        {type === InputType.TEXT &&
          <InputText name={snakeCaseName} placeholder={placeholder} onQuestion={showIconQuestion} />}
        {type === InputType.CARD &&
          <InputCard name={snakeCaseName} placeholder={placeholder} onQuestion={showIconQuestion}/>}
        {type === InputType.NUMBER &&
          <InputNumber name={snakeCaseName} placeholder={placeholder} onQuestion={showIconQuestion} />}
        
        <svg className={classNames('question-icon', { 'question-icon-focus': isFocused })} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.00004 13.6667C3.31814 13.6667 0.333374 10.6819 0.333374 7.00001C0.333374 3.31811 3.31814 0.333344 7.00004 0.333344C10.6819 0.333344 13.6667 3.31811 13.6667 7.00001C13.6667 10.6819 10.6819 13.6667 7.00004 13.6667ZM7.00004 12.3333C9.94557 12.3333 12.3334 9.94554 12.3334 7.00001C12.3334 4.05449 9.94557 1.66668 7.00004 1.66668C4.05452 1.66668 1.66671 4.05449 1.66671 7.00001C1.66671 9.94554 4.05452 12.3333 7.00004 12.3333ZM6.33337 9.00001H7.66671V10.3333H6.33337V9.00001ZM7.66671 7.90341V8.33334H6.33337V7.33334C6.33337 6.96514 6.63184 6.66668 7.00004 6.66668C7.55231 6.66668 8.00004 6.21894 8.00004 5.66668C8.00004 5.11439 7.55231 4.66668 7.00004 4.66668C6.51491 4.66668 6.11044 5.01216 6.01924 5.47052L4.71158 5.20898C4.92429 4.13947 5.86804 3.33334 7.00004 3.33334C8.28871 3.33334 9.33337 4.37801 9.33337 5.66668C9.33337 6.72368 8.63051 7.61654 7.66671 7.90341Z"/>
        </svg>
      </div>
      {hasError && <p className="error-message">{errorMessage}</p>}
    </label>
  )
}