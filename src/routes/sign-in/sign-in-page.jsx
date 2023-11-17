import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { users } from '@/utils/users';

import './sign-in-page.css'

export default function SignInPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState(location?.state?.email || '');
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
        const { isValid } = validateUser();
        if (!isValid) {
            return;
        } else {
            navigate('/browse');
        }
    }

    const validateUser = () => {
        let formErrors = {};
        if (!users[email]) {
            formErrors = { ...formErrors, email: "Sorry, we can't find an account with this email address. Please try again." }
        } else if (users[email]?.password !== password) {
            formErrors = { ...formErrors, password: "Incorrect password. Please try again." }
        } else {
            return { isValid: true }
        }
        setFormErrors(formErrors);
        return { isValid: false }
    }

    const errorMessage = () => {
        return (
            <div className="form__error-message">{formErrors.email || formErrors.password}</div>
        )
    }

    return (
        <form className="sign-in__form">
            <h2>Sign In</h2>
            {(formErrors.email || formErrors.password) && errorMessage()}
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" className="sign-in__form__input" defaultValue={email} onChange={e => handleEmailChange(e)} />
            <label htmlFor="password">Password:</label>
            <div className="password-wrapper">
                <input type={isPasswordInput ? 'password' : 'text'} name="password" id="password" className="sign-in__form__input" value={password} onChange={e => handlePasswordChange(e)} />
                <i className={`fa-eye ${isPasswordInput ? "fa-solid" : "fa-regular"}`} id="eye" onClick={handlePasswordInputTypeChange} />
            </div>
            <input type="submit" value="Sign In" className="sign-in__form__button" onClick={e => handleSubmit(e)} />
            {/* TODO: Add link to registration with "New to Netflix? Sign up now." */}
        </form>
    )
}
