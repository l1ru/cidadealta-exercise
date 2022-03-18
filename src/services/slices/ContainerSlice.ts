import { createSlice } from "@reduxjs/toolkit";
import { IContainer } from "../../types";

export const slice = createSlice({
    name: "container",
    initialState: {
        infoModal: false,
        infoModalActived: 0,
        createModal: false,
        editForm: false,
        user: '',
        isLogged: false,
    } as IContainer ,
    reducers: {
        changeUser(state, {payload}) {
            return {
                ...state,
                isLogged: true,
                user: payload.user
            }            
        },
        changePenalCodes(state, {payload}) {
            return {
                ...state,
                penalCodes: payload
            }
        },
        setActivedInfoModal(state, {payload}) {
            return {
                ...state,
                infoModal: payload.actived,
                infoModalActived: payload.index
            }
        },
        setCreateModalActived(state, {payload}) {
            return {
                ...state, 
                createModal: payload
            }
        },
    }
})

export const { changeUser, changePenalCodes, setActivedInfoModal, setCreateModalActived } = slice.actions

export default slice.reducer