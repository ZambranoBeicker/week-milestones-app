import React,{ useEffect, useContext, useState } from 'react';
import TitleCategory from "./TitleCategory.js"
import MilestoneCard from "./MilestoneCard.js"
import styled from "styled-components"
import {FirebaseContext} from "../firebase/index.js"


const Wrapper = styled.div`

	font-family:Helvetica;
	background-color:#F2DDCF;
	padding-top:1rem;
	position:relative;
	z-index:1;
`;



function MilestoneList({title, cardsData }) {

	const firebase = useContext(FirebaseContext)
	const [milestoneCards, setMilestoneCards] = useState([])

	useEffect(()=>{
				setMilestoneCards(cardsData.map((data, index)=> {
					return(
						<React.Fragment key={index}>	
							<MilestoneCard 
								title={data.milestoneTitle} 
								category={data.categoryTitle}
								date={data.date}
							/>
						</React.Fragment>
					)
				}))
	},[cardsData])

  return (
		<>
			<Wrapper>
				<TitleCategory text={title} />
				{<p>No hay nada papá</p> && milestoneCards}
			</Wrapper>
		</>
  );
}

export default MilestoneList;
