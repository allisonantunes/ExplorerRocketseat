import { getUser } from "./services/user.js"
import { getRepos } from "./services/repositories.js"

import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"

const btn = document.getElementById('btn-search')

btn.addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    if(validateEmptyInput(userName)) return
    getUserData(userName)
})
const input = document.getElementById('input-search')
input.addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPress = key == 13

    if(isEnterKeyPress){
        if(validateEmptyInput(userName)) return
        getUserData(userName)
    }
})

async function getUserData(userName) {
    const userResponse = await getUser(userName)

    if(userResponse.message === "Not Found") {
        screen.renderNotFound()
        return
    }
    const userRepositories = await getRepos(userName)

    user.setInfo(userResponse)
    user.setRepositories(userRepositories)

    screen.renderUser(user)

}

function validateEmptyInput(userName) {
    if(userName.length === 0) {
        alert('Campo vazio')
        return true
        // para parar o cód e nao ir prox linha
    }
}