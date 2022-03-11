import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 3;

  position: absolute;

  background-color: #00000080;

  display: flex;
  align-items: center;  
  justify-content: center;
`;

export const Content = styled.div`
    width: 30%;
    height: 45%;
    background-color: #171827;
    box-shadow: 0px 0px 14px 3px #000000;
`

export const ButtonContainer = styled.div`
    max-width: 75%;
    margin: 0 auto;
    margin-top: 30px;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 12px;
    border: none;
    border-radius: 8px;

    color: #f8f8ff;
    background-color: #252635;
    cursor: pointer;
    transition: 500ms; 
    &:hover {
        transform: scale(1.1);
        background-color: #f6601f;
        box-shadow: 0px 0px 8px 0px #f6601f;
    }
`

export const TextContainer = styled.div`
    max-width: 75%;
    margin: 0 auto;
    margin-top: 30px;
    .title {
        display: flex;
        justify-content: space-between;
    }
`

export const TextStatus = styled.div`
    display: flex;
    flex-direction: column;
    h5 {
        display:flex ;
        align-items: center;
        font-family: "Sora", sans-serif;
        color: #f8f8ff;
        font-size: 14px;
        font-weight: 500;
    }
    p {
        font-family: "Inter", sans-serif;
        font-weight: 400;
        color: #f8f8ff;
        margin-top: 4px;
        font-size: 12px;
        background-color: #396033;
        padding: 4px 14px;
        border-radius: 10px;
        width: max-content;
    }
`

export const TextPenalty = styled.div`
    display: flex; 
    align-items: flex-end;
    h5 {
        display:flex ;
        align-items: center;
        font-family: "Sora", sans-serif;
        color: #f8f8ff;
        font-size: 14px;
        font-weight: 500;
    }
    div {
        display: flex;
        align-items: center;
        h4 {
            display:flex ;
            align-items: center;
            font-family: "Inter", sans-serif;
            color: #f8f8ff;
            padding: 6px 10px;
            border-radius: 50%;
            background-color: #2E2F40;
            font-size: 14px;
            font-weight: 500;
            height: max-content;   
            &.watch {
                margin-left: 10px;
                padding: 8px;
            } 
        }
        p {
            font-family: "Inter", sans-serif;
            color: #f8f8ff;
            margin-left: 10px;
            span {
                color: #f8f8ff50;
                font-size: 10px;
            }
        }
    }
`

export const DescriptionContainer = styled.div`
    max-width: 75%;
    margin: 0 auto;
    margin-top: 15px;

    text-align: justify;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 12px;

    color: #f8f8ff
`

export const DateCreation = styled.div`
    max-width: 75%;
    margin: 0 auto;
    margin-top: 10px;

    text-align: justify;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 12px;

    color: #cccccc50;
    span {
        color: #cccccc;
    }
`

export const EditButton = styled.div`
    max-width: 75%;
    margin: 0 auto;
    margin-top: 50px;

    .edit-button {
        cursor: pointer;
        width: 50%;
        background-color: #f6601f;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-radius: 5px;
        .icon {
            padding: 6px;
            background-color: #f8f8ff40;
            border-radius: 5px;
            color: #f8f8ff;
        }
        .title {
            font-family: "Inter", sans-serif;
            color: #f8f8ff;
            padding: 10px;
        }
    }
`