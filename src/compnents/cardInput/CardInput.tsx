import { useWatch } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { Input } from "../Input";
import style from './CardInput.module.scss';
import type { IForm } from "../../enums/IForm";

type Props = {
  name: keyof IForm;
  label: string;
  placeholder: string;
  mask: string;
}

function getCardType(cardNumber: string): string {
  const cleaned = cardNumber.replace(/\D/g, '');

  if (/^4[0-9]{0,}$/.test(cleaned)) return 'Visa';
  if (/^5[1-5][0-9]{0,}$/.test(cleaned)) return 'MasterCard';
  if (/^2[2-7][0-9]{0,}$/.test(cleaned)) return 'MasterCard';

  return 'Unknown';
}

export const CardInput: React.FC<Props> = ({ name, label, placeholder, mask }) => {
  const [typeCard, setTypeCard] = useState('Unknown');

  const snakeCaseName = name.toLowerCase().split(' ').join('-');
  const watchedValue = useWatch({ name: snakeCaseName });

  useEffect(() => {
    if (watchedValue) {
      setTypeCard(getCardType(watchedValue));
    }
  }, [watchedValue])

  return (
    <div className={style.wrapper}>
        <div className={style['icon-wrapper']}>
          {typeCard === 'MasterCard' || typeCard ==='Unknown' && (
            <img className={style.icon} src="masterCard.png" alt="MasterCard" />
          )}
          {typeCard === 'Visa' && (
            <img className={style.icon} src="visa.png" alt="visa" />
          )}
        </div>
      
      <Input
        name={name}
        label={label}
        placeholder={placeholder}
        mask={mask}
      />
    </div>
  )
}

