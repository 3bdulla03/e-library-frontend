const SignIn = () => {

    return(
        <>
        <form>
      <h2>Sign In</h2>

      <label>
        Username
        <input
          name="username"
          type="text"
          required
        />
      </label>

      <label>
        Password
        <input
          name="password"
          type="password"
          required
        />
      </label>

      <button type="submit">Sign In</button>
    </form>
        </>
    )
}

export default SignIn