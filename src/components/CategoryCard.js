import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
	max-width:265px;
	margin-right: auto;
	margin-left: auto;
	margin-top:1rem;
	color: #98234A;
	background: #E7B48F;
	border-radius: 5px;
`;

const TextWrapper = styled.div`	
	display:flex;
	margin-left: 1rem;
`;  

const Title = styled.h2`
	font-size: 1.5rem;
	font-weight: semibold;
	margin: .5rem 0;
`;

const CategoryCard = ({text})=>{

	return(
		<Wrapper>
			<TextWrapper>
				<Title>{text}</Title>
			</TextWrapper>
		</Wrapper>
	)
}

export default CategoryCard
