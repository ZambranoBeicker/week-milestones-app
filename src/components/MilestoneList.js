import React, { useEffect, useState } from "react";
import TitleCategory from "./TitleCategory.js";
import MilestoneCard from "./MilestoneCard.js";
import styled, { keyframes } from "styled-components";

const appear = keyframes`
	from{
		opacity:0;
	}
	to{
		opacity:1;
	}
`;

const Wrapper = styled.div`
  font-family: Helvetica;
  background-color: #9fedf0;
  padding-top: 1rem;
  position: relative;
  z-index: 1;
  animation: ${appear} 0.2s ease-in;
`;

function MilestoneList({ title, cardsData }) {
  const [milestoneCards, setMilestoneCards] = useState([]);

  useEffect(() => {
    setMilestoneCards(
      cardsData.map((data, index) => {
        return (
          <React.Fragment key={index}>
            <MilestoneCard
              title={data.milestoneTitle}
              category={data.categoryTitle}
              date={data.date}
            />
          </React.Fragment>
        );
      })
    );
  }, [cardsData]);

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
