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
	padding: 5rem 0;
	padding-top: 0;
`;

const Warning = styled.div`
	text-align:center;
	font-size: 1.5rem;
	padding-top:2rem;
	color:#98234A;
`

const WarningText = styled.p`
	margin:0;
`


function Home() {

	const firebase = useContext(FirebaseContext)
	const [modalVisible, setModalVisible] = useState("none")
	const [milestoneLists, setMilestoneLists] = useState([])
	const [newMilestones, setNewMilestones] = useState(0)

	const mapMilestones = milestonesData =>{
		return milestonesData.map((data, index)=>{
			
			if(data.title !== ""){
				return	<div key={index}><MilestoneList title={data.title} cardsData={data.array}/></div>
			}else{return } 
		})}

	useEffect(()=>{
	
	try {
		firebase.getMilestoneRef().get()
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
				
				if(categoriesData.length > 1){
					setMilestoneLists(categoriesData)
					
				}else{
					setMilestoneLists(<Warning><WarningText>No hay nada papá. Tiene que crear una Milstone</WarningText></Warning>)
					
				}

			})}
			catch(err){
				console.log("This is the error: " + err)
			}

	},[])


	useEffect(()=>{

		if(newMilestones !== 0) {
			let indexes = 0
			if(milestoneLists.some((data, index)=> {indexes = index;return newMilestones.title === data.title})){

				setMilestoneLists(milestoneLists.map((data, index)=>{
					if(index === indexes) return {title: data.title, array:[...data.array, newMilestones.data]}
					else return data
					 
				}))
			}else{
				setMilestoneLists([...milestoneLists, {title: newMilestones.title, array: [newMilestones.data]}])
			}

			
		}else{
			return;
		}
	},[newMilestones])

  return (
		<>
			<Wrapper>
				<ModalForm setMilestone={setNewMilestones} modalDisplay={{visible:modalVisible, setVisible: setModalVisible}} />
				{ <p>Cargando papá. Esperese un momentico...</p> && mapMilestones(milestoneLists) }
				<AppBar createOnClick={()=>{setModalVisible("block")}}/>
			</Wrapper>
		</>
  );
}

export default Home
