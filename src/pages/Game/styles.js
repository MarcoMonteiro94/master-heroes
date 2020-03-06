import styled from 'styled-components';

export const Container = styled.div.attrs(props => ({
  disabled: props.hidden,
}))`
  max-width: 300px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  &[disabled] {
    display: none;
  }

  p {
    color: #27496d;
    text-align: center;
    font-weight: bold;
    margin-bottom: 20px;
    font-size: 2em;
  }
`;

export const HeroCard = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    border-radius: 8px;
    margin-bottom: 20px;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  text-align: center;
  text-decoration: none;
  border: 0;
  background-color: #0c7b93;
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: background-color 0.6s;

  &:focus {
    background-color: #142850;
  }
`;

export const NextButton = styled.button.attrs(props => ({
  disabled: props.disabled,
}))`
  width: 100%;
  text-align: center;
  text-decoration: none;
  border: 0;
  background-color: #0c7b93;
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  margin-top: 40px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const EndGame = styled.div.attrs(props => ({
  disabled: props.enable,
}))`
  max-width: 300px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  &[disabled] {
    display: none;
  }

  h1 {
    font-size: 20px;
  }

  p {
    color: #27496d;
    text-align: center;
    font-size: 2em;
    line-height: 1.5em;
    margin-bottom: 20px;

    span {
      font-size: 1.3em;
      font-weight: bold;
    }
  }

  a {
    text-align: center;
    text-decoration: none;
    border: 0;
    background-color: #0c7b93;
    color: #fff;
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    margin-top: 20px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;
