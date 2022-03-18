import React, {useState} from "react";

import { Container } from './styles'
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import {Button} from "../InfoModal/styles";
import Dialog from "@mui/material/Dialog";
import {DialogTitle} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setCreateModalActived } from "../../services/slices/ContainerSlice";

const CreatePenal: React.FC = () => {

    //@ts-ignore
    const createModal = useSelector(state => state.container.createModal)
    const dispatch = useDispatch()

    let [title, setTitle] = useState('')
    let [description, setDescription] = useState('')
    let [penality, setPenality] = useState(0)
    let [time, setTime] = useState(0)


    function handleClose() {
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
                        label={0}
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
                        label={0}
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
        </Container>
    )
}

export default CreatePenal