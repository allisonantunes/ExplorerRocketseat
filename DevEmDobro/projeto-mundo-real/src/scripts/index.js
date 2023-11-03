const btn = document.getElementById('btn-search')
btn.addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    getUserProfile(userName)
})
const input = document.getElementById('input-search')
input.addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPress = key == 13

    if(isEnterKeyPress){
        getUserProfile(userName)
    }
})

async function user(userName) {
    const response = await fetch(`https://api.github.com/users/${userName}`)
    return await response.json()
}
async function repos(userName) {
    const response = await fetch(`https://api.github.com/users/${userName}/repos`)
    return await response.json()
}

function getUserProfile(userName) {
    user(userName).then(userData => {
        let userInfo = `
        <div class="info">
            <img src="${userData.avatar_url}" alt="foto perfil usuario"/>
            <div class="data">
                <h1>${userData.name ?? 'não possui nome cadastrado'}</h1>
                <p>${userData.bio ?? 'não possui bio cadastrado'}</p>
            </div>
        </div>
        `
        document.querySelector('.profile-data').innerHTML = userInfo
        
        getUserRepositories(userName)
    })
}

function getUserRepositories(userName) {
    repos(userName).then((reposData) => {
        let repositoriesItens = ''

        reposData.forEach(repo => {
            repositoriesItens += `
            <li> <a href="${repo.html_url}" target="_blank">${repo.name}</a></li>
            `
        })
        document.querySelector('.profile-data').innerHTML += `
        <div class="repositories section">
            <h2>Repositórios</h2>
            <ul>${repositoriesItens}</ul>
        </div>
        `
    })
}
// allisonantunes
