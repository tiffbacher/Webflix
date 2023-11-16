import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { users } from '../users';

export default function SignInPage() {
    const location = useLocation();
    const [email, setEmail] = useState(location.state.email || '');
    const [password, setPassword] = useState('');
    const [isPasswordInput, setIsPasswordInput] = useState(true);
    const [formErrors, setFormErrors] = useState({
        email: '',
        password: '',
    })

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handlePasswordInputTypeChange = () => {
        setIsPasswordInput(!isPasswordInput);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validateUser();
    }

    const validateUser = () => {
        let formErrors = {};
        if (!users[email]) {
            formErrors = { ...formErrors, email: "Sorry, we can't find an account with this email address. Please try again." }
        } else if (users[email]?.password !== password) {
            formErrors = { ...formErrors, password: "Incorrect password. Please try again." }
        } else {
            console.log('User is valid')
        }
        setFormErrors(formErrors);
    }

    const errorMessage = () => {
        return (
            <div className="form__error-message">{formErrors.email || formErrors.password}</div>
        )
    }

    return (
        <form>
            <h2>Sign In</h2>
            {(formErrors.email || formErrors.password) && errorMessage()}
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" defaultValue={email} onChange={e => handleEmailChange(e)} />
            <label htmlFor="password">Password:</label>
            <div className="password-wrapper">
                <input type={isPasswordInput ? 'password' : 'text'} id="password" name="password" value={password} onChange={e => handlePasswordChange(e)} />
                <i className={`fa-eye ${isPasswordInput ? "fa-solid" : "fa-regular"}`} id="eye" onClick={handlePasswordInputTypeChange} />
            </div>
            <input type="submit" value="Sign In" onClick={e => handleSubmit(e)} />
        </form>
    )
}
