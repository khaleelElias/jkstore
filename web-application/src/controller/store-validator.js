const LIMIT = require("./commons")

exports.getErrorsNewStore = function(store) {

    const errors = []

    //validate user is admin as only admin is allowed to create stores
    if (store.account === undefined || !(store.account.username == "admin")) {
        errors.push("notAuthorized")
        return errors
    }

    // Validate name.
    if (!(/\w+/).test(store)) {
        errors.push("nameMissing")
        return errors
    } else if (store.name && store.name.length < LIMIT.MIN_TITLE_LENGTH) {
        errors.push("storeNameTooShort")
    } else if (store.name && LIMIT.MAX_TITLE_LENGTH < store.name.length) {
        errors.push("storeNameTooLong")
    } else if (!store.image) {
        errors.push("storeNoImage")
    }

    return errors

}