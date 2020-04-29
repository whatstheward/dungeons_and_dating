

const BASE_URL = `http://localhost:3000/`

const CHAR_URL = `http://localhost:3000/characters/`
const USER_CHAR_URL = `http://localhost:3000/user_characters/`



document.addEventListener('DOMContentLoaded', function(){
console.log('The DOM is loaded')
document.querySelector("#login").addEventListener('click', handleNavLogin)
document.querySelector("#sign-up").addEventListener('click', handleNavSignUp)
})

const handleNavLogin = () => {
    clearElement(document.querySelector('#main-section'))
    renderLoginForm()}

const handleNavSignUp= () =>{
    clearElement(document.querySelector('#main-section'))
    renderSignUpForm()}



const clearElement = (element) => {
    while(element.firstChild)
        element.removeChild(element.firstChild)
}
