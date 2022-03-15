import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPenal } from "../../types";
import { RootState } from "../Store";

export const slice = createSlice({
    name: "penalCodes",
    initialState: [] as IPenal[],
    reducers: {
        setPenalCode: (state, {payload}) => {
            return payload
        },
        addPenalCode: (state, {payload}) => {
            return [...state, payload]
        },
        deletePenalCode: (state, {payload} ) => {
            return state.filter(value => value.id !== payload)
        },
        updatePenalCode: (state, {payload}) => {
            console.log(payload)
            return state.map(value => {
                if(value.id === payload.id) {
                    return {
                        id: payload.id,
                        dataCriacao: payload.dataCriacao,
                        descricao: payload.descricao,
                        multa: payload.multa,
                        nome: payload.nome,
                        status: payload.status,
                        tempoPrisao: payload.tempoPrisao
                    }
                }
                return value
            })
        }
    }
})

export const { setPenalCode, deletePenalCode, updatePenalCode } = slice.actions

export const getPenalCodes = (state: RootState) => state.penalCode

export default slice.reducer