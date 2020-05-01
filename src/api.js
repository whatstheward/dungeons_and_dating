const fetchCharacters = async () =>{
    let res = await fetch(globals.charUrl(),{
        headers: {
            'auth-token': localStorage.getItem('token')
        }
    })
    let characters = await res.json()
    renderCharacters(characters.data)
}

const fetchUser = async () => {
    let res = await fetch(globals.userUrl()+`${localStorage.getItem('slug')}`, {
    headers:{
            'auth-token': localStorage.getItem('token')
        }
    })

    let data = await res.json()
    renderUserProfile(data.data)
    
}



