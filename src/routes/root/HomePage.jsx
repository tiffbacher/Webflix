import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function HomePage() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div className="max-width">
      <h2 className="h1">Unlimited movies, TV shows, and more</h2>
      <p>Watch anywhere. Cancel anytime.</p>
      <p>Ready to watch? Enter your email to sign in.</p>
      <div>
        <input type="email" name="email" placeholder="Email address" value={email} onChange={e => handleEmailChange(e)} />
        <Link to="sign-in" className="button" state={{ email: email }}>Sign In</Link>
      </div>
    </div>
  )
}