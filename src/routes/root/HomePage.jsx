import { useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="max-width mx-auto">
      <h2 className="text-5xl font-bold my-8">
        Unlimited movies, TV shows, and more
      </h2>
      <p className="my-4">Watch anywhere. Cancel anytime.</p>
      <p className="my-4">Ready to watch? Enter your email to sign in.</p>
      <div>
        {/* TODO: Create components for input and button */}
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => handleEmailChange(e)}
        />
        <Link to="sign-in" className="button" state={{ email: email }}>
          Sign In
        </Link>
      </div>
    </div>
  );
}