import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
        <>
            <div>
                <h1>Unlimited movies, TV shows, and more</h1>
                <p>Watch anywhere. Cancel anytime.</p>
                <p>Ready to watch? Enter your email to sign in.</p>
                <input type="text" placeholder="Email address" />
                <Link to="sign-in" className="button">Sign In</Link>
            </div>
        </>
    )
}