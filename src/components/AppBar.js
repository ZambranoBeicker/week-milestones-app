import React from "react"
import styled from "styled-components"
import { withRouter } from "react-router-dom"

const Bar = styled.div`
	
	padding: 1rem 0;
	background: #E7B48F;
	position:fixed;
	width:100%;
	bottom:0;
	z-index:10;
	@media screen and (min-width:1024px){
		top:0;
		left:0;
		bottom:0;
		width:100px;

	}
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	max-width:265px;
	margin-right: auto;
	margin-left: auto;
	@media screen and (min-width:1024px){
		flex-direction: column;
	}
`;


const IconButton = styled.button`
	margin: 0 auto;
	border:0;
	background:transparent;
	cursor:pointer;
	@media screen and (min-width:1024px){
		margin:1rem 0;
	}
`;

const AppBar = ({createOnClick, history}) =>{
	return(
		<Bar>
			<Wrapper>
				<IconButton onClick={()=>{history.push("/app")}}><img src="./home.svg" alt="IconButton"/></IconButton> 
				<IconButton onClick={createOnClick}><img src="./create.svg" alt="IconButton"/></IconButton>  
				<IconButton onClick={()=>{history.push("/categories")}}><img src="./category.svg" alt="IconButton"/></IconButton> 
			</Wrapper>
		</Bar>
	)
}

export default withRouter(AppBar)
