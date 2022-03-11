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
import { useSelector } from 'react-redux';

const EditModal: React.FC = () => {
    // @ts-ignore
    const state = useSelector(state => state.container)
    const actualPenalCode = state.penalCodes[state.infoModalActived]

    let [open, setOpen] = useState(true)
    let [title, setTitle] = useState('Desacato')
    let [description, setDescription] = useState('Desacato, desobediência ou desrespeito perante um tribunal ou oficiais da policia na forma de\n' +
        '                comportamento que se opõe ou desafia a autoridade, a justiça e a dignidade do tribunal. Um réu só pode\n' +
        '                ser cobrado uma vez por desacato')
    let [penality, setPenality] = useState(5000)
    let [time, setTime] = useState(30)

    function handleOpen() { setOpen(true) }

    function handleClose() { setOpen(false) }

    let date = new Date(actualPenalCode.dataCriacao)
    let months = ["Janeiro","Feveiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Dezembro"]
    let day = date.getDate()
    let month = months[date.getMonth() - 1]
    let fullYear = date.getFullYear()



    return (
        <Modal>
            <ButtonContainer>
                <Button>
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
                {description}
            </DescriptionContainer>
            <DateCreation>
                Data de criação: <span>{`${day} de ${month} de ${fullYear}`}</span>
            </DateCreation>
            <EditButton>
                <div className='edit-button' onClick={handleOpen} >
                    <div className='icon'><FiEdit2/></div>
                    <div className='title'>EDITAR</div>
                </div>
            </EditButton>

            <Dialog open={open} onClose={handleClose} >
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id={title}
                        label="Novo titulo"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogContent>
                    <DialogContentText>
                        Descrição
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Nova descrição"
                        fullWidth
                        variant="standard"
                        onChange={(e) => console.log(e.target.value)}
                    />
                </DialogContent>

                <DialogContent>
                    <DialogContentText>
                        Multa
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label={penality}
                        type={"number"}
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>

                <DialogContent>
                    <DialogContentText>
                        Tempo de Prisão
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label={time}
                        type={"number"}
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={handleClose}>Confirmar</Button>
                </DialogActions>
            </Dialog>
        </Modal>
    );
}

export default EditModal;
