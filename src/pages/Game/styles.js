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

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      margin-bottom: 10px;
    }
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

  p {
    color: #7159c1;
    text-align: center;
    font-weight: bold;
    margin-top: 20px;
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  text-align: center;
  text-decoration: none;
  border: 0;
  background-color: #7159c1;
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: background-color 1s;

  &:focus {
    background-color: #341991;
  }
`;

export const NextButton = styled.button.attrs(props => ({
  disabled: props.disabled,
}))`
  width: 100%;
  text-align: center;
  text-decoration: none;
  border: 0;
  background-color: #7159c1;
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
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    color: #7159c1;
    text-align: center;
    font-weight: bold;
    margin-top: 20px;
    font-size: 16px;
  }

  a {
    width: 100%;
    text-align: center;
    text-decoration: none;
    border: 0;
    background-color: #7159c1;
    color: #fff;
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    margin-top: 40px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;
