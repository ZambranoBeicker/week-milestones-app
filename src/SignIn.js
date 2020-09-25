import React from 'react';
import { useState, useContext } from "react"
import styled from "styled-components"
import { Firebase, FirebaseContext } from "./firebase/index.js"
import { withRouter} from "react-router-dom"
import { Submit, Form, Title, TextWrapper, Wrapper, FormWrapper, Link, Input } from "./components/styles/Sign.js"



function SignIn({history}) {

	const [emailValue, setEmailValue] = useState(null)	
	const [passwordValue, setPasswordValue] = useState(null)	

	const firebase = useContext(FirebaseContext)

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
						<Link onClick={()=>{history.push("/sign-up")}}>Register</Link>
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
