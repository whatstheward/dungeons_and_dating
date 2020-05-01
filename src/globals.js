class Globals{
    
    setToken(data){
        localStorage.setItem('token', data.token)
        localStorage.setItem('slug', data.slug)
    }

    logo(){
        return document.querySelector("#logo")
    }


    login(){
        return document.querySelector("#login")
    }

    signUp(){
        return document.querySelector("#sign-up")
    }

    logOut(){
        return document.querySelector("#logout")
    }

    profile(){
        return document.querySelector("#profile")
    }

    main(){
        return document.querySelector('#main-section')
    }

    baseUrl(){
        return `http://localhost:3000/`
    }

    sessionsUrl(){
        return `http://localhost:3000/sessions`
    } 

    userUrl(){
        return `http://localhost:3000/users/`
    }

    charUrl(){
        return `http://localhost:3000/characters/`
    }


}