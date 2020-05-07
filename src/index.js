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

const handleCreateCharacter = (e) => {
    e.preventDefault()
    const options = {stats:{}}
    options['name'] = e.target.querySelector(`[name="name"]`).value
    options['character_class'] = e.target.querySelector(`[name="characterClass"]`).value
    options['race'] = e.target.querySelector(`[name="race"]`).value
    e.target.querySelectorAll(`[data-type="stat"]`).forEach(node => options.stats[node.id] = node.innerText)
    options['bio'] = e.target.querySelector(`[name="bio"]`).value
    options['image_id'] = e.target.charImage.value
    fetch(globals.userUrl()+localStorage.getItem('slug') + '/characters',{
        method: 'POST',
        headers: {
            'auth-token': localStorage.getItem('token'),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({options})
    })
    clearElement(globals.main())
    renderHomePage()
}

const renderHomePage = () => {
    if(localStorage.getItem('token')){
        loadCharacters()
    }else{
        clearElement(globals.main())
        globals.main().innerHTML = '<h1 class="title is-1">Welcome to Dungeons & Dating!</h1>'
    }
}

const clearElement = (element) => {
    while(element.firstChild)
        element.removeChild(element.firstChild)
}

const closeModal = (e) => {
    if(e.target.className.includes('modal')){
        document.querySelector('.modal').remove()
    }
}

const renderNavBar = () => {
    if(localStorage.getItem('token')){
        globals.login().style.display = 'none'
        globals.logOut().style.display  = ''
        globals.signUp().style.display = 'none'
        globals.profile().style.display = ''
        globals.createChar().style.display=''
    }else{
        globals.login().style.display = ''
        globals.logOut().style.display  = 'none'
        globals.signUp().style.display = ''
        globals.profile().style.display = 'none'
        globals.createChar().style.display='none'
    }
}

const handleNavProfile = () => {
    clearElement(globals.main())
    fetchUser()
}

const handleNavCreateChar = () => {
    clearElement(globals.main())
    renderCreateCharForm()
}

const handleMainClick = (e) => {
    if(e.target.id == 'moreBtn'){
        fetchSpecificCharacter(e.target.dataset.id)
    }
}

globals.login().addEventListener('click', () =>handleNavLogin())
globals.signUp().addEventListener('click', () =>handleNavSignUp())
globals.logOut().addEventListener('click', () =>handleNavLogOut())
globals.profile().addEventListener('click', () => handleNavProfile())
globals.logo().addEventListener('click', () => renderHomePage())
globals.main().addEventListener('click', (e)=> handleMainClick(e))
globals.createChar().addEventListener('click', ()=> handleNavCreateChar())
if(localStorage.getItem('token')){
    loadCharacters()
    renderNavBar()
}
