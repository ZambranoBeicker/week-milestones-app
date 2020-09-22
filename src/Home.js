import React,{ useEffect, useContext, useState } from 'react';
//import MilestoneCard from "./components/MilestoneCard.js"
//import TitleCategory from "./components/TitleCategory.js"
import MilestoneList from "./components/MilestoneList.js"
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
	const [milestoneLists, setMilestoneLists] = useState([])

	/*useEffect(()=>{
		firebase.milestone().get()
			.then(snapshots =>{

				const milestones = [];
				snapshots.forEach((item)=>{
					milestones.push({...item.data()})
					})
					
				setMilestone(milestones.map((data, index)=> {
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
	})},[])*/

	useEffect(()=>{
		
		firebase.milestone().get()
			.then(snapshots =>{
				const categoriesData = [{title:"", array:[]}]
				let indexes = 0;
				snapshots.forEach((milestone)=>{
				
				if(categoriesData.some((value, index) => {
					
					if(value.title === ""){
						indexes = index
						return true

					}else if(value.title !== milestone.data().categoryTitle){
						return false

					}else{
						indexes = index
						return true
					}

				})){

					if(indexes === (categoriesData.length - 1)){

						categoriesData[indexes].title = milestone.data().categoryTitle
						categoriesData[indexes].array.push(milestone.data())
						categoriesData.push({title: "", array:[]})
					} 
					else{
					categoriesData[indexes].array.push(milestone.data())

					}

					}else{

						categoriesData[indexes].push(milestone.data())
					}

				})
				
				
				setMilestoneLists(categoriesData.map((data, index)=>{
						if(data.title !== ""){
							return(
							<div key={index}>
								<MilestoneList title={data.title} cardsData={data.array}/>
							</div>)
						}else{
							return;
						}
						
							
			}))


			})

	},[])


  return (
		<>
			<Wrapper>
				<ModalForm modalDisplay={{visible:modalVisible, setVisible: setModalVisible}} />
				{ <p>Cargando papá. Esperese un momentico...</p> && milestoneLists }
				<AppBar createOnClick={()=>{setModalVisible("block")}}/>
			</Wrapper>
		</>
  );
}

export default Home;
