import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { users } from "@/utils/users";

export default function SignInPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState(location?.state?.email || "");
  const [password, setPassword] = useState("");
  const [isPasswordInput, setIsPasswordInput] = useState(true);
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordInputTypeChange = () => {
    setIsPasswordInput(!isPasswordInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { isValid } = validateUser();
    if (!isValid) {
      return;
    } else {
      navigate("/browse");
    }
  };

  const validateUser = () => {
    let formErrors = {};
    if (!users[email]) {
      formErrors = {
        ...formErrors,
        email:
          "Sorry, we can't find an account with this email address. Please try again.",
      };
    } else if (users[email]?.password !== password) {
      formErrors = {
        ...formErrors,
        password: "Incorrect password. Please try again.",
      };
    } else {
      return { isValid: true };
    }
    setFormErrors(formErrors);
    return { isValid: false };
  };

  const errorMessage = () => {
    if (formErrors.email || formErrors.password) {
      return (
        <div className="sign-in__form__error-message bg-yellow-400 text-black mb-4 rounded-lg p-2 text-xs">
          {formErrors.email || formErrors.password}
        </div>
      );
    }
  };

  return (
    <form className="sign-in__form bg-neutral-800 p-8 flex flex-col rounded-lg w-min">
      <h2 className="text-xl font-bold mb-4">Sign In</h2>
      {errorMessage()}
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        className="sign-in__form__input mb-2"
        defaultValue={email}
        onChange={(e) => handleEmailChange(e)}
      />
      <label htmlFor="password">Password:</label>
      <div className="password-wrapper relative">
        <input
          type={isPasswordInput ? "password" : "text"}
          name="password"
          id="password"
          className="sign-in__form__input mb-2"
          value={password}
          onChange={(e) => handlePasswordChange(e)}
        />
        <i
          className={`
            fa-eye
            ${isPasswordInput ? "fa-solid" : "fa-regular"}
            absolute text-neutral-300 top-3.5 right-3
          `}
          id="eye"
          onClick={handlePasswordInputTypeChange}
        />
      </div>
      <input
        type="submit"
        value="Sign In"
        className="sign-in__form__button mt-8 bg-red-600"
        onClick={(e) => handleSubmit(e)}
      />
      {/* TODO: Add link to registration with "New to Netflix? Sign up now." */}
    </form>
  );
}
