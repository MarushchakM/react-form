import { InputType } from "../../enums/InputType";
import { Input } from "../Input";
import { InputSection } from "../InputSection";

export const Form = () => {
  return (
    <form>
      <InputSection title="Payment details">
        <Input name={'Card number'} placeholder="1234 1234 1234 1234"/>
        <Input name={'Cardholder name'} placeholder="Full name on card" />
        <div className="wrapper">
          <Input name={'Expiry'} placeholder="MM/YY"/>
          <Input name={'CVV'} type={InputType.NUMBER} placeholder="123"/>
        </div>
      </InputSection>

      <InputSection title="Email address">
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
      </InputSection>
    </form>
    
  );
}