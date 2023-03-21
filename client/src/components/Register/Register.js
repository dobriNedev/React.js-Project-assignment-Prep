import useForm from "../../hooks/useForm";
import { authContext } from "../../contexts/autContext";
import { useContext } from "react";

const Register = () => {

    const { onRegisterSubmit } = useContext(authContext);

    const { values, onChangeHandler, onSubmit } = useForm({
        firstName: '', 
        lastName: '',
        email: '',
        password: '',
        rePass: ''
    }, onRegisterSubmit);

    return(
        <form method="POST" onSubmit={onSubmit}>
            <h1>Register</h1>
            <label forhtml="firstName">Firts name:</label>
            <input 
                type="text" 
                id="firstName" 
                name="firstName" 
                required
                onChange={onChangeHandler}
                value={values.firstName}
                />
            <br></br>
            <label forhtml="lastName">Last name:</label>
            <input 
                type="text" 
                id="lastName" 
                name="lastName" 
                required
                onChange={onChangeHandler}
                value={values.lastName}
                />
            <br></br>
            <label forhtml="email">Email:</label>
            <input 
                type="email" 
                id="email" 
                name="email" 
                required
                onChange={onChangeHandler}
                value={values.email}
                />
            <br></br>
            <label forhtml="password">Password:</label>
            <input 
                type="password" 
                id="password" 
                name="password" 
                required
                onChange={onChangeHandler}
                value={values.password}
                />
            <br></br>
            <label forhtml="rePass">Confirm Password:</label>
            <input 
                type="password" 
                id="rePass" 
                name="rePass" 
                required
                onChange={onChangeHandler}
                value={values.rePass}
                />
            <br></br>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;