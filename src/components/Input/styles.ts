import styled from 'styled-components';

export const InputContainer = styled.div`
    font-family: var(--font-inter);
    font-size: 1rem;
    color: var(--white);
    display: flex;
    align-items: center;

    margin-bottom: 1rem;
   

    .input-icon {
        background-color: #2E2F40;
        border-radius: 10px 0 0 10px ;

        font-size: 1rem;

        padding: 7.6px 12px;
        
        display: flex;
        align-items: center;
        justify-content: center;

        font-family: var(--font-inter);
        color: var(--white);
    }

    .text-input {
        font-size: 10px;
        font-weight: 500;
        background-color: #2E2F40;
        height: 1.95rem;
        border-radius: 0 10px 10px 0     ;
        border: none;

        font-family: var(--font-inter);
        color: var(--white);

        :focus {
            border: none;
            outline: none;
        }
        
    }
`;
