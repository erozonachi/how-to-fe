import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: space-evenly;
  padding: 10px;
  max-width: 800px;
  width: 95%;
  margin: 5em auto;
  box-shadow: 4px 3px 4px 3px #ddd;
  @media (max-width: 750) {
    max-width: 600px;
  }

  img {
    width: 40%;
    margin-right: 2%;
    @media (max-width: 750px) {
      display: none;
    }
  }
  > div {
    width: 55%;
    @media (max-width: 750px) {
      width: 96%;
    }
    button {
      width: 100%;
    }
    h2 {
      width: 100%;
      text-align: center;
      color: #c2255c;
    }
  }
`;
