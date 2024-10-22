const express = require("express");
const signupRoute = require("./routes/signup");   
const loginRoute = require("./routes/login"); 
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const createAdminAccount = require("./scripts/admin");
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

createAdminAccount();

app.use("/user", signupRoute);
app.use("/auth", loginRoute);

app.listen(PORT, () => {
    console.log(`Server está rodando em: http://localhost:${PORT}`);
})