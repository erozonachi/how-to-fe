import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  width: 95%;
  margin: 5em auto;
  box-shadow: 4px 3px 4px 3px #ddd;
  @media (max-width: 750) {
    max-width: 600px;
  }

  img {
    width: 48%;
    @media (max-width: 750px) {
      display: none;
    }
  }
  > div {
    width: 48%;
    @media (max-width: 750) {
      width:96%;
    }
    button {
      width: 100%;
    }
  }
`;
