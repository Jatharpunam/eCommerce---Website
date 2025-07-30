import React, { useState } from 'react';

const RegisterPage = ({setIsRegister}) => {
    const [username, setUserName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [pincode, setPincode] = useState('');
    const [password, setPassword] = useState('');

    function handleRegister(event) {
        event.preventDefault();
        const payload = {
            name: username,
            mobile: mobile,
            email: email,
            gender: gender,
            pincode: pincode,
            password: password,
        };
        console.log(payload, "payload");
        localStorage.setItem('user', JSON.stringify(payload));
        setIsRegister(true)
    }

    return (
        <div className="container border border-1 border-dark mx-auto shadow rounded-2 p-4 mt-5" style={{ maxWidth: '600px' }}>
            <form onSubmit={handleRegister}>
                <h2 className="text-center mb-4">Register Page</h2>

                <div className="mb-3">
                    <label htmlFor="registerUsername" className="form-label">Username</label>
                    <input type="text" className="form-control" id="registerUsername" placeholder='Enter Username' value={username} onChange={(e) => setUserName(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="registerMobile" className="form-label">Mobile Number</label>
                    <input type="tel" className="form-control" id="registerMobile" placeholder="+91-123-4567-890" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="registerEmail" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="registerEmail" placeholder="example@mail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label d-block">Select Gender</label>
                    <div className="form-check form-check-inline">
                        <input type="radio" className="form-check-input" name="gender" id="registerGenderFemale" value="Female" checked={gender === 'Female'} onChange={(e) => setGender(e.target.value)} />
                        <label className="form-check-label" htmlFor="registerGenderFemale">Female</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input type="radio" className="form-check-input" name="gender" id="registerGenderMale" value="Male" checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)} />
                        <label className="form-check-label" htmlFor="registerGenderMale">Male</label>
                    </div>
                </div>

                <div className="mb-3 inputGroup">
                    <label htmlFor="registerPincode" className="form-label">Enter Pincode</label>
                    <input type="number" className="form-control" id="registerPincode" placeholder='Enter Pincode' value={pincode} onChange={(e) => setPincode(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="registerPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="registerPassword" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="registerCheckMeOut" />
                    <label className="form-check-label" htmlFor="registerCheckMeOut">Check me out</label>
                </div>

                <button type="submit" className="btn btn-primary w-25">Submit</button>
            </form>
        </div>
    );
};

export default RegisterPage;
