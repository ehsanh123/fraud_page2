'use client'
import React, { useState } from "react";
import "@/app/components/model/fomatcss.css";
import SelectPart from "@/app/components/model/select";

import DatesPart from "@/app/components/model/datapart";

const FullPage: React.FC = () => {
  //test with text bax value
  const [responseData, setResponseData] = useState<any>(null);
  //

  const [formData, setFormData] = useState({
    USER_ID: "2416fa3c-0085-4d39-b2a8-e750506aa46f",
    AMOUNT_GBP: 25.0,
    avg_transaction_amount: 29.334,
    transaction_amount_std: 19.07,
    // Transaction Date
    C_YEAR: "2019",
    C_MONTH: "05",
    C_DAY: "06",
    C_HOUR: "01",
    C_MINUTE: "19",
    C_SECOND: "21",
    // Opening Date
    O_YEAR: "2019",
    O_MONTH: "04",
    O_DAY: "19",
    O_HOUR: "23",
    O_MINUTE: "10",
    O_SECOND: "19",
    // Birthday
    B_YEAR: "1990",
    B_MONTH: "01",
    B_DAY: "15",
    // Last Transaction Date (Initial values added)
    L_YEAR: "2019",
    L_MONTH: "05",
    L_DAY: "06",
    L_HOUR: "01",
    L_MINUTE: "19",
    L_SECOND: "01",
    // First Transaction Date (Initial values added)
    MIN_YEAR: "2019",
    MIN_MONTH: "04",
    MIN_DAY: "22",
    MIN_HOUR: "12",
    MIN_MINUTE: "47",
    MIN_SECOND: "19",
    //
    TYPE: "CARD_PAYMENT",
    STATE: "COMPLETED",
    CURRENCY: "GBP",
    COUNTRY: "GB",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInputChange1 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };
  
  // const handleSubmit = async (formData) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
    const res = await fetch("http://localhost:5000/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
    });

    const data = await res.json();
    console.log(data);

      if (res.ok) {
        // alert('Form submitted successfully!');
        console.log(data);
        setResponseData(data);

      } else {
        // alert('There was an error submitting the form.');
        // setResponseData('There was an error submitting the form.');
        setResponseData(res);
      }
    } catch (error) {
      console.error("Error:", error);
      // alert('An error occurred. Please try again.');
      setResponseData('error: '+error.toString());
    }
};

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   try {
  //     const res = await fetch("/api/submit", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });
  // const data = await res.json();
  //     if (res.ok) {
  //       // alert('Form submitted successfully!');
  //       console.log(data);
  //       setResponseData(data);

  //     } else {
  //       // alert('There was an error submitting the form.');
  //       // setResponseData('There was an error submitting the form.');
  //       setResponseData(res);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     // alert('An error occurred. Please try again.');
  //     setResponseData('An error occurred. Please try again.');
  //   }

  
  //     
  // };

  return (
    <div className="form-container">
      <h1>Fraud Detection</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="USER_ID">USER_ID:</label>
        <input
          type="text"
          id="USER_ID"
          name="USER_ID"
          value={formData.USER_ID}
          disabled
        />

        <DatesPart 
          year={formData.C_YEAR}
          month={formData.C_MONTH}
          day={formData.C_DAY}
          hour={formData.C_HOUR}
          minute={formData.C_MINUTE}
          second={formData.C_SECOND}

          oyear={formData.O_YEAR}
          omonth={formData.O_MONTH}
          oday={formData.O_DAY}
          ohour={formData.O_HOUR}
          ominute={formData.O_MINUTE}
          osecond={formData.O_SECOND}
        
          byear={formData.B_YEAR}
          bmonth={formData.B_MONTH}
          bday={formData.B_DAY}

          lyear={formData.L_YEAR}
          lmonth={formData.L_MONTH}
          lday={formData.L_DAY}
          lhour={formData.L_HOUR}
          lminute={formData.L_MINUTE}
          lsecond={formData.L_SECOND}
          
          fyear={formData.MIN_YEAR}
          fmonth={formData.MIN_MONTH}
          fday={formData.MIN_DAY}
          fhour={formData.MIN_HOUR}
          fminute={formData.MIN_MINUTE}
          fsecond={formData.MIN_SECOND}

          onChange={handleInputChange}
        />

        <label htmlFor="AMOUNT_GBP">Transaction Amount:</label>
        <input
          type="number"
          step="0.001"
          id="AMOUNT_GBP"
          name="AMOUNT_GBP"
          value={formData.AMOUNT_GBP}
          min={0.01}
          onChange={handleInputChange}
        />

        <label htmlFor="avg_transaction_amount">Avg Transaction Amount:</label>
        <input
          type="number"
          step="0.001"
          id="avg_transaction_amount"
          name="avg_transaction_amount"
          value={formData.avg_transaction_amount}
          min={0.01}
          onChange={handleInputChange}
        />

        <label htmlFor="transaction_amount_std">Transaction Amount Std:</label>
        <input
          type="number"
          step="0.001"
          id="transaction_amount_std"
          name="transaction_amount_std"
          value={formData.transaction_amount_std}
          min={0.01}
          onChange={handleInputChange}
        />

        <SelectPart 
          type={formData.TYPE}
          stats={formData.STATE}
          CURR={formData.CURRENCY}
          COUNT={formData.COUNTRY}

          onChange={handleInputChange1}
        />

        <button type="submit">See Prediction</button>
      </form>
      
      {responseData && (
        <div className="response-container">
        {/* <h3>Received Data:</h3> */}
        <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
      {/* <h2>OR</h2> */}
      <button onClick={() => (window.location.href = "/")}>Go to Main</button>
    </div>
  );
};

export default FullPage;
