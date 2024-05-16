// to get data from database using queries we use services
const db = require("../db")

module.exports.getAllUsers = async () => {
    const user = await db.query("SELECT * FROM public.crudoperations")
    return user
}

