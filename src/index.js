const BASE_URL = `http://localhost:3000/`

const CHAR_URL = `http://localhost:3000/characters/`
const USER_CHAR_URL = `http://localhost:3000/user_characters/`



document.addEventListener('DOMContentLoaded', function(){
console.log('The DOM is loaded')
document.querySelector("#login").addEventListener('click', handleLogin)

})

function handleLogin(e){
    e.preventDefault()
    let username = e.target.parentElement.username.value
    fetchUsers(username)
}

function loadCharacterForm(){
    let hero = document.querySelector("body > section.hero")
    let h1 = document.createElement('h1')
    h1.className = "title is-1"
    h1.innerText ="Create a Character to begin your romantic adventure!"
    hero.appendChild(h1)
    renderCharacterForm()
}
function clearNavBar(){
    let bar = document.querySelector('#top-bar')
    while(bar.firstChild){
        bar.removeChild(bar.firstChild)
    }
}
function clearMainContainer(){
    let main = document.querySelector('#char-columns')
    while(main.firstChild)
        main.removeChild(main.firstChild)
}

function clearHeroBanner(){
    let hero = document.querySelector('body > section.hero')
    while(hero.firstChild)
        hero.removeChild(hero.firstChild)
}
