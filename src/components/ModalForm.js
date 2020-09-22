import React,{ useState, useContext} from "react"
import styled from "styled-components"
import { FirebaseContext } from "../firebase/index.js"


const FixedWrapper = styled.div`
	position:fixed;
	width:100%;
	display: ${({display})=> display}
`

const Wrapper = styled.div`

	font-family:Helvetica;
	background-color:transparent;
	padding-top:1rem;
	min-height:100vh;
	position:relative;
`;

const FormWrapper = styled.div`
	position:relative;
	background: #E7B48F;
	max-width: 245px;
	color:#98234A;
	border-radius:5px;
	margin: 0 auto;
	padding: 1rem;
	
`;

const Input = styled.input`
	border-radius:5px;
	padding: .5rem;
	background: white;
	margin: 0 auto;
	margin-top: .75rem;
	border:0;
	display:block;
	max-width: 145px;
`;

const TextWrapper = styled.div`
	max-width: 225px;
  margin: 0 auto;
	text-align: center;
`;

const Title = styled.h2`
	font-size: 1.5rem;
`;

const Form = styled.form`
	max-width: 225px;
	margin: 1rem auto;
`;

const Submit = styled.input`
	border:0;
	border-radius: 5px;
	color: #F2DDCF;
	background: #98234A;
	padding: .5rem .75rem;
	margin: 1rem;
	margin-left: 2.15rem;
	cursor: pointer;
`;

const CloseButton = styled.div`
	display:flex;
	justify-content:center;
	position:absolute;
	right:-10px;
	top:-10px;
	width:2rem;
	height:2rem;
	border-radius:50%;
	background:#98234A;
	cursor:pointer;
`
const CloseIcon = styled.img`
	display:block;
	max-width:100%;
	height:auto;
`

const ModalForm = ({modalDisplay})=>{

	const [milestoneValue, setMilestoneValue] = useState(null)	
	const [categoryValue, setCategoryValue] = useState(null)	

	const firebase = useContext(FirebaseContext)

  return (
		<FixedWrapper display={modalDisplay.visible}>
			<Wrapper>
				<FormWrapper>
					<CloseButton onClick={()=>{modalDisplay.setVisible("none")}}>
						<CloseIcon src="Close.svg" alt="Close Button"/>
					</CloseButton>
					<TextWrapper>
						<Title>Create a new Milestone</Title>
					</TextWrapper>
					<Form>
						<Input type="text" placeholder="Milestone" onChange={(e)=>{setMilestoneValue(e.target.value)}}/>
						<Input type="text" placeholder="Category" onChange={(e)=>{setCategoryValue(e.target.value)}}/>
						<Submit type="submit" onClick={(e)=>{ 
							e.preventDefault()
							
							var today = new Date();
							var dd = String(today.getDate()).padStart(2, '0');
							var mm = String(today.getMonth() + 1).padStart(2, '0');
							var yyyy = today.getFullYear();
							
							firebase.getMilestoneRef().add({
								milestoneTitle:milestoneValue,
								categoryTitle:categoryValue,
								date:`${dd}/${mm}/${yyyy}`
							})
							.then(()=>{modalDisplay.setVisible("none")})
								
						}}/>
					</Form>
				</FormWrapper>
			</Wrapper>
		</FixedWrapper>
  );
}

export default ModalForm
