import styled from 'styled-components';

export const InputContainer = styled.div`
    font-family: "Inter", sans-serif;
    font-size: 20px;
    color: var(--white);
    display: flex;
    align-items: center;

    margin-bottom: 16px;

   

    .input-icon {
        background-color: #2E2F40;
        border-radius: 10px 0 0 10px ;

        font-size: 16px;

        padding: 7.6px 12px;
        
        display: flex;
        align-items: center;
        justify-content: center;

        font-family: "Inter", sans-serif;
        color: var(--white);
    }

    .text-input {
        font-size: 10px;
        font-weight: 500;
        background-color: #2E2F40;
        padding: 10px 12px;
        border-radius: 0 10px 10px 0     ;
        border: none;

        font-family: "Inter", sans-serif;
        color: var(--white);

        :focus {
            border: none;
            outline: none;
        }
        
    }
`;
