import { Link, Route, Routes } from "react-router-dom";
import { HomePage } from "@/routes/root";
import { SignInPage } from "@/routes/sign-in";

export default function App() {
  return (
    <div className="app flex flex-col justify-between items-center h-full">
      <header className="w-full">
        {/* TODO: Add sign-in button to header */}
        <div className="max-width mx-auto">
          <Link to="/">
            <h1 className="logo text-red-600 my-12 tracking-widest font-black text-5xl">
              WEBFLIX
            </h1>
          </Link>
        </div>
      </header>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="browse" element={<div>Browse</div>} />
        <Route path="register" element={<div>Register</div>} />
      </Routes>
      <footer className="w-full">
        {/* TODO: (Stretch goal) Add "Learn More" banner that routes to pricing page */}
        <div className="line-break w-full h-2 bg-neutral-700" />
        <div className="footer-content max-width mx-auto py-8">
          <p>Questions? Call 1-888-555-2222</p>
        </div>
      </footer>
    </div>
  );
}
