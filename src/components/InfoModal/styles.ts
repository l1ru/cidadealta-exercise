import styled from 'styled-components';

export const Container = styled.div`
`;

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
        background-color: var(--blue);
        box-shadow: 0px 0px 8px 0px var(--blue);
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
    margin-top: 3vh;

    display: flex;
    justify-content: space-between;
`