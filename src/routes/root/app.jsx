import { Link, Route, Routes } from "react-router-dom";
import { HomePage } from "@/routes/root";
import { SignInPage } from "@/routes/sign-in";

import "./app.css";

export default function App() {
  return (
    <div className="app">
      <header>
        {/* TODO: Add sign-in button to header */}
        <div className="max-width">
          <Link to="/">
            <h1 className="logo">WEBFLIX</h1>
          </Link>
        </div>
      </header>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="browse" element={<div>Browse</div>} />
        <Route path="register" element={<div>Register</div>} />
      </Routes>
      <footer>
        {/* TODO: (Stretch goal) Add "Learn More" banner that routes to pricing page */}
        <div className="line-break" />
        <div className="footer-content max-width">
          <p>Questions? Call 1-888-555-2222</p>
        </div>
      </footer>
    </div>
  );
}
