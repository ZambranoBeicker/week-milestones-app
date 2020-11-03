import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-family: Helvetica;
  background-color: #fcfdfc;
  padding-top: 1rem;
  min-height: 100vh;
  position: relative;
`;

const A = styled.a`
  display: block;
  color: #5156d4;
  margin: 1rem auto;
  margin-bottom: 0;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const FormWrapper = styled.div`
  background: #fcfdfc;
  max-width: 480px;
  color: #16300d;
  border-radius: 10px;
  margin: 0 auto;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.25);
  padding: 1rem;
`;

const Input = styled.input`
  border-radius: 5px;
  padding: 1rem;
  background: #f1faee;
  margin: 0 auto;
  margin-top: 0.75rem;
  border: 1px solid #cdddc8;
  display: block;
  width: calc(100% - 2rem);
  border-radius: 5px;
  transition: 0.15s;
  &:placeholder: {
    color: #8f9e9f;
  }
  &:hover {
    background: #f0f0f0;
    border-color: #f0f0f0;
  }
  &:focus {
    border-color: #98234a;
  }
`;

const TextWrapper = styled.div`
  ${({ widthMaxWidth }) =>
    widthMaxWidth ? "max-width: 225px;" : "width: 100%;"}
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.25rem;
`;

const Form = styled.form`
  max-width: 360px;
  margin: 1rem auto;
`;

const Submit = styled.input`
  border: 0;
  border-radius: 5px;
  color: #f2ddcf;
  background: #98234a;
  padding: 0.5rem 0.75rem;
  margin: 1rem;
  margin-left: 2.15rem;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: #88133a;
  }
`;

const Link = ({ children }) => {
  return (
    <TextWrapper>
      <A>{children}</A>
    </TextWrapper>
  );
};

export { Submit, Form, Title, TextWrapper, Wrapper, FormWrapper, Link, Input };
