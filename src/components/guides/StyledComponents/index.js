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

export const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  width: 100%;
  margin: .5em auto;

  img {
    max-width: 100%;
  }
`;

export const StepSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  height: 100px;
  > button {
    position: absolute;
    height: 50px;
    width: 50px;
    top: 25px;
    &:first-of-type {
      left: 0;
    }
    &:last-of-type {
      right: 0;
    }
  }
`;
