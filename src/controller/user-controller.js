const calculaIdade = (req, res) => {
    const hoje = new Date(Date.now())
    const nascimento = new Date("2004-10-05")
    const idade = hoje.getFullYear() - nascimento.getFullYear()

    res.json({
        "nome": "Kelly",
        "cidade": "SJC - SP",
        "profissao": "Programadora",
        "nascimento": idade
    })
}

module.exports = {
    calculaIdade
}