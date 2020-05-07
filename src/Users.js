const renderUserProfile = (data) => {

    const user = data.attributes
    const characters = data.attributes.characters
    
    const levelCont = document.createElement('div')
    levelCont.className = 'level'
    levelCont.id ='profile-header'

    const levelName = document.createElement('div')
    levelName.className = 'level-item has-text-centered'

    const name = document.createElement('p')
    name.innerHTML = `
                    <div>
                        <p class='heading'>name</p>
                        <p class='title is-3'>${user.name}</p>
                    </div>
                    `




    levelName.appendChild(name)
    levelCont.appendChild(levelName)
    globals.main().appendChild(levelCont)
    renderCharacters(characters)
}