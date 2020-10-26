import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	padding: 1rem 0;
	position: absolute;
	top:0;
	background: #9FEDF0;
	box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.2);
	width: 100%;
	max-height:54px;
	text-align: center;
`

const Typo = styled.p`
	color: #16300d;
	margin:0;
	font-size: 2rem;
`

export default function(){

	return(
		<Wrapper>
			<Typo>Weekly Milestones</Typo>
		</Wrapper>
	)

}
