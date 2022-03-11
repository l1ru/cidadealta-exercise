import styled from 'styled-components';


export const Container = styled.div`
  width: 31%;
  height: 15%;
  background-color: #252635;
  margin-right: 10px;

  :nth-child(n + 4) {
    margin-top: 10px;
  }
`;

export const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 100%;  
`

export const InfoSide = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const InfoTitle = styled.h5`
  display:flex ;
  align-items: center;
  font-family: "Sora", sans-serif;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
`

export const InfoStatus = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  color: #fff;
  margin-top: 4px;
  font-size: 12px;
  span {
    color: #00c914;
    font-weight: 600;
  }
`

export const EditButton = styled.div`
  background-color: #363849;
  border: 1px solid #f8f8ff50;
  border-radius: 4px;
  padding: 8px 7px;
  font-size: 1em;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 500ms;

  &.inactive {
    cursor: initial;
    color: #FFFFFF20;
  }

  &.active {
    color: #fff;
    cursor: pointer;
    &:hover {
      background-color: #f6601f;
      box-shadow: 0px 0px 8px 0px #f6601f;
    }
  }
`
