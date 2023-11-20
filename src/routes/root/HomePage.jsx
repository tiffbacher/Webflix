import { useState } from "react";
import { Link } from "react-router-dom";
import { validateEmail } from "@/utils/form-validators";

export default function HomePage() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateInput = () => {
    const error = validateEmail(email);
    console.error(error);
  };

  return (
    <div className="max-width mx-auto my-8">
      <h2 className="text-5xl font-bold mb-8">
        Unlimited movies, TV shows, and more
      </h2>
      <p className="my-4">Watch anywhere. Cancel anytime.</p>
      <p className="my-4">Ready to watch? Enter your email to sign in.</p>
      <div className="home-page__form">
        {/* TODO: Create components for input and button */}
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => handleEmailChange(e)}
        />
        {/* TODO: Turn this button into "Get Started" button that links to registration */}
        <Link
          to="sign-in"
          className="button ml-4 py-3 px-8"
          state={{ email: email }}
          onClick={validateInput}
        >
          Sign In
        </Link>
        {/* TODO: Add feedback for field validation errors */}
      </div>
    </div>
  );
}
