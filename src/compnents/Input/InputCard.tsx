import { useFormContext } from "react-hook-form";
import React, { useEffect, useState } from "react";

type Props = {
  name: string;
  placeholder: string;
  onQuestion: (isFocused: boolean) => void;
}

function getCardType(cardNumber: string): string {
  const cleaned = cardNumber.replace(/\D/g, '');

  if (/^4[0-9]{0,}$/.test(cleaned)) return 'Visa';
  if (/^5[1-5][0-9]{0,}$/.test(cleaned)) return 'MasterCard';
  if (/^2[2-7][0-9]{0,}$/.test(cleaned)) return 'MasterCard';

  return 'Unknown';
}

export const InputCard: React.FC<Props> = ({ name, placeholder, onQuestion }) => {
  const { register, setValue } = useFormContext();
  const [inputValue, setInputValue] = useState('');
  const [typeCard, setTypeCard] = useState('Unknown');

  useEffect(() => {
    setTypeCard(getCardType(inputValue));
  }, [inputValue])

  const handleMaskedInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');

    let formattedValue = '';
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += ' ';
      }
      formattedValue += value[i];
    }

    if (formattedValue.length > 19) {
      formattedValue = formattedValue.substring(0, 19);
    }

    setInputValue(formattedValue);

    const valueForForm = formattedValue.replace(/\s/g, '');

    setValue(name, valueForForm, { shouldValidate: true, shouldDirty: true });
  }

  return (
    <>
      {typeCard !== 'Unknown' && (
        <div className="card-icon-wrapper">
          {typeCard === 'MasterCard' && (
            <img className="masterCard" src="masterCard.png" alt="MasterCard" />
          )}
          {typeCard === 'MasterCard' && (
            <img className="icon" src="visa.png" alt="visa" />
          )}
        </div>
      )}
      
      <input
        className="card-input"
        type='text'
        placeholder={placeholder}
        {...register(name)}
        onFocus={() => onQuestion(true)} 
        onBlur={() => onQuestion(false)}
        value={inputValue}
        onChange={handleMaskedInputChange}
      /> 
    </>
  )
}