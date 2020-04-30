
const BASE_URL = `http://localhost:3000/`

const CHAR_URL = `http://localhost:3000/characters/`

const globals = new Globals()

const handleNavLogin = () => {
    clearElement(document.querySelector('#main-section'))
    renderLoginForm()
}

const handleNavSignUp= () =>{
    clearElement(document.querySelector('#main-section'))
    renderSignUpForm()
}

const loadCharacters = () =>{
    const main = document.querySelector("#main-section")
    clearElement(main)
    fetchCharacters()
}

const handleLogin = async (e) =>{
    e.preventDefault()
    let package = {email: e.target.email.value, password: e.target.password.value}
    let response =  await fetch('http://localhost:3000/sessions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(package)
    })
    let data = await response.json()
    localStorage.setItem('token', data.token)
        globals.login().style.display = 'none'
        globals.logOut().style.display  = 'block'
        globals.signUp().style.display = 'none'
        globals.profile().style.display = 'block'
    loadCharacters()
}

const handleSignUp = async (e) => {
    e.preventDefault()
    let package = 
}

const clearElement = (element) => {
    while(element.firstChild)
        element.removeChild(element.firstChild)
}

globals.login().addEventListener('click', handleNavLogin)
globals.signUp().addEventListener('click', handleNavSignUp)

if(localStorage.getItem('token')){
    loadCharacters()
    globals.login().style.display = 'none'
    globals.logOut().style.display  = 'block'
    globals.signUp().style.display = 'none'
    globals.profile().style.display = 'block'
}
