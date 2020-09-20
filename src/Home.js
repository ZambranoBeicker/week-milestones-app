import React,{ useEffect, useContext, useState } from 'react';
import MilestoneCard from "./components/MilestoneCard.js"
import TitleCategory from "./components/TitleCategory.js"
import AppBar from "./components/AppBar.js"
import ModalForm from "./components/ModalForm.js"
import styled from "styled-components"
import {FirebaseContext} from "./firebase/index.js"


const Wrapper = styled.div`

	font-family:Helvetica;
	background-color:#F2DDCF;
	padding-top:1rem;
	min-height:100vh;
	position:relative;
`;



function Home() {

	const firebase = useContext(FirebaseContext)
	const [modalVisible, setModalVisible] = useState("none")
	const [milestoneCards, setMilestoneCards] = useState([])

	useEffect(()=>{
		firebase.milestone().get()
			.then(snapshots =>{

				const milestones = [];
				snapshots.forEach((item)=>{
					milestones.push({...item.data()})
					})
					
				setMilestoneCards(milestones.map((data, index)=> {
					return(
						<div key={index}>	
							<MilestoneCard 
								title={data.milestoneTitle} 
								category={data.categoryTitle}
								date={data.date}
							/>
						</div>
					)
				}))
	})},[])
  return (
		<>
			<Wrapper>
				<ModalForm modalDisplay={{visible:modalVisible, setVisible: setModalVisible}} />
				<TitleCategory text="Edad" />
				{<p>No hay nada papá</p> && milestoneCards}
				<AppBar createOnClick={()=>{setModalVisible("block")}}/>
			</Wrapper>
		</>
  );
}

export default Home;
