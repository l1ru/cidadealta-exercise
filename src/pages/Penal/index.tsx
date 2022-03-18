import React, { useCallback, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoCreateOutline } from 'react-icons/io5';
import Input from '../../components/Input';
import PenalCode from '../../components/PenalCode';
import { useAppDispatch, useAppSelector } from '../../services/Hooks';
import { setActivedInfoModal, setCreateModalActived } from '../../services/slices/ContainerSlice';
import { RootState } from '../../services/Store';
import { IPenal } from '../../types';

import {CreateButton, PenalContainer, PenalContent } from './styles';

const Penal: React.FC = () => {
    const penals = useAppSelector((state: RootState) => state.penalCode)
    const dispatch = useAppDispatch()

    let handlePenal = (index: number) => {
        dispatch(setActivedInfoModal({
            index: index,
            actived: true,
        }))
    }

    let handleCreateModal = () => {
        dispatch(setCreateModalActived(true))
    }

    return (
        <PenalContainer>
            <div className='title-container'>
                <div>
                    <h2>Codigos Penais</h2>
                    <div className='divider'></div>
                    <Input 
                        className="search-input"
                        label='PESQUISAR'
                        icon={<FiSearch  />}
                        type="text"
                    />
                    <CreateButton onClick={handleCreateModal} >
                        <div className='icon'><IoCreateOutline/></div>
                        <div className='title'>CRIAR</div>
                    </CreateButton>
                </div>
            </div>
            <PenalContent>
            {penals.map((value: any, index: any) => {
                
                    return (
                        <PenalCode 
                            key={index} 
                            title={value.nome} 
                            status={value.status == 1 ? "active" : "inactive"} 
                            onClick={() => handlePenal(index)}
                        />
                    )
                })}
            </PenalContent>
        </PenalContainer>
    );
}

export default Penal;