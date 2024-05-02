const bcrypt = require("bcrypt");

const senha = async() => {
    const saltRounds = 10;
    let hashedPass = await bcrypt.hash("Nao0Conto", saltRounds);
    bcrypt.compare("Nao0Conto", hashedPass)
        .then((isPasswordValid) => {
            if (!isPasswordValid) {
                console.log('Senha inválida!');
           }
        });
};

senha();
