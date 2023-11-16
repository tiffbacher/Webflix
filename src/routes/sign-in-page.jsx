export default function SignInPage() {
    return (
        <>
            <form>
                <h2>Sign In</h2>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email"></input>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password"></input>
                <input type="submit" value="Sign In"></input>
            </form>
        </>
    )
}
