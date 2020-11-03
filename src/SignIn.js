import React from "react";
import { useState, useContext } from "react";
import { Firebase, FirebaseContext } from "./firebase/index.js";
import { withRouter } from "react-router-dom";
import {
  Submit,
  Form,
  Title,
  TextWrapper,
  Wrapper,
  FormWrapper,
  Link,
  Input,
} from "./components/styles/Sign.js";

function SignIn({ history }) {
  const [emailValue, setEmailValue] = useState(null);
  const [passwordValue, setPasswordValue] = useState(null);

  const firebase = useContext(FirebaseContext);

  return (
    <>
      <Wrapper>
        <FormWrapper>
          <TextWrapper>
            <Title>Rigister your Milestones now!</Title>
          </TextWrapper>
          <Form>
            <Input
              type="text"
              placeholder="Enter your last name"
            />
            <Input
              type="text"
              placeholder="Enter your name"
            />
            <Input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => {
                setEmailValue(e.target.value);
              }}
            />
            <Input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => {
                setPasswordValue(e.target.value);
              }}
            />
            <Input
              type="password"
              placeholder="Confirm your password"
            />
            <Submit
              type="submit"
              onClick={(e) => {
                e.preventDefault();

                firebase
                  .doSignInWithEmailAndPassword(emailValue, passwordValue)
                  .then(() => {
                    setEmailValue("");
                    setPasswordValue("");
                    history.push("/app");
                  })
                  .catch((error) => console.log(error));
              }}
            />
            <Link
              onClick={() => {
                history.push("/sign-up");
              }}
            >
              Already have an account? Log in
            </Link>
          </Form>
        </FormWrapper>
      </Wrapper>
    </>
  );
}

export default withRouter(SignIn);
