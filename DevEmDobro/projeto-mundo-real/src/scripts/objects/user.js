const user = {
    avatar_url: '',
    name: '',
    bio: '',
    login: '',
    repositories: [],
    setInfo(gitHubUser){
        this.avatar_url = gitHubUser.avatar_url,
        this.name = gitHubUser.name,
        this.bio = gitHubUser.bio,
        this.login = gitHubUser.login
    },
    setRepositories(repositories) {
        this.repositories = repositories
    }
}
export { user }