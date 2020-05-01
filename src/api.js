function fetchCharacters(){
    fetch(globals.charUrl(),{
        headers: {
            'auth-token': localStorage.getItem('token')
        }
    })
    .then(res => res.json())
    .then(characters => renderCharacters(characters.data))
}

const fetchUser = async () => {
    let res = await fetch(globals.userUrl()+`${localStorage.getItem('slug')}`, {
    headers:{
            'auth-token': localStorage.getItem('token')
        }
    })

    let data = await res.json()
    console.log(data)
    
}



