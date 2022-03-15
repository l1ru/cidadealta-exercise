import React, {useState} from "react";

import { Container } from './styles'
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import {Button} from "../InfoModal/styles";
import Dialog from "@mui/material/Dialog";
import {DialogTitle} from "@mui/material";

const CreatePenal: React.FC = () => {
    let [open, setOpen] = useState(true)
    let [title, setTitle] = useState('Desacato')
    let [description, setDescription] = useState('Desacato, desobediência ou desrespeito perante um tribunal ou oficiais da policia na forma de\n' +
        '                comportamento que se opõe ou desafia a autoridade, a justiça e a dignidade do tribunal. Um réu só pode\n' +
        '                ser cobrado uma vez por desacato')
    let [penality, setPenality] = useState(5000)
    let [time, setTime] = useState(30)

    function handleOpen() {
        setOpen(true)
    }

    function handleClose() {
        setOpen(false)
    }
    return (
        <Container>
            <Dialog open={open} onClose={handleClose} >
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