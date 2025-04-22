const Login = () => {
    return <>
    <div className="fillparent centercontent">
  <div style={{ height: 200, width: 300, background: "skyblue", fontSize: 12 }}>
    <h1>Login to your account</h1>
    <form style={{ marginTop: 30 }}>
      <input type="text" placeholder="Email" />
      <br />
      <input type="password" placeholder="Password" />
      <br />
      <input type="button" defaultValue="Sign In" />
      <br />
    </form>
  </div>
</div>

    </>;
  };
  
  export default Login;