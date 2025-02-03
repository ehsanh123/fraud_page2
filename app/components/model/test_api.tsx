'use client'
// components/FormComponent.tsx
import { useState } from 'react';


type FormData = {
    name: string;
    email: string;
  };
  
  export default function FormComponent() {
    //test with text bax value
    const [inputValue, setInputValue] = useState<string>(''); // State to hold the input value
  
    // Function to update the input value
    const changeInputValue = (newValue: string) => {
      setInputValue(newValue);
    };
    //
    
    const [formData, setFormData] = useState<FormData>({
      name: '',
      email: '',
    });
  
    const [submittedData, setSubmittedData] = useState<FormData | null>(null); // State to hold feedback data
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
    
    const handleSubmit = async (e: React.FormEvent) => {
      changeInputValue('1')
      e.preventDefault();
      changeInputValue('2')
  
      // Send the form data to the API route
      const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  
    // Check if the response is successful
    if (!response.ok) {
      console.error('Form submission failed:', response.status);
      return; // Exit if the response isn't successful
    }
      changeInputValue('3')
  
      const data = await response.json();
      changeInputValue('4')
  
      // Show the submitted data on screen as feedback
      setSubmittedData(data.form_data); // Storing feedback from the server
      changeInputValue('5')
      console.log(data); // For debugging
    };
  
    
  
    return (
      <div>
        <h1>Form Submission</h1>
  
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              id="name"
              placeholder="Enter your name"
            />
          </div>
  
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
  
              id="email"
              placeholder="Enter your email"
            />
          </div>
  
          <button type="submit">Submit</button>
        </form>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Update the state when the input changes
          placeholder="Type something..."
        />
        {/* Display the submitted data */}
        {submittedData && (
          <div>
            <h2>Feedback</h2>
            <p>Name: {submittedData.name}</p>
            <p>Email: {submittedData.email}</p>
          </div>
        )}
      </div>
    );
  }
