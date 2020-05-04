// Character Endpoint calls

const fetchCharacters = async () =>{
    let res = await fetch(globals.charUrl(),{
        headers: {
            'auth-token': localStorage.getItem('token')
        }
    })
    let characters = await res.json()
    renderCharacters(characters.data)
}

const fetchSpecificCharacter = async (id) =>  {
    let res = await fetch(globals.charUrl()  +  id, {
        headers: {
            'auth-token': localStorage.getItem('token')
        }
    })

    let data = await res.json()
    renderCharacterSpecs(data)
}

// User Endpoint calls

const fetchUser = async () => {
    let res = await fetch(globals.userUrl()+`${localStorage.getItem('slug')}`, {
    headers:{
            'auth-token': localStorage.getItem('token')
        }
    })

    let data = await res.json()
    renderUserProfile(data.data)
}



