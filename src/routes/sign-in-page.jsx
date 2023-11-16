import { useState } from 'react';

export default function SignInPage() {
    const [isPasswordInput, setIsPasswordInput] = useState(true);

    const handlePasswordInputChange = () => {
        setIsPasswordInput(!isPasswordInput);
    }

    return (
        <>
            <form>
                <h2>Sign In</h2>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email"></input>
                <label for="password">Password:</label>
                <div className="password-wrapper">
                    <input type={isPasswordInput ? 'password' : 'text'} id="password" name="password"></input>
                    <i className={`fa-eye ${isPasswordInput ? "fa-solid" : "fa-regular"}`} id="eye" onClick={handlePasswordInputChange}></i>
                </div>
                <input type="submit" value="Sign In"></input>
            </form>
        </>
    )
}
