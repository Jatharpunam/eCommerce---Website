import React, { useState } from 'react';

const LoginPage = () => {
    const [username, setUserName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [pincode, setPincode] = useState('')
    const [password, setPassword] = useState('')

    
  function handleLogin(event) {
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
  }

    return (
        <div className="container border border-1 border-dark mx-auto shadow rounded-2 p-4 mt-5" style={{ maxWidth: '600px' }}>
            <form onSubmit={handleLogin}>
                <h2 className="text-center mb-4">Login Page</h2>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="email" placeholder="example@mail.com" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter password" value={[password]} onChange={(e) => setPassword(e.target.value)} required/>
                </div>

                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="checkMeOut" />
                    <label className="form-check-label" htmlFor="checkMeOut">Check me out</label>
                </div>

                <button type="submit" className="btn btn-primary w-25 ">Submit</button>
            </form>
        </div>
    );
};

export default LoginPage;
