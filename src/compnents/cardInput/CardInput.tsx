import { useFormContext } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { Input } from "../Input";
import style from './CardInput.module.scss';

type Props = {
  name: string;
  placeholder: string;
}

function getCardType(cardNumber: string): string {
  const cleaned = cardNumber.replace(/\D/g, '');

  if (/^4[0-9]{0,}$/.test(cleaned)) return 'Visa';
  if (/^5[1-5][0-9]{0,}$/.test(cleaned)) return 'MasterCard';
  if (/^2[2-7][0-9]{0,}$/.test(cleaned)) return 'MasterCard';

  return 'Unknown';
}

export const CardInput: React.FC<Props> = ({ name, placeholder }) => {
  const { setValue } = useFormContext();
  const [inputValue, setInputValue] = useState('');
  const [typeCard, setTypeCard] = useState('Unknown');

  const snakeCaseName = name.toLowerCase().split(' ').join('-');

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

    console.log(snakeCaseName, valueForForm);
    setValue(snakeCaseName, valueForForm, { shouldValidate: true, shouldDirty: true });
  }

  return (
    <div className={style['wrapper']}>
        <div className={style['icon-wrapper']}>
          {typeCard === 'MasterCard' || typeCard ==='Unknown' && (
            <img className={style['icon']} src="masterCard.png" alt="MasterCard" />
          )}
          {typeCard === 'Visa' && (
            <img className={style['icon']} src="visa.png" alt="visa" />
          )}
        </div>
      
      <Input 
        name={name} 
        placeholder={placeholder} 
        onChange={handleMaskedInputChange} 
      />
    </div>
  )
}
