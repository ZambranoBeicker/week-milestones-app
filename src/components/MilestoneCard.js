import React from "react"
import styled from "styled-components"


const CardInfoWrapper = styled.div`
	display: flex;
	margin-top: .75rem;
	
`;
const Wrapper = styled.div`
	max-width: 245px;
	padding: .75rem 0 .75rem 1.25rem; 
	margin: 1rem auto;
	border-radius: 5px;
	background-color:#E7B48F;
	color:#98234A;
`;


const Title = styled.h4`
	font-size: 1.125rem;
	margin: .25rem 0;
	font-weight: normal;
`;


const Date = styled.p`
	font-size: 12px;
	margin: 0;
	margin-right: auto;
`;

const Category = styled.p`
	font-size: 12px;
	margin: 0;
	margin-right: 1rem;
`;

const MilestoneCard = () =>{

	return(
		
		<Wrapper>
			<Title>Cumplí 15 años</Title>
		  <CardInfoWrapper>
			  <Category>Edad</Category>
				<Date>12/12/12</Date>
		  </CardInfoWrapper>
		  
		</Wrapper>
	)
}

export default MilestoneCard
