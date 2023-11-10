const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(userData) {
        let userInfo = `
        <div class="info">
            <img src="${userData.avatar_url}" alt="foto perfil usuario"/>
            <div class="data">
                <h1>${userData.name ?? 'não possui nome cadastrado'}</h1>
                <p>${userData.bio ?? 'não possui bio cadastrado'}</p>
            </div>
        </div>
        `
        this.userProfile.innerHTML = userInfo

        let repositoriesItens = ''
        userData.repositories.forEach(repo => {
            repositoriesItens += `
            <li> <a href="${repo.html_url}" target="_blank">${repo.name}</a></li>
            `
            if(userData.repositories.length > 0) {
                this.userProfile.innerHTML += `
                <div class="repositories section">
                    <h2>Repositórios</h2>
                    <ul>${repositoriesItens}</ul>
                </div>
            `
            }
        })
    },
    renderNotFound() {
        this.userProfile.innerHTML = '<h3>Usuario não encontrado</h3>'
    }
}
export { screen }