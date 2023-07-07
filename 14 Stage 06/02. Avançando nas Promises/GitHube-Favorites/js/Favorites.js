// 1 classe que vai conter a lógica dos dados
// como os dados serão estruturados
export class GithubUser{
    static search(username) {
        const endpont = `https://api.github.com/users/${username}`
        return fetch(endpont)
        .then(data => data.json())
        .then(({login, name, public_repos, followers}) => ({
            login,
            name,
            public_repos,
            followers
        }))
    }
}
export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()

        GithubUser.search('allisonantunes') // vem da pesquisa
        .then(user => console.log(user))
        // pegando a cadeia de promessa do GithubUser... continuando
    }
    load() {
        this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
        
    }
    delete(user) {
        // Higher=order functions (map, filter, find, reduse)
        const filteredEntries = this.entries
        .filter(entry => entry.login !== user.login)

        this.entries = filteredEntries
        this.update()
    }
}

// classe que vai criar a visualização e eventos do html
export class FavoritesView extends Favorites {
    constructor(root) {
        super(root) // chama o constructor do favorites
        
        this.tbody = this.root.querySelector('table tbody')

        console.log(this.root);
        this.update()
        
    }
    update() {
        this.removeAllTr()


        this.entries.forEach((user) => {
            const row = this.createRow()
            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user img').alt = `Imagem de ${user.name}`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.public_repor
            row.querySelector('.followers').textContent = user.followers

            row.querySelector('.remove').onclick = () => {
                const isOk = confirm('Tem certeza que deseja deletar essa linha ?')
                if(isOk) {
                    this.delete(user)
                }
            }

            this.tbody.append(row)
        })
    }

    createRow() {
        const tr = document.createElement('tr')
        // criar um elemento pela DOM js

        
        tr.innerHTML = `
        <td class="user">
            <img src="https://github.com/allisonantunes.png" alt="imagem perfil github">
            <a href="https://github.com/allisonantunes" target="_blank">
                <p>Allison Antunes</p>
                <span>allisonantunes</span>
            </a>
        </td>
        <td class="repositories">
            76
        </td>
        <td class="followers">
            9589
        </td>
        <td>
            <button class="remove">&times;</button>
        </td>      
        `
        return tr
    }

    removeAllTr() {
        this.tbody.querySelectorAll('tr')
        .forEach((tr) => {
            tr.remove()
        }) // All ta pegando todos os tr
    }
}