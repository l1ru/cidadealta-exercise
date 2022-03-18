import React, { memo } from 'react';

import { 
  Container,
  EditButton,
  InfoSide,
  InfoTitle,
  Content
} from './styles';

import {IoReaderOutline} from 'react-icons/io5'

interface PenalCodeProps {
  status?: "active" | "inactive"
  onClick?: any
  title: string
}

const PenalCode: React.FC<PenalCodeProps> = ({ onClick, title, status}) => {
  return (
    <Container>
      <Content>
        <InfoSide>
            <InfoTitle>{title}</InfoTitle>
        </InfoSide>
        <EditButton className={status} onClick={status === "active" ? onClick : () => {}} >
          <IoReaderOutline />
        </EditButton>
      </Content>
    </Container>
  )
}

export default memo(PenalCode);