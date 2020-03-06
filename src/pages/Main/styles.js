import styled from 'styled-components';

export const Container = styled.div`
  max-width: 300px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 3em;
  }

  h2 {
    font-size: 2em;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.3em;
    text-align: center;
    letter-spacing: 1px;
    line-height: 1.2em;
    margin-bottom: 20px;
  }

  span {
    font-size: 2em;
    font-weight: 700;
    margin: 0 0 15px 0;
  }
`;

export const SubmitButton = styled.a`
  text-decoration: none;
  border: 0;
  background-color: #0c7b93;
  color: #fff;
  padding: 10px 20px;

  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;
