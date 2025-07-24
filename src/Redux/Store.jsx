import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Features/Counter/CounterSlice'
const store = configureStore({
    reducer: {counterReducer},
})

export default store;