import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
	display:flex;
	justify-content:space-between;
	max-width:265px;
	margin-right: auto;
	margin-left: auto;
	margin-top:1rem;
	color: #98234A;
	background: #E7B48F;
	border-radius: 5px;
	padding-right:1.25rem
`;

const MilestoneQuantity = styled.div`	
	display:flex;
	align-items:center;

`

const MilestoneIcon = styled.img`	
	display:block;
	width:.5rem;
	height:auto;
`

const TextWrapper = styled.div`	
	display:flex;
	margin-left: 1rem;
`;  

const Quantity = styled.h6`
	font-size: .875rem;
	font-weight: normal;
	margin:0;
	margin-right:.25rem;
`;

const Title = styled.h2`
	font-size: 1.5rem;
	font-weight: semibold;
	margin: .5rem 0;
`;

const CategoryCard = ({text, quantity = 10})=>{

	return(
		<Wrapper>
			<TextWrapper>
				<Title>{text}</Title>
			</TextWrapper>
			<MilestoneQuantity>
				<Quantity>{quantity}</Quantity>
				<MilestoneIcon src="./milestones.svg" alt="Milestone Icon"/>
			</MilestoneQuantity>
		</Wrapper>
	)
}

export default CategoryCard
