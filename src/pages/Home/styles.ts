import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  z-index: 1;
`;


export const Content = styled.div`
    width: 30%;
    height: 50%;

    background-color: #171827;
    box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);

    display: flex;
    align-items: center;
    justify-content: center;
    transition: 500ms;
    &.extended {
      justify-content: flex-start ;
      width: 80%;
      height: 80%;
    }
`