import React from 'react';
import styled from "styled-components"

const Wrapper = styled.div`

	font-family:Helvetica;
	background-color:#F2DDCF;
	padding-top:1rem;
	min-height:100vh;
	position:relative;
`;

const Link = styled.a`
	display:block;
	color:blue;
	margin:1rem auto;
	margin-bottom:0;
	max-width:145px;
	&:hover{
		cursor: pointer;
		text-decoration: underline;
	}	
`

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
	border:2px solid white;
	display:block;
	max-width: 145px;
	transition: .15s;
	&:hover{
		background:#f0f0f0;
		border-color:#f0f0f0;
	}
	&:focus{
		border-color:#98234A;
	}
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
	transition:.2s;
	&:hover{
		background:#88133A
	}
`;



export { Submit, Form, Title, TextWrapper, Wrapper, FormWrapper, Link, Input }
