const express = require('express');
const mysql = require('mysql2');
const cors = require('cors')

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: 'biblioteca'
});
db.connect((error) => {
    if(error){
        console.log("Error de conexión a la base de datos", error);
    }else{
        console.log("Conectado a la base de datos");
    }
})

app.use(cors());
app.listen(5000, () => {
    console.log("Esta Funcionando")
})

