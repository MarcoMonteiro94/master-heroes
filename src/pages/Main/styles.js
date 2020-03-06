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
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

export const SubmitButton = styled.a`
  text-decoration: none;
  border: 0;
  background-color: #7159c1;
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;
