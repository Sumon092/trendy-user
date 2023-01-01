const configureStore = require('@reduxjs/toolkit').configureStore
// const reduxLogger = require('redux-logger')

const userReducer = require('../features/users/userSlice')
// const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        user: userReducer
    }
    // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})

module.exports = store;