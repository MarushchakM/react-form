import { InputType } from "../../enums/InputType";
import { FormController } from "../Input/FormController";
import { InputSection } from "../InputSection";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../../schemas/formValidation';
import './form.scss';



export const Form = () => {

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onTouched',
  });

  const onSubmit = (data: unknown) => {
    console.log("Form data submitted:", data);
  };

  return (
    <FormProvider {...methods}>
      <form className="form" onSubmit={methods.handleSubmit(onSubmit)}>
        <InputSection title="Payment details">
          <FormController name={'Card number'} type={InputType.CARD} placeholder="1234 1234 1234 1234" />
          {/* <FormController name={'Cardholder name'} type={InputType.TEXT} placeholder="Full name on card" />
          <div className="wrapper">
            <FormController name={'Expiry'} type={InputType.TEXT} placeholder="MM/YY" />
            <FormController name={'CVV'} type={InputType.NUMBER} placeholder="123" />
          </div> */}
        </InputSection>

        {/* <InputSection title="Email address">
          <Input name={'Email'} type={InputType.EMAIL} placeholder="user@example.com"/>
        </InputSection>

        <InputSection title="Address details">
          <Input name={'Country / Region'} placeholder="United States"/>
          <Input name={'Address'} placeholder="Street address"/>
          <Input name={'Address2'} placeholder="Apartment, suite, etc (optional)" isLabel={false} />
          <div className="wrapper">
            <Input name={'City'} placeholder="City"/>
            <Input name={'State'} placeholder="State" type={InputType.SELECT}/>
            <Input name={'Zip'} placeholder="123" type={InputType.NUMBER}/>
          </div>
        </InputSection> */}

        <button type="submit">Save changes</button>
      </form>
    </FormProvider>
    
  );
}