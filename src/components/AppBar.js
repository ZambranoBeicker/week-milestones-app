import React from "react"
import styled from "styled-components"


const Bar = styled.div`
	
	padding: 1rem 0;
	background: #E7B48F;
	position:absolute;
	width:100%;
	bottom:0;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	max-width:265px;
	margin-right: auto;
	margin-left: auto;
`;


const IconButton = styled.button`
	margin: 0 auto;
	border:0;
	background:transparent;
	cursor:pointer;
`;

const AppBar = ({createOnClick}) =>{
	return(
		<Bar>
			<Wrapper>
				<IconButton><img src="./home.svg" alt="IconButton"/></IconButton>  
				<IconButton onClick={createOnClick}><img src="./create.svg" alt="IconButton"/></IconButton>  
				<IconButton><img src="./category.svg" alt="IconButton"/></IconButton>  
			</Wrapper>
		</Bar>
	)
}

export default AppBar
