import React, { useState } from 'react';

const countryCodes = [
  { name: 'United States', code: '+1' },
  { name: 'United Kingdom', code: '+44' },
  { name: 'Australia', code: '+61' },
  { name: 'India', code: '+91' },
];

function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedCountryCode, setSelectedCountryCode] = useState('');
  const [additionalInput, setAdditionalInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (confirmPassword !== password && password.length >= 8) {
      alert('Your password does not match');
      return;
    }

    setFirstName('');
    setLastName('');
    setJobTitle('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setSelectedCountryCode('');
    setAdditionalInput('');

    try {
      const response = await fetch('http://localhost:3000/profiles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          jobTitle,
          email,
          password,
          selectedCountryCode,
          additionalInput,
        }),
      });

      if (response.ok) {
        console.log('Data submitted successfully');
        
      } else {
        
        console.error('Error submitting data');
        
      }
    } catch (error) {
      console.error('Error:', error);
      
    }
  };

  return (
    <>
      <div className='container d-flex' style={{ backgroundColor: 'white' }}>
        <div style={{ backgroundColor: 'white' }}>
          <form className='row' onSubmit={handleSubmit}>
            <h1>Chat to our Team</h1>
            <p>
              Need help with something? Want a demo? <br />
              Get in touch with our friendly team, and we'll get in touch within 2 hours.
            </p>
            <br />
            <input
              className='col-md-5 me-2'
              style={{ border: 'none', borderBottom: '1px solid black' }}
              type='text'
              placeholder='First Name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              className='col-md-5'
              style={{ border: 'none', borderBottom: '1px solid black' }}
              type='text'
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <br />
            <br />
            <input
              className='col-md-10'
              style={{ border: 'none', borderBottom: '1px solid black' }}
              type='text'
              placeholder='Job Title'
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
            />
            <br />
            <br />
            <input
              className='col-md-10'
              style={{ border: 'none', borderBottom: '1px solid black' }}
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <br />
            <input
              className='col-md-10'
              style={{ border: 'none', borderBottom: '1px solid black' }}
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <br />
            <input
              className='col-md-10 mb-2 '
              style={{ border: 'none', borderBottom: '1px solid black' }}
              type='password'
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <br />
            <br />
            <div>
              <select
                className='me-2'
                style={{ border: 'none', borderBottom: '1px solid black' }}
                value={selectedCountryCode}
                onChange={(e) => setSelectedCountryCode(e.target.value)}
                required
              >
                {countryCodes.map((country, index) => (
                  <option key={index} value={country.code} className='col-md-5'>
                    {`${country.name} (${country.code})`}
                  </option>
                ))}
              </select>
              <input
                className='col-md-6 '
                style={{ border: 'none', borderBottom: '1px solid black' }}
                type='text'
                placeholder='Phone Number'
                value={additionalInput}
                onChange={(e) => setAdditionalInput(e.target.value)}
                required
              />
            </div>
            <br />
            <br />
            <p>Number of employees</p>
            <button className='btn btn-outline-secondary col-md-8'>
              <i className='fa-solid fa-address-card bg-dark'></i>{' '}
              <span className='fw-bold text-dark'>I am a solo creator</span>
              <br />
              I need to set up an account for myself.
            </button>
            <br />
            <br />
            <button className='btn btn-outline-secondary col-md-8 my-2'>
              <i className='fa-regular fa-address-card bg-dark'></i>{' '}
              <span className='fw-bold text-dark'>I am part of a team</span>
              <br />
              I need to set up an account for my team.
            </button>
            <br />
            <br />
            <button type='submit' className='btn btn-dark btn-lg col-md-8'>
              Get in Touch
            </button>
          </form>
        </div>
        <div id='img' className='image-container'>
          <img
            src='https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
            alt='Registration'
            style={{ borderRadius: '25px' }}
          />
        </div>
      </div>
    </>
  );
}

export default RegistrationForm;
