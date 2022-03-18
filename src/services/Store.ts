import { configureStore } from '@reduxjs/toolkit'
import ContainerSlice from './slices/ContainerSlice'
import PenalSlice from './slices/PenalSlice'

export const Store = configureStore({
    reducer: {
        container: ContainerSlice,
        penalCode: PenalSlice
    }
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch