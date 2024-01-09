import { useState } from "react";
import { validateEmail } from "@/utils/form-validators";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const errorMessage = () => {
    if (error) {
      return (
        <p className="home-page__form__error-message text-red-600 py-2 text-xs">
          {error}
        </p>
      );
    } else {
      return <div className="home-page__form__error-placeholder h-8" />;
    }
  };

  const handleSubmit = () => {
    setError("");
    setLoading(true);
    const error = validateEmail(email);
    if (error) {
      setError(error);
    } else {
      navigate("/sign-in", { state: { email } });
    }
    setLoading(false);
  };

  /** TODO: Make spinner its own component */
  const spinner = () => {
    if (loading) {
      return (
        <i className="fa-solid fa-circle-notch fa-spin text-white h-4 w-4 absolute bottom-3.5 right-3" />
      );
    }
  };

  return (
    <div className="max-width mx-auto my-8">
      <h2 className="text-5xl font-bold mb-8">
        Unlimited movies, TV shows, and more
      </h2>
      <p className="my-4">Watch anywhere. Cancel anytime.</p>
      <p className="my-4">Ready to watch? Enter your email to sign in.</p>
      <div className="home-page__form flex">
        {/* TODO: Create components for input and button */}
        <input
          className={error ? "border border-solid border-red-600" : undefined}
          type="email"
          name="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => handleEmailChange(e)}
        />
        {/* TODO: Turn this button into "Get Started" button that links to registration */}
        <div className="button-wrapper relative">
          <input
            type="submit"
            value="Sign In"
            className="home-page__form__button button ml-4 px-8 bg-red-600 cursor-pointer"
            onClick={handleSubmit}
          />
          {spinner()}
        </div>
      </div>
      {errorMessage()}
    </div>
  );
}
