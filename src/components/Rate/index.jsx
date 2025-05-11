import './style.css';
import { useEffect } from 'react';
import { useState } from 'react';

const currencies = {
  USD: { CZK: 23.823 },
  EUR: { CZK: 24.74 },
  GBP: { CZK: 29.067 }
};

export const Rate = ({from}) => {
   const [rate, setRate] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch (`https://api.frankfurter.app/latest?from=${from}&to=CZK`)
      const responseData = await response.json();
      setRate(responseData.rates.CZK)
    };
    fetchData();
  }, [from])
  

  return (
    <div className="rate">
      <div className="rate__currency">1 {from}</div>
      <div>=</div>
      <div className="rate__value">
      {rate !== null ? `${rate} CZK` : "Načítám..."}
</div>

    </div>
  );
};

/*
{currencies[from].CZK} 
*/
