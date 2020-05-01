const renderUserProfile = (data) => {
    const user = data.attributes
    const characters = data.relationships.characters.data
    
    let div = document.createElement('div')
    div.className = 'tile is-ancestor'

    let profileTile = document.createElement('div')
    profileTile.className = 'tile is-parent'

    let profileArticle = document.createElement('article')
    profileArticle.className = 'tile is-child notification is-success'

    let profileContent = document.createElement('div')
    profileContent.className = 'content'

    let name = document.createElement('p')
    name.className = 'title is-1'
    name.innerText = user.name

    profileContent.appendChild(name)
    profileArticle.appendChild(profileContent)
    profileTile.appendChild(profileArticle)
    div.appendChild(profileTile)
    globals.main().appendChild(div)
}