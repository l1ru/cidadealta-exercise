import styled from "styled-components"

export const PenalContainer = styled.div`
width: 80%;
height: 80%;
margin: 0 auto;

display: flex;
flex-direction: column;
justify-content: space-between;

@keyframes opacity {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

animation: opacity 3s;

.title-container {
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    h2 {
      font-family:  "Sora", sans-serif;
      font-weight: 600;
      color: #fff;
    }
    .divider {
      background-color: #ffffff70;
      width: 1px;
      height: 25px;

      margin-left: 10px;
    }
    .search-input {
      margin: 0;
      margin-left: 10px;
    }
  }

}

`

export const PenalContent = styled.div`
  width: 100%;
  height: 90%;

  display:flex;
  flex-wrap: wrap;
  align-content: flex-start;

  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const CreateButton = styled.div`
  cursor: pointer;
  background-color: #1976d2;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  margin-left: 0.8vw;
  .icon {
    margin-left: 0.4vw;
    padding: 4px;
    background-color: #f8f8ff40;
    border-radius: 5px;
    color: #f8f8ff;

    font-size: 12px;
  }
  .title {
      font-family: "Inter", sans-serif;
      font-size: 10px;
      color: #f8f8ff;
      padding: 9px;
  }
`