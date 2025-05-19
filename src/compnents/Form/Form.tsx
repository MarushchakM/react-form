import { InputSection } from "../inputSection";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../../schemas/formValidation';
import styles from'./Form.module.scss';
import { Input } from "../Input";
import { CardInput } from "../cardInput";
// import { Select } from "../select";

export const Form = () => {

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  });

  const onSubmit = (data: unknown) => {
    console.log("Form data submitted:", data);
  };

  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>
        <InputSection title="Payment details">
          <CardInput name={'Card number'} placeholder="1234 1234 1234 1234" />
          <Input name={'Cardholder name'} placeholder="Full name on card"/>
          <div className={styles.wrapper}>
            <Input name={'Expiry'} placeholder="MM/YY" />
            <Input name={'CVV'} placeholder="123" />
          </div>
        </InputSection>

         {/* <InputSection title="Email address">
          <Input name={'Email'} placeholder="user@example.com"/>
        </InputSection>

        <InputSection title="Address details">
          <Input name={'Country / Region'} placeholder="United States" />
          <div>
            <Input name={'Address'} placeholder="Street address"/>
            <Input name={'Address2'} placeholder="Apartment, suite, etc (optional)" isLabel={false} />
          </div>
          <div className={styles.wrapper}>
            <Input name={'City'} placeholder="City"/>
            <Select name={'State'} placeholder="State"/>
            <Input name={'Zip'} placeholder="123"/>
          </div>
        </InputSection>  */}

        <button className={styles.button} type="submit">Save changes</button>
      </form>
    </FormProvider>
    
  );
}