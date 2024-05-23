const initializeAndConnectDB = require('../database/connection')

// const pool = initializeAndConnectDB()


const getUsers =  async (req, res) => {
    res.send("Hellooo")
    // try {
    //     const [rows, fields] = (await pool).execute(`SELECT * FROM users`)
    //     console.log(rows, fields)
    // } catch (error) {
    //     console.log("error", error)
    // }
}

module.exports = {getUsers}