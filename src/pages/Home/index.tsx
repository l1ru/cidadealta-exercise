import React from 'react';
import { useSelector } from 'react-redux';

import {Container, Content} from './styles';
import {GlobalStyles} from '../../styles/GlobalStyles'

import Auth from '../Auth';
import Penal from '../Penal';
import EditModal from '../../components/InfoModal';
import CreatePenalModal from '../../components/CreatePenal'

const Home: React.FC = () => {
    // @ts-ignore
    const isLogged = useSelector(state => state.container.isLogged)
    // @ts-ignore
    const infoOpen = useSelector(state => state.container.infoModal)
    // @ts-ignore
    const createModal = useSelector(state => state.container.createModal)
    
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