import React,{ useState, useEffect, useContext } from 'react';
import CategoryCard from "./components/CategoryCard.js"
import AppBar from "./components/AppBar.js"
import styled from "styled-components"
import { FirebaseContext } from "./firebase/index.js"

const Wrapper = styled.div`

	font-family:Helvetica;
	background-color:#F2DDCF;
	padding-top:1rem;
	min-height:100vh;
	position:relative;
`;

function Category() {

	const [categoryComponents, setCategoryComponents] = useState([])
	const firebase = useContext(FirebaseContext)

	useEffect(()=>{
		
		firebase.milestone().get()
			.then(snapshots =>{
				const categoriesData = [{title:"", array:[]}]
				let indexes = 0;
				snapshots.forEach((milestone)=>{

					if(categoriesData.some((value, index) => {indexes = index; return value.title != milestone.data().categoryTitle && value.title === ""})){

						categoriesData[indexes].title = milestone.data().categoryTitle 
						categoriesData[indexes].array.push(milestone.data().categoryTitle)
						categoriesData.push({title:"",array:[]})
					}else{

						categoriesData[indexes].array.push()
					}

				})
				
				setCategoryComponents(categoriesData.map((data, index)=>{
						if(data.title != ""){
							
						return (
							<div key={index}>
								<CategoryCard text={data.title} />
							</div>
						)}else{
							return;
						}
						
							
			}))


			})

	},[])

  return (
		<>
			<Wrapper>
				{ <p>No hay nada papá</p> && categoryComponents }
				<AppBar />
			</Wrapper>
		</>
  );
}

export default Category
