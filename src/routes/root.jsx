import { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";

export default function Root() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    useEffect(() => {
        console.log({ email });
    })

    return (
        <div className="root__main">
            <header>
                <div className="max-width">
                    <Link to="/"><h1 className="logo">WEBFLIX</h1></Link>
                </div>
            </header>
            <Outlet />
            <Routes>
                <Route
                    index element={
                        <div className="max-width">
                            <h2 className="h1">Unlimited movies, TV shows, and more</h2>
                            <p>Watch anywhere. Cancel anytime.</p>
                            <p>Ready to watch? Enter your email to sign in.</p>
                            <div>
                                <input type="email" name="email" placeholder="Email address" value={email} onChange={e => handleEmailChange(e)} />
                                <Link to="sign-in" className="button" state={{ email: email }}>Sign In</Link>
                            </div>
                        </div>
                    }>
                </Route >
            </Routes >
            <footer>
                <div className="line-break" />
                <div className="footer-content max-width">
                    <p>Questions? Call 1-844-505-2993</p>
                    {/* TODO: Add footer links */}
                </div>
            </footer>
        </div >
    )
}