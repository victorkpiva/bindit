const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/jwt_db");

mongoose.connection.on("connected", () => {
    console.log("Conectado no MongoDB");
});

mongoose.connection.on("error", () => {
    console.log(`MongoDB erro de conexão: ${err}`)
})

module.exports = mongoose;