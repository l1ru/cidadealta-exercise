import React, { useCallback } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoCreateOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../components/Input';
import PenalCode from '../../components/PenalCode';
import { setActivedInfoModal } from '../../services/slices/ContainerSlice';
import { RootState } from '../../services/Store';

import {CreateButton, PenalContainer, PenalContent } from './styles';

const Penal: React.FC = () => {
    const data = useSelector<RootState>(state => state.penalCode)
    const dispatch = useDispatch()

    let handlePenal = (index: number) => {
        dispatch(setActivedInfoModal({
            index: index,
            actived: true,
        }))
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
                    <CreateButton>
                        <div className='icon'><IoCreateOutline/></div>
                        <div className='title'>CRIAR</div>
                    </CreateButton>
                </div>
            </div>
            <PenalContent>
                {/* @ts-ignore   */}
            {data.map((value: any, index: any) => {
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