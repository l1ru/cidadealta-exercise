import React from 'react';

import {Container, Content} from './styles';

import {GlobalStyles} from '../../styles/GlobalStyles'

import Auth from '../Auth';
import { useSelector } from 'react-redux';
import Penal from '../Penal';
import EditModal from '../../components/EditModal';

const Home: React.FC = () => {
    // @ts-ignore
    const isLogged = useSelector(state => state.container.isLogged)
    // @ts-ignore
    const modalOpen = useSelector(state => state.container.infoModal)
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
            {modalOpen ? <EditModal /> : ""}
        </Container>
    );
}

export default Home;