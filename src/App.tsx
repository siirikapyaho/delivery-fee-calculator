import { useState } from 'react'
import './App.css'
// import InputGroup from '@/components/InputGroup';
import calculateDeliveryFee from '@/lib/calculateDeliveryFee';

function App() {

  const [objectDetails, setObjectDetails] = useState({
    cartValue: 0,
    deliveryDistance: 0,
    itemQuantity: 0
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setObjectDetails({
      ...objectDetails,
      [e.target.name]: e.target.value
    });
  }

  {/*const handleValueChange = (key:string, value: string) => {
    setObjectDetails({...objectDetails, [key]: parseInt(value)})
  }*/}

  const [fee, setFee] = useState(0)

  // TO DO
  const resetCalculator = () => {
    
  }

  return (
    <>
      <div className="card">
      <h1>Delivery Fee Calculator</h1>
      {/*<InputGroup
        label="Cart value"
        name="cartValue" 
        onChange={(v) => handleValueChange("cartValue", v)}
  />*/}
      <label htmlFor="cartValue">Cart value</label>
      <input data-testid="cartValue" name="cartValue" id="cartValue" onChange={handleChange}/>
      <label htmlFor="deliveryDistance">Delivery Distance</label>
      <input data-testid="deliveryDistance" name="deliveryDistance" id="deliveryDistance" onChange={handleChange}/>
      <label htmlFor="itemQuantity">Amount of Items</label>
      <input data-testid="itemQuantity" name="itemQuantity" id="itemQuantity" onChange={handleChange}/>
      <label htmlFor="date">Date</label>
      <input data-testid="date" id="date" type="datetime-local"/>
      <button id="calculate" onClick={() => {setFee(calculateDeliveryFee(objectDetails))
        resetCalculator()}}>
        Calculate Delivery Fee
      </button>
      <label id="total">
        Delivery fee: {fee} €
      </label>
      </div>
    </>
  )
}

export default App
