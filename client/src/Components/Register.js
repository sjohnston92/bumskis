import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useFormInput } from "../customHooks/useFormInput";
import { AuthContext } from "../providers/AuthProvider";
import {Form,Button,Container} from 'react-bootstrap';

const Register = (props) => {
  const firstName = useFormInput("", "First Name");
  const lastName = useFormInput("", "Last Name");
  const email = useFormInput("", "Email");
  const password = useFormInput("", "Password");
  const passwordConfrimation = useFormInput("", "Password Confrimation");

  const { handleRegister } = useContext(AuthContext);
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    //check valid email
    if (password.value !== passwordConfrimation.value) {
      alert("passwords don not match");
    } else {
    
      // register user
      handleRegister({
        firstName: firstName.value,
        lasttName: lastName.value,
        email: email.value,
        password: password.value,
        passwordConfrimation: passwordConfrimation.value,
      },
      history
      );
    }
  };
  return (
    <Container>
      <h1 className="landing">Register</h1>
      <Form onSubmit={handleSubmit}>
      <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control autoFocus {...firstName} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control autoFocus {...lastName} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control autoFocus {...email} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" {...password} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control type="password" {...passwordConfrimation} />
        </Form.Group>
        <br />
        <br />
        <Button variant="success" type="submit">Register</Button>
      </Form>
      <br />
      <Button variant="info" href="/">Back</Button>
    </Container>
  );
};

export default Register;
