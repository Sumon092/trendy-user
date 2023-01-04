import { configureStore } from '@reduxjs/toolkit'
// const reduxLogger = require('redux-logger')

import userReducer from '../features/users/userSlice';
// const logger = reduxLogger.createLogger();



export const store = configureStore({
    reducer: {
        user: userReducer
    },
    // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})

// import { configureStore, combineReducers } from '@reduxjs/toolkit'
// import userReducer from '../features/users/userSlice';
// import storage from 'redux-persist/lib/storage'

// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';

// const persistConfig = {
//     key: 'root',
//     version: 1,
//     storage,
// };

// const rootReducer = combineReducers({ user: userReducer })

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }),
// });

// export const persistor = persistStore(store)

