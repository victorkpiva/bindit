const bcrypt = require("bcrypt")
const User = require ("../models/user");
const { generateToken } = require("../utils/jwtUtils");

async function login(email, password) {
    try {
        const existingUser = await User.findOne({ email })
        if (!existingUser) {
            throw new Error("Usuário não encontrado");
        }
        const isPasswordValid = bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            throw new Error("Senha incorreta");
        }
        const token = generateToken(existingUser);
        return token;
    } catch (error) {
        console.log("Login error:", error.message);
        throw new Error("Credenciais inválidas");
    }
}

module.exports = {
    login
}