import React from 'react';
import { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import { Firebase, FirebaseContext } from "./firebase/index.js"
import { withRouter } from "react-router-dom"

const Wrapper = styled.div`

	font-family:Helvetica;
	background-color:#F2DDCF;
	padding-top:1rem;
	min-height:100vh;
	position:relative;
`;

const FormWrapper = styled.div`
	background: #E7B48F;
	max-width: 245px;
	color:#98234A;
	border-radius:5px;
	margin: 0 auto;
	padding: 1rem;
	
`;

const Input = styled.input`
	border-radius:5px;
	padding: .5rem;
	background: white;
	margin: 0 auto;
	margin-top: .75rem;
	border:0;
	display:block;
	max-width: 145px;
`;

const TextWrapper = styled.div`
	max-width: 225px;
  margin: 0 auto;
	text-align: center;
`;

const Title = styled.h2`
	font-size: 1.5rem;
`;

const Form = styled.form`
	max-width: 225px;
	margin: 1rem auto;
`;

const Submit = styled.input`
	border:0;
	border-radius: 5px;
	color: #F2DDCF;
	background: #98234A;
	padding: .5rem .75rem;
	margin: 1rem;
	margin-left: 2.15rem;
	cursor: pointer;
`;

function SignIn({history}) {

	const [emailValue, setEmailValue] = useState(null)	
	const [passwordValue, setPasswordValue] = useState(null)	

	const firebase = useContext(FirebaseContext)

	useEffect(()=>{
		console.log(emailValue, passwordValue)
	},[emailValue, passwordValue])

  return (
		<>
			<Wrapper>
				<FormWrapper>
					<TextWrapper>
						<Title>Sign in to use my app</Title>
					</TextWrapper>
					<Form>
						<Input type="email" placeholder="email" onChange={(e)=>{setEmailValue(e.target.value)}}/>
						<Input type="password" placeholder="password" onChange={(e)=>{setPasswordValue(e.target.value)}}/>
						<Submit type="submit" onClick={(e)=>{ 
							e.preventDefault()
							
							firebase.doSignInWithEmailAndPassword(emailValue, passwordValue)
								.then(()=>{
									setEmailValue("")
									setPasswordValue("")
									history.push("/app")
								})
								.catch((error)=> console.log(error))
						}}/>
					</Form>
				</FormWrapper>
			</Wrapper>
		</>
  );
}

export default withRouter(SignIn);
