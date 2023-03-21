const Login = () => {
    return(
        <form method="POST">
            <h2>Login to start managing tasks and employees</h2>
            <br></br>
            <label forhtml="email">Email:</label>
            <input type="email" id="email" name="email" required/>
            <br></br>
            <label forhtml="password">Password:</label>
            <input type="password" id="password" name="password" required/>
            <br></br>
            <button type="submit">Login</button>
            <div className="down-div">
                <p>Don't have an account yet? Just <a href="/auth/register">register</a> please!</p>
            </div>
       </form>
      
    );
};

export default Login;