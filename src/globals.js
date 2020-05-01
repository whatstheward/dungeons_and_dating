class Globals{
    
    setToken(data){
        localStorage.setItem('token', data.token)
        localStorage.setItem('slug', data.slug)
    }


    login(){
        const login = document.querySelector("#login")
        return login
    }

    signUp(){
        const signUp = document.querySelector("#sign-up")
        return signUp
    }

    logOut(){
        const logout = document.querySelector("#logout")
        return logout
    }

    profile(){
        const profile = document.querySelector("#profile")
        return profile
    }

    main(){
        const main = document.querySelector('#main-section')
        return main
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