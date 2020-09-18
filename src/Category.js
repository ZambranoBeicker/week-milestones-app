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
				const categoriesData = []

				snapshots.forEach((milestone)=>{
					categoriesData.push(milestone.data().categoryTitle)
				})
				
				setCategoryComponents(categoriesData.map((category, index)=>
						<div key={index}>
							<CategoryCard text={category} />
						</div>
				))


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
