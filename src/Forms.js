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
    const form = document.createElement('form')
    const firstNameInput = document.createElement('input')
        firstNameInput.name = "firstName"
        firstNameInput.type = "text"
        firstNameInput.placeholder = "First Name"
    const lastNameInput = document.createElement('input')
        lastNameInput.name = "lastName"
        lastNameInput.type = "text"
        lastNameInput.placeholder = "Last Name"
    const emailInput = document.createElement('input')
        emailInput.name = "email"
        emailInput.type = "email"
        emailInput.placeholder = "Enter Your Email..."
    const confirmEmailInput = document.createElement('input')
        confirmEmailInput.name = "confirmEmail"
        confirmEmailInput.type = "confirmEmail"
        confirmEmailInput.placeholder = "Confirm Your Email..."
    const passwordInput = document.createElement('input')
        passwordInput.name = "password"
        passwordInput.type = "password"
        passwordInput.placeholder = "Enter Your Password..."
    const confirmPasswordInput = document.createElement('input')
        confirmPasswordInput.name = "confirmPassword"
        confirmPasswordInput.type = "confirmPassword"
        confirmPasswordInput.placeholder = "Confirm Your Password..."
    const submitButton = document.createElement('button')
        submitButton.type="submit"
        submitButton.innerText = "Submit"
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

