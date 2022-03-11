import React from 'react';

import { ButtonContainer, Container, Content, Button, TextContainer, TextPenalty, TextStatus, DescriptionContainer, DateCreation, EditButton } from './styles';



const Modal: React.FC = ({children}) => {
    return (
        <Container>
            <Content>
               {children}
            </Content>
        </Container>
    );
}

export default Modal;