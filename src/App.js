import React from 'react';
import MilestoneCard from "./components/MilestoneCard.js"
import styled from "styled-components"

const Wrapper = styled.div`

	font-family:Helvetica;
	background-color:#F2DDCF;
	padding-top:1rem;
`;


function App() {
  return (
	<Wrapper>
   	<MilestoneCard /> 
   	<MilestoneCard /> 
   	<MilestoneCard /> 
   	<MilestoneCard /> 
	</Wrapper>
  );
}

export default App;
