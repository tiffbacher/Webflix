import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function SignInPage() {
    const location = useLocation();
    const [email, setEmail] = useState(location.state.email || '');
    const [password, setPassword] = useState('');
    const [isPasswordInput, setIsPasswordInput] = useState(true);

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handlePasswordInputTypeChange = () => {
        setIsPasswordInput(!isPasswordInput);
    }

    return (
        <form>
            <h2>Sign In</h2>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" defaultValue={email} onChange={e => handleEmailChange(e)} />
            <label htmlFor="password">Password:</label>
            <div className="password-wrapper">
                <input type={isPasswordInput ? 'password' : 'text'} id="password" name="password" value={password} onChange={e => handlePasswordChange(e)} />
                <i className={`fa-eye ${isPasswordInput ? "fa-solid" : "fa-regular"}`} id="eye" onClick={handlePasswordInputTypeChange} />
            </div>
            <input type="submit" value="Sign In" />
        </form>
    )
}
