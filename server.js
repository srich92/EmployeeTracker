const mysql = require('mysql2')
const inquirer = require('inquirer');
const cTable = require('console.table');

require('dotenv').config()


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employee_db'
});
