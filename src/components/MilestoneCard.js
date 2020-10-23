import React from "react";
import styled from "styled-components";

const CardInfoWrapper = styled.div`
  display: flex;
  margin-top: 0.75rem;
`;
const Wrapper = styled.div`
  max-width: 360px;
  padding: 0.75rem 0 0.75rem 1.25rem;
  margin: 1rem auto;
  border-radius: 5px;
  background-color: #e8fee1;
  color: #16300d;
`;

const Title = styled.h4`
  font-size: 1.125rem;
  margin: 0.25rem 0;
  font-weight: normal;
`;

const DateWrapper = styled.div`
  padding: 0.15rem 0.6rem;
  background: #ccf1f2;
  border-radius: 3px;
`;

const Date = styled.p`
  font-size: 12px;
  margin: 0;
  margin-top: 4px;
  margin-right: auto;
`;

const MilestoneCard = ({ title, category, date = "12/12/12" }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <CardInfoWrapper>
        <DateWrapper>
          <Date>{date}</Date>
        </DateWrapper>
      </CardInfoWrapper>
    </Wrapper>
  );
};

export default MilestoneCard;
