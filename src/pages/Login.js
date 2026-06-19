function Login() {
  return (
    <div>
      <h1>LoadShare</h1>
      <p>Turning Empty Miles into Profitable Deliveries</p>

      <form>
        <input
          type="text"
          placeholder="Mobile Number"
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;