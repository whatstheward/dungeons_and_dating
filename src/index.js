const globals = new Globals()

const handleNavLogin = () => {
    clearElement(globals.main())
    renderLoginForm()
}

const handleNavSignUp= () =>{
    clearElement(globals.main())
    renderSignUpForm()
}

const loadCharacters = () =>{
    clearElement(globals.main())
    fetchCharacters()
}

const handleLogin = async (e) =>{
    e.preventDefault()
    let package = {email: e.target.email.value, password: e.target.password.value}
    let response =  await fetch(globals.sessionsUrl(), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(package)
    })
    let data = await response.json()
    if(data.errors){
        alert(data.errors[0])
        clearElement(globals.main())
        renderLoginForm()
    }else{
        globals.setToken(data)
        renderNavBar()
        loadCharacters()
    }
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
    let response = await fetch(globals.userUrl(),{
        method: 'POST',
        headers: {
            'Content-Type':  'application/json'
        },
        body:  JSON.stringify(package)
    })
    let data =  await response.json()
    globals.setToken(data)
    renderNavBar()
    loadCharacters()
}

const handleNavLogOut = () => {
    localStorage.clear()
    renderNavBar()
    clearElement(globals.main())
    
    globals.main().innerHTML = '<h1 class="title is-1">Welcome to Dungeons & Dating!</h1>'
}

const clearElement = (element) => {
    while(element.firstChild)
        element.removeChild(element.firstChild)
}

const renderNavBar = () => {
    if(localStorage.getItem('token')){
        globals.login().style.display = 'none'
        globals.logOut().style.display  = ''
        globals.signUp().style.display = 'none'
        globals.profile().style.display = ''
    }else{
        globals.login().style.display = ''
        globals.logOut().style.display  = 'none'
        globals.signUp().style.display = ''
        globals.profile().style.display = 'none'
    }
}

const handleNavProfile = () => {
    fetchUser()
}

globals.login().addEventListener('click', () =>handleNavLogin())
globals.signUp().addEventListener('click', () =>handleNavSignUp())
globals.logOut().addEventListener('click', () =>handleNavLogOut())
globals.profile().addEventListener('click', () => handleNavProfile())

if(localStorage.getItem('token')){
    loadCharacters()
    renderNavBar()
}
