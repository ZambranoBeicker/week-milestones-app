import styled from "styled-components"

const Wrapper = styled.div`

	font-family:Helvetica;
	background-color:#FCFDFC;
	padding-top:1rem;
	min-height:100vh;
	position:relative;
`;

const Link = styled.a`
	display:block;
	color:#5156D4;
	margin:1rem auto;
	margin-bottom:0;
	max-width:145px;
	&:hover{
		cursor: pointer;
		text-decoration: underline;
	}	
`

const FormWrapper = styled.div`
	background: #FCFDFC;
	max-width: 480px;
	color:#16300D;
	border-radius:10px;
	margin: 0 auto;
	box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.25);
	padding: 1rem;
	
`;

const Input = styled.input`
	border-radius:5px;
	padding: 1rem;
	background: #F1FAEE;
	margin: 0 auto;
	margin-top: .75rem;
	border: 1px solid #CDDDC8;
	display:block;
	width: calc(100% - 2rem);
	border-radius: 5px;
	transition: .15s;
	&:placeholder:{
		color: #8F9E9F
	}
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
	font-size: 1.25rem;
`;

const Form = styled.form`
	max-width: 360px;
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
