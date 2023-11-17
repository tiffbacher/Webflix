import { useState } from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';

import './root.css';

export default function Root() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    return (
        <div className="root__main">
            {/* TODO: Add sign-in button to header */}
            <header>
                <div className="max-width">
                    <Link to="/"><h1 className="logo">WEBFLIX</h1></Link>
                </div>
            </header>
            <Outlet />
            <Routes>
                <Route
                    // TODO: Move this element into it's own file and add field validation
                    // TODO: Turn this button into a "Get Started" link that routes to registration
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
            {/* TODO: Add "Learn More" banner that routes to pricing page */}
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