import { configureStore } from '@reduxjs/toolkit'
import ContainerSlice from './ContainerSlice'

export default configureStore({
    reducer: {
        container: ContainerSlice
    }
})