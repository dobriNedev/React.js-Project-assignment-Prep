const Register = () => {
    return(
        <form method="POST">
            <h1>Register</h1>
            <label forhtml="firstName">Firts name:</label>
            <input type="text" id="firstName" name="firstName" required/>
            <br></br>
            <label forhtml="lastName">Last name:</label>
            <input type="text" id="lastName" name="lastName" required/>
            <br></br>
            <label forhtml="email">Email:</label>
            <input type="email" id="email" name="email" required/>
            <br></br>
            <label forhtml="password">Password:</label>
            <input type="password" id="password" name="password" required/>
            <br></br>
            <label forhtml="rePass">Confirm Password:</label>
            <input type="password" id="rePass" name="rePass" required/>
            <br></br>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;