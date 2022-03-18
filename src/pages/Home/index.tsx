import React from 'react';

import {Container, Content} from './styles';
import {GlobalStyles} from '../../styles/GlobalStyles'

import Auth from '../Auth';
import Penal from '../Penal';
import EditModal from '../../components/InfoModal';
import CreatePenalModal from '../../components/CreatePenal'
import { useAppSelector } from '../../services/Hooks';

const Home: React.FC = () => {
    const isLogged = useAppSelector(state => state.container.isLogged)
    const infoOpen = useAppSelector(state => state.container.infoModal)
    const createModal = useAppSelector(state => state.container.createModal)
    
    return (
        <Container>
            <GlobalStyles/>
            <Content className={isLogged ? "extended" : ""} >
                {!isLogged ? (
                    <Auth />
                ) : ""}
                {isLogged ? (
                    <Penal />
                ): ""}
            </Content>
            {infoOpen ? <EditModal /> : ""}
            {/* {createModal ? <CreateModal /> : ""} */}
            <CreatePenalModal />
        </Container>
    );
}

export default Home;