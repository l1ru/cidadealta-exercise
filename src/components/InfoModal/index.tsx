import React, {useState} from 'react';
import Modal from '../Modal';

import {
    Container,
    Button,
    ButtonContainer,
    DateCreation,
    DescriptionContainer,
    EditButton,
    TextContainer,
    TextPenalty,
    TextStatus
} from './styles'

import {MdOutlineWatchLater} from 'react-icons/md'
import {FiArrowLeft, FiEdit2} from 'react-icons/fi'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import TextField from '@mui/material/TextField';
import MuiButton from '@mui/material/Button';

import { setActivedInfoModal } from '../../services/slices/ContainerSlice';
import { deletePenalCode, updatePenalCode } from '../../services/slices/PenalSlice';
import { useAppDispatch, useAppSelector } from '../../services/Hooks';

const EditModal: React.FC = () => {
    const state = useAppSelector(state => state)
    const dispatch = useAppDispatch()
    const actualPenalCode = state.penalCode[state.container.infoModalActived]

    let [open, setOpen] = useState(false)
    let [title, setTitle] = useState(actualPenalCode.nome)
    let [description, setDescription] = useState(actualPenalCode.descricao)
    let [penality, setPenality] = useState( actualPenalCode.multa)
    let [time, setTime] = useState(actualPenalCode.tempoPrisao)



    function handleOpen() { setOpen(true) }
    function handleClose() { setOpen(false) }
    let closeModal = () => {
        dispatch(setActivedInfoModal({
            index: 0,
            actived: false,
        }))
    }

    const handleConfirm = () => {
        let penalId = actualPenalCode.id
        dispatch(updatePenalCode({
            id: penalId,
            nome: title,
            descricao: description,
            dataCriacao: actualPenalCode.dataCriacao,
            multa: penality,
            tempoPrisao: time,
            status: actualPenalCode.status
        }))
        handleClose()
    }

    const handleDelete = () => {
        if(window.confirm("Deseja realmente deletar?")) {
            dispatch(deletePenalCode(actualPenalCode.id))
            closeModal()
        }
    }

    let date = new Date(actualPenalCode.dataCriacao)
    let months = ["Janeiro","Feveiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Dezembro"]
    let day = date.getDate()
    let month = months[date.getMonth() - 1]
    let fullYear = date.getFullYear()

    return (
        <Modal>
            <ButtonContainer>
                <Button onClick={closeModal} >
                    <FiArrowLeft/>
                </Button>
            </ButtonContainer>
            <TextContainer>
                <div className='title'>
                    <TextStatus>
                        <h5> {actualPenalCode.nome} </h5>
                        <p>Ativo</p>
                    </TextStatus>
                    <TextPenalty>
                        <div>
                            <h4>$</h4>
                            <p>{actualPenalCode.multa}</p>
                        </div>
                        <div>
                            <h4 className='watch'><MdOutlineWatchLater/></h4>
                            <p>{actualPenalCode.tempoPrisao}<span>M</span></p>
                        </div>
                    </TextPenalty>
                </div>
            </TextContainer>
            <DescriptionContainer>
                {actualPenalCode.descricao}
            </DescriptionContainer>
            <DateCreation>
                Data de criação: <span>{`${day} de ${month} de ${fullYear}`}</span>
            </DateCreation>

            <EditButton>
                <MuiButton variant='outlined' onClick={handleOpen} >
                    <div className='title'>EDITAR</div>
                </MuiButton>

                <MuiButton variant='outlined' color='error' onClick={handleDelete} >
                    <div className='title'>DELETAR</div>
                </MuiButton>
            </EditButton>

            
            <Dialog open={open} onClose={handleClose} >
                <DialogContent>
                    <DialogContentText>
                        {actualPenalCode.nome}
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Novo titulo"
                        fullWidth
                        variant="outlined"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </DialogContent>
                <DialogContent>
                    <DialogContentText>
                        {actualPenalCode.descricao}
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Nova descrição"
                        fullWidth
                        multiline={true}
                        variant="outlined"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </DialogContent>

                <DialogContent>
                    <DialogContentText>
                        Multa
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label={actualPenalCode.multa}
                        type={"number"}
                        fullWidth
                        variant="outlined"
                        onChange={(e) => setPenality(parseInt(e.target.value))}
                    />
                </DialogContent>

                <DialogContent>
                    <DialogContentText>
                        Tempo de Prisão
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label={actualPenalCode.tempoPrisao}
                        type={"number"}
                        fullWidth
                        variant="outlined"
                        onChange={(e) => setTime(parseInt(e.target.value))}
                    />
                </DialogContent>
                <DialogActions>
                    <MuiButton variant='contained' color='error' onClick={handleClose}>Cancelar</MuiButton>
                    <MuiButton variant='contained' onClick={handleConfirm}>Confirmar</MuiButton>
                </DialogActions>
            </Dialog>
        </Modal>
    );
}

export default EditModal;
