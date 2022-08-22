import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer
} from "redux-persist"
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"

import { configure } from "@testing-library/react"
import reducers from "./User.js"
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key:"root",
    version:1,
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers)
export const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck:{
            ignoredActions:[FLUSH, REHYDRATE, PAUSE, PERSIST,PURGE, REGISTER]

        }
    })
})