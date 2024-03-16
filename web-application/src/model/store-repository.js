const db = require('./db')

module.exports = function() {

    /*
    Retrieves all stores ordered by name.
    Possible errors: internalError
    Success value: The fetched stores in an array.
    */
    exports.getAllStores = function(callback) {

        const query = `SELECT * FROM stores ORDER BY id`

        db.query(query, function(error, stores) {
            if (error) {
                callback(['internalError'], null)
            } else {
                callback(null, stores)
            }
        })

    }

    /*
    	Retrieves the store with the given name of store.
    	Possible errors: internalError
    	Success value: The fetched store, or null if no store has that name.
    */
    exports.getStoreByName = function(name, callback) {

        const query = `SELECT * FROM stores WHERE name = ? LIMIT 1`
        const values = [name]

        db.query(query, values, function(error, stores) {
            if (error) {
                callback(['internalError'], null)
            } else {
                callback([], stores[0])
            }
        })

    }

    /*
    	Creates a new store.
    	store: {name: "The name of the store", storeImage: "the url of the image"}
    	Possible errors: internalError, storeExists
    	Success value: New store was created.
    */
    exports.createStore = function(store, callback) {
        const query = `INSERT INTO stores (name, storeImage) VALUES (?, ?)`
        const values = [store.name, store.image]

        db.query(query, values, function(error) {
            if (error) {
                if (error.sqlMessage.includes("nameUnique")) {
                    callback(['storeExists'])
                } else {
                    callback(['internalError'])
                }
            } else {
                callback([])
            }
        })

    }

    return exports

}