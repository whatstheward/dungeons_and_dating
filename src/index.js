
const BASE_URL = `http://localhost:3000/`

const USER_URL = `http://localhost:3000/users`

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
        globals.logOut().style.display  = ''
        globals.signUp().style.display = 'none'
        globals.profile().style.display = ''
    loadCharacters()
}

const handleSignUp = async (e) => {
    e.preventDefault()
    let package = {first_name: e.target.firstName.value, last_name: e.target.lastName.value}
    if(e.target.email.value == e.target.confirmEmail.value){
        package.email = e.target.email.value
    }else{
        alert("Emails must match.")
    }
    if(e.target.password.value == e.target.confirmPassword.value){
        package.password  = e.target.password.value
    }else{
        alert("Passwords must match.")
    }
    let response = await fetch(USER_URL,{
        method: 'POST',
        headers: {
            'Content-Type':  'application/json'
        },
        body:  JSON.stringify(package)
    })
    let data =  await response.json()
    localStorage.setItem('token', data.token)
        globals.login().style.display = 'none'
        globals.logOut().style.display  = ''
        globals.signUp().style.display = 'none'
        globals.profile().style.display = ''
    loadCharacters()
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
    globals.logOut().style.display  = ''
    globals.signUp().style.display = 'none'
    globals.profile().style.display = ''
}
