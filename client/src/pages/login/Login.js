import "./login.scss";

const Login = () => {
  return (
    <div className="login row">
      <div className="login-existing col-12 col-lg-6">
        <h2>Login</h2>
        <form className="login-form">
          <div>
            <label className="label-stacked">
              Email
              <input type="text" name="email" className="login-input" />
            </label>
          </div>
          <div>
            <label className="label-stacked">
              Password
              <input type="password" name="password" className="login-input" />
            </label>
          </div>
          <div>
            <input type="submit" value="Login" className="login-submit" />
          </div>
        </form>
      </div>
      <div className="login-register col-12 col-lg-6">
        <h2>Register</h2>
        <form className="login-form">
          <label className="label-stacked">
            First name
            <input type="text" name="firstName" className="login-input" />
          </label>
          <label className="label-stacked">
            Last name
            <input type="text" name="lastName" className="login-input" />
          </label>
          <label className="label-stacked">
            Email
            <input type="text" name="email" className="login-input" />
          </label>
          <label className="label-stacked">
            Password
            <input type="password" name="password" className="login-input" />
          </label>
          <label className="label-stacked">
            Confirm Password
            <input
              type="password"
              name="confirmPassword"
              className="login-input"
            />
          </label>
          <input type="submit" value="Register" className="login-submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
