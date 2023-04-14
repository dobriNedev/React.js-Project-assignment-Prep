import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { useContext } from "react";
import { authContext } from "../../contexts/autContext";

const Login = () => {
  const { onLoginSubmit } = useContext(authContext);

  const { values, onChangeHandler, onSubmit } = useForm(
    {
      email: "",
      password: "",
    },
    onLoginSubmit
  );

  return (
    <form method="POST" onSubmit={onSubmit}>
      <h2>Login to start managing tasks and employees</h2>
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
      <button type="submit">Login</button>
      <div className="down-div">
        <p>
          Don't have an account yet? Just{" "}
          <Link to="/auth/register">register</Link> please!
        </p>
      </div>
    </form>
  );
};

export default Login;

// import useForm from "../../hooks/useForm";
// import { useContext } from "react";
// import { authContext } from "../../contexts/autContext";

// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Login = () => {
//   const { onLoginSubmit } = useContext(authContext);

//   const { values, onChangeHandler, onSubmit } = useForm(
//     {
//       email: "",
//       password: "",
//     },
//     onLoginSubmit
//   );
//   return (
//     <div>
//       <h2>Login</h2>
//       <Form onSubmit={onSubmit}>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             onChange={onChangeHandler}
//             value={values.email}
//           />
//           <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//           </Form.Text>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             onChange={onChangeHandler}
//             value={values.password}
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Login
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default Login;
