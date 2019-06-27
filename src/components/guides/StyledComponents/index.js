import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  align-self: center;
  margin-bottom: .5em;
  width: 32%;
  @media(max-width: 750px) {
    width: 48%;
  }
  @media(max-width: 550px) {
    width: 98%;
  }
`;

export const GroupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
`;
