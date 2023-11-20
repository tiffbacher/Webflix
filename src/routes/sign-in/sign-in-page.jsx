import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import getPassword from "@/services/password-service";
import getUsername from "@/services/username-service";

export default function SignInPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState(location?.state?.email || "");
  const [password, setPassword] = useState("");
  const [isPasswordInput, setIsPasswordInput] = useState(true);
  const [formError, setFormError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordInputTypeChange = () => {
    setIsPasswordInput(!isPasswordInput);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateInputs();
    if (error) return;

    Promise.all([getUsername(email), getPassword(password)])
      .then(() => {
        setFormError("");
        navigate("/browse");
      })
      .catch((error) => {
        setFormError(error.message);
      });
  };

  const validateEmail = () => {
    const emailRegex = new RegExp(
      /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
      "gm",
    );
    const isValid = emailRegex.test(email);
    if (!isValid) {
      return "Please enter a valid email address.";
    }
  };

  const validatePassword = () => {
    if (password === "") {
      return "Please enter a password.";
    }
  };

  const validateInputs = () => {
    let error = "";
    const passwordError = validatePassword();
    const emailError = validateEmail();
    if (emailError) {
      error = emailError;
    } else if (passwordError) {
      error = passwordError;
    }
    setFormError(error);
    return error;
  };

  const errorMessage = () => {
    if (formError) {
      return (
        <div className="sign-in__form__error-message bg-yellow-400 text-black mb-4 rounded-lg p-2 text-xs">
          {formError}
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
