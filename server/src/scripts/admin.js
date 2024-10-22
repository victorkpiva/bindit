const User = require("../models/user");
const bcrypt = require("bcrypt");

async function createAdminAccount(){
    try{
        const existingAdmin = await User.findOne({ email: "admin@test.com" });
        if(!existingAdmin){
            const newAdmin = new User({
                email: "admin@test.com",
                name:"Admin",
                password: await bcrypt.hash("admin", 10),
                role: "admin"
            })
            await newAdmin.save();
            console.log("Conta administradora criada com sucesso");
        } else{
            console.log("Administrador já existe");
        }
    } catch(error){
        console.error(error.message);
    }
}

module.exports = createAdminAccount;