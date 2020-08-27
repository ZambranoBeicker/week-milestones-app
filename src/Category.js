import React from 'react';
import CategoryCard from "./components/CategoryCard.js"
import AppBar from "./components/AppBar.js"
import styled from "styled-components"

const Wrapper = styled.div`

	font-family:Helvetica;
	background-color:#F2DDCF;
	padding-top:1rem;
	min-height:100vh;
	position:relative;
`;


function Category() {
  return (
		<>
			<Wrapper>
				<CategoryCard text="Edad" />
				<CategoryCard text="Edad" />
				<CategoryCard text="Edad" />
				<AppBar />
			</Wrapper>
		</>
  );
}

export default Category;
