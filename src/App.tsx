// import { Form } from 'react-hook-form';
import './App.scss';
import { Form } from './compnents/Form';

function App() {
  return (
    <main className='container'>
      <h1>Billing Information</h1>
      <p className='description'>Update your billing details and address</p>
      <Form />
    </main>
  );
}

export default App
