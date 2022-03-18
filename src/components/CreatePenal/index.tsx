import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import {Button} from "../InfoModal/styles";
import Dialog from "@mui/material/Dialog";
import {DialogTitle} from "@mui/material";

import { Container } from './styles'

import { setCreateModalActived } from "../../services/slices/ContainerSlice";
import { addPenalCode } from '../../services/slices/PenalSlice'
import { RootState } from "../../services/Store";
import { useAppDispatch, useAppSelector } from "../../services/Hooks";

const CreatePenal: React.FC = () => {

    const createModal = useAppSelector(state => state.container.createModal)
    const PenalContainer = useAppSelector(state => state.penalCode)
    const dispatch = useAppDispatch()

    let [title, setTitle] = useState('')
    let [description, setDescription] = useState('')
    let [penality, setPenality] = useState(0)
    let [time, setTime] = useState(0)

    const handleConfirm = () => {
        dispatch(addPenalCode({
            id: PenalContainer.length + 1,
            nome: title,
            descricao: description,
            dataCriacao: new Date(),
            multa: penality,
            tempoPrisao: time,
            status: 1
        }))
        handleClose()
    }

    const handleClose = () => {
        dispatch(setCreateModalActived(false))
    }
    return (
        <Container>
            <Dialog open={createModal} onClose={handleClose} >
                <DialogTitle>Criar Codigo Penal</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Titulo
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id={title}
                        label="Sem titulo"
                        fullWidth
                        variant="standard"
                        onChange={( e ) => setTitle(e.target.value)}
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
                        label="Sem descrição"
                        fullWidth
                        variant="standard"
                        onChange={( e ) => setDescription(e.target.value)}
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
                        label={0}
                        type={"number"}
                        fullWidth
                        variant="standard"
                        onChange={( e ) => setPenality(parseInt(e.target.value))}
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
                        label={0}
                        type={"number"}
                        fullWidth
                        variant="standard"
                        onChange={( e ) => setTime(parseInt(e.target.value))}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={handleConfirm}>Confirmar</Button>
                </DialogActions>
            </Dialog>
        </Container>
    )
}

export default CreatePenal