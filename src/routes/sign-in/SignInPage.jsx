import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "@/utils/form-validators";
import getUsername from "@/services/username-service";
import getPassword from "@/services/password-service";

export default function SignInPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState(location?.state?.email || "");
  const [password, setPassword] = useState("");
  const [isPasswordInput, setIsPasswordInput] = useState(true);
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    // Using Promise.all here and not Promise.allSettled because we only care that 1 API call rejects and do not need to wait for all calls to complete
    Promise.all([getUsername(email), getPassword(password)])
      .then(() => {
        navigate("/browse");
      })
      .catch((error) => {
        setFormError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const validateInputs = () => {
    let error = "";
    const passwordError = validatePassword(password);
    const emailError = validateEmail(email);
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

  const spinner = () => {
    if (loading) {
      return (
        <i className="fa-solid fa-circle-notch fa-spin text-white h-4 w-4 absolute bottom-3.5 right-3" />
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
            absolute text-neutral-300 top-3.5 right-3 cursor-pointer
          `}
          onClick={handlePasswordInputTypeChange}
        />
      </div>
      <div className="button-wrapper relative">
        <input
          type="submit"
          value="Sign In"
          className="sign-in__form__button button mt-8 bg-red-600 w-full cursor-pointer"
          onClick={(e) => handleSubmit(e)}
        />
        {spinner()}
      </div>
      {/* TODO: Add link to registration with "New to Netflix? Sign up now." */}
    </form>
  );
}
