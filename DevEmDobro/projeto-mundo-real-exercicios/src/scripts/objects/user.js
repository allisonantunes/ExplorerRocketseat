const user = {
    avatar_url: '',
    name: '',
    bio: '',
    login: '',
    repositories: [],
    followers: '',
    following: '',
    setInfo(gitHubUser){
        this.avatar_url = gitHubUser.avatar_url,
        this.name = gitHubUser.name,
        this.bio = gitHubUser.bio,
        this.login = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepositories(repositories) {
        this.repositories = repositories
    }
}
export { user }