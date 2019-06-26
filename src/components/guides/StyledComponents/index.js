import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  align-self: center;
  width: 33%;
  @media(max-width: 750px) {
    width: 49%;
  }
  @media(max-width: 550px) {
    width: 98%;
  }
`;
