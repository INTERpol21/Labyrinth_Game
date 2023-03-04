import { configureStore } from '@reduxjs/toolkit'
import Reducer from './reducer';


const store = configureStore({
  reducer: {
    indexData: Reducer,
  },
})

export default store