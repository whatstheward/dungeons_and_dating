const renderLoginForm = () => {
    const main = document.querySelector('#main-section')
    const form = document.createElement('form')
    const emailInput = document.createElement('input')
        emailInput.name = "email"
        emailInput.type = "email"
        emailInput.placeholder = "Enter Your Email..."
    const passwordInput = document.createElement('input')
        passwordInput.name = "password"
        passwordInput.type = "password"
        passwordInput.placeholder = "Enter Your Password..."
    const submitButton = document.createElement('button')
        submitButton.type="submit"
        submitButton.innerText = "Log In"
    form.appendChild(emailInput)
    form.appendChild(document.createElement('br'))
    form.appendChild(passwordInput)
    form.appendChild(document.createElement('br'))
    form.appendChild(submitButton)
    form.addEventListener('submit', handleLogin)
    main.appendChild(form)
}

const renderSignUpForm = () => {
    const main = document.querySelector('#main-section')
    const form = document.createElement('form')
    const nameInput = document.createElement('input')
        nameInput.name = "name"
        nameInput.type = "text"
        nameInput.placeholder = "Name"
    const emailInput = document.createElement('input')
        emailInput.name = "email"
        emailInput.type = "email"
        emailInput.placeholder = "Enter Your Email..."
    const confirmEmailInput = document.createElement('input')
        confirmEmailInput.name = "confirm_email"
        confirmEmailInput.type = "confirm_email"
        confirmEmailInput.placeholder = "Confirm Your Email..."
    const passwordInput = document.createElement('input')
        passwordInput.name = "password"
        passwordInput.type = "password"
        passwordInput.placeholder = "Enter Your Password..."
    const confirmPasswordInput = document.createElement('input')
        confirmPasswordInput.name = "confirm_password"
        confirmPasswordInput.type = "confirm_password"
        confirmPasswordInput.placeholder = "Confirm Your Password..."
    const submitButton = document.createElement('button')
        submitButton.type="submit"
        submitButton.innerText = "Submit"
    form.appendChild(nameInput)
    form.appendChild(document.createElement('br'))
    form.appendChild(emailInput)
    form.appendChild(confirmEmailInput)
    form.appendChild(document.createElement('br'))
    form.appendChild(passwordInput)
    form.appendChild(confirmPasswordInput)
    form.appendChild(document.createElement('br'))
    form.appendChild(submitButton)
    form.addEventListener('submit', (e)=>{ e.preventDefault() 
        console.log(e)})
    main.appendChild(form)
}

const handleLogin = (e) => {
    e.preventDefault()
    let package = {email: e.target.email.value, password: e.target.password.value}
    fetch('http://localhost:3000/sessions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(package)
    })
    .then(res => res.json())
    .then(data => localStorage.setItem('token', data.token))
}