const storeValidator = require('./store-validator')

module.exports = function({ storeRepository }) {

    const exports = {}

    exports.getAllStores = function(callback) {
        storeRepository.getAllStores(callback)
    }

    exports.createStore = function(store, callback) {

        // Validate the store.
        const errors = storeValidator.getErrorsNewStore(store)

        if (0 < errors.length) {
            callback(errors, null)
            return
        }
        storeRepository.createStore(store, callback)

    }

    exports.getStoreByName = function(name, callback) {
        storeRepository.getStoreByName(name, callback)
    }

    return exports
}