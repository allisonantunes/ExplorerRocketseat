const express = require("express")
const app = express()

/* app.get("/message", (require, response) => {
    response.send('Hello world')
}) */

/* app.get("/message/:id", (require, response) => {
    response.send(`id da mensagem ${require.params.id}`)
}) */

// params usado para coisas pequenas como ID
/* app.get("/message/:id/:user", (require, response) => {
    const {id, user} = require.params
    response.send(`mensagem ID: ${id}. 
    Nome usuario: ${user}`)
}) */

/* app.get("/users", (require, response) => {
    const { page, limit} = require.query
    response.send(`Pagina ${page}. Mostrar ${limit}`)
}) */

/* app.use(express.json())

app.post("/users", (require, response) => {
    const { name, email, password} = require.body
    response.send(
        `Usuario: ${name}. 
        Email: ${email}. 
        Senha: ${password}
    `)
})
 */

app.use(express.json())

app.post("/users", (require, response) => {
    const { name, email, password} = require.body
    response.json({ name, email, password})
})


// send devolve para o serve no formato de html
// json é o ideal

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))