const mysql = require('mysql2/promise');
const dotenv = require('dotenv')

dotenv.config()

const initializeAndConnectDB = async () => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DATABASE_HOST,
            user: process.env.DATABASE_USER,
            database: process.env.DATABASE,
            password: process.env.DATABASE_PASSWORD,
            port: '3306',
        });
        console.log('Database connection established');
        return connection;
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
    }
};

module.exports = initializeAndConnectDB;
