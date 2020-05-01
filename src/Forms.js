const renderLoginForm = () => {
    const form = document.createElement('form')
    form.id = "form"
    const emailInput = document.createElement('input')
        emailInput.name = "email"
        emailInput.type = "email"
        emailInput.placeholder = "Enter Your Email..."
        emailInput.className = "input"
    const passwordInput = document.createElement('input')
        passwordInput.name = "password"
        passwordInput.type = "password"
        passwordInput.placeholder = "Enter Your Password..."
        passwordInput.className = "input"
    const submitButton = document.createElement('button')
        submitButton.type="submit"
        submitButton.innerText = "Log In"
        submitButton.className = "button is-success"
    form.appendChild(emailInput)
    form.appendChild(document.createElement('br'))
    form.appendChild(passwordInput)
    form.appendChild(document.createElement('br'))
    form.appendChild(submitButton)
    form.addEventListener('submit', ()=>handleLogin())
    globals.main().appendChild(form)
}

const renderSignUpForm = () => {
    const form = document.createElement('form')
    form.id = "form"
    const firstNameInput = document.createElement('input')
        firstNameInput.name = "firstName"
        firstNameInput.type = "text"
        firstNameInput.placeholder = "First Name"
        firstNameInput.className = "input"
    const lastNameInput = document.createElement('input')
        lastNameInput.name = "lastName"
        lastNameInput.type = "text"
        lastNameInput.placeholder = "Last Name"
        lastNameInput.className = "input"
    const emailInput = document.createElement('input')
        emailInput.name = "email"
        emailInput.type = "email"
        emailInput.placeholder = "Enter Your Email..."
        emailInput.className = "input"
    const confirmEmailInput = document.createElement('input')
        confirmEmailInput.name = "confirmEmail"
        confirmEmailInput.type = "confirmEmail"
        confirmEmailInput.placeholder = "Confirm Your Email..."
        confirmEmailInput.className = "input"
    const passwordInput = document.createElement('input')
        passwordInput.name = "password"
        passwordInput.type = "password"
        passwordInput.placeholder = "Enter Your Password..."
        passwordInput.className = "input"
    const confirmPasswordInput = document.createElement('input')
        confirmPasswordInput.name = "confirmPassword"
        confirmPasswordInput.type = "confirmPassword"
        confirmPasswordInput.placeholder = "Confirm Your Password..."
        confirmPasswordInput.className = "input"
    const submitButton = document.createElement('button')
        submitButton.type="submit"
        submitButton.innerText = "Submit"
        submitButton.className = "button is-success"
    form.appendChild(firstNameInput)
    form.appendChild(lastNameInput)
    form.appendChild(document.createElement('br'))
    form.appendChild(emailInput)
    form.appendChild(confirmEmailInput)
    form.appendChild(document.createElement('br'))
    form.appendChild(passwordInput)
    form.appendChild(confirmPasswordInput)
    form.appendChild(document.createElement('br'))
    form.appendChild(submitButton)
    form.addEventListener('submit', (e)=>handleSignUp(e))
    globals.main().appendChild(form)
}

