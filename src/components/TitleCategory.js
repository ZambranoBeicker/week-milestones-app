import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	max-width:265px;
	margin-right: auto;
	margin-left: 1.25rem;
	color: #16300D:;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: semibold;
`;
const TitleCategory = ({ text }) => {
  return (
    <Wrapper>
      <Title>{text}</Title>
    </Wrapper>
  );
};

export default TitleCategory;
