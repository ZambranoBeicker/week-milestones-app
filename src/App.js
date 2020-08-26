import React from 'react';
import MilestoneCard from "./components/MilestoneCard.js"
import TitleCategory from "./components/TitleCategory.js"
import AppBar from "./components/AppBar.js"
import styled from "styled-components"

const Wrapper = styled.div`

	font-family:Helvetica;
	background-color:#F2DDCF;
	padding-top:1rem;
	min-height:100vh;
	position:relative;
`;


function App() {
  return (
		<>
			<Wrapper>
				<TitleCategory text="Edad" />
   			<MilestoneCard /> 
   			<MilestoneCard /> 
   			<MilestoneCard /> 
   			<MilestoneCard /> 
				<AppBar />
			</Wrapper>
		</>
  );
}

export default App;
