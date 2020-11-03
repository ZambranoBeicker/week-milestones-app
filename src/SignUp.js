import React from "react";
import { useState, useContext } from "react";
import { FirebaseContext } from "./firebase/index.js";
import { withRouter } from "react-router-dom";
import {
  Submit,
  Form,
  Title,
  TextWrapper,
  Wrapper,
  FormWrapper,
  Input,
  Link,
} from "./components/styles/Sign.js";

function SignUp({ history }) {
  const [emailValue, setEmailValue] = useState(null);
  const [passwordValue, setPasswordValue] = useState(null);

  const firebase = useContext(FirebaseContext);

  return (
    <>
      <Wrapper>
        <FormWrapper>
          <TextWrapper>
            <Title>Sign up to register your Milestones</Title>
          </TextWrapper>
          <Form>
            <Input
              type="email"
              placeholder="email"
              onChange={(e) => {
                setEmailValue(e.target.value);
              }}
            />
            <Input
              type="password"
              placeholder="password"
              onChange={(e) => {
                setPasswordValue(e.target.value);
              }}
            />
            <Submit
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                firebase
                  .doCreateUserWithEmailAndPassword(emailValue, passwordValue)
                  .then(() => {
                    history.push("/");
                  });
              }}
            />
            <Link>Don’t have an account yet? Sign up</Link>
          </Form>
        </FormWrapper>
      </Wrapper>
    </>
  );
}

export default SignUp;
