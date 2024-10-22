const crypto = require("crypto");

// Gerar secret key aleatória
const secretKey = crypto.randomBytes(32).toString('hex');

module.exports = {
    secretKey: secretKey
}