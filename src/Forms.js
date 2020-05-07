
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
    form.addEventListener('submit', (e)=>handleLogin(e))
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

const renderCreateCharForm = async () =>  {
    const charImages = await fetchImgOpt()
    const charClasses = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Sorcerer", "Wizard"]
    const charRace = ["Asimaar", "Dragonborn", "Dwarf", "Elf", "Half-Orc", "Gnome", "Half-Elf", "Halfling", "Human", "Tiefling"]
    const stats  = {strength: 0,  dexterity: 0, constitution: 0, intelligence: 0, wisdom: 0, charisma: 0}
    const form = document.createElement('form')
    form.id = 'form'
    // Name Input
    const name = document.createElement('div')
    name.className = 'field'
    name.innerHTML =  `
                        <label class='label'>Name</label>
                        <div class='control'>
                            <input name='name' class='input' type='text' placeHolder='Character Name'>
                        </div>
    `
    // Character class Select
    const charClass = document.createElement('div')
    charClass.className ='field'
    const charLabel = document.createElement('label')
    charLabel.className = 'label'
    charLabel.innerText = 'Character Class'
    const charControl = document.createElement('div')
    charControl.className = 'control'
    const charSelect = document.createElement('div')
    charSelect.className = 'select'
    const charOptions =  document.createElement('select')
    charOptions.name = 'characterClass'
    charClasses.forEach(classOpt => {
        const option = document.createElement('option')
        option.innerText = classOpt
        option.value = classOpt
        charOptions.appendChild(option)
    })
    charSelect.appendChild(charOptions)
    charControl.appendChild(charSelect)
    charClass.appendChild(charLabel)
    charClass.appendChild(charControl)

    // Race Select
    const race = document.createElement('div')
    race.className ='field'
    const raceLabel = document.createElement('label')
    raceLabel.className = 'label'
    raceLabel.innerText = 'Character Class'
    const raceControl = document.createElement('div')
    raceControl.className = 'control'
    const raceSelect = document.createElement('div')
    raceSelect.className = 'select'
    const raceOptions=  document.createElement('select')
    raceOptions.name = 'race'
    charRace.forEach(raceOpt => {
        const option = document.createElement('option')
        option.innerText = raceOpt
        option.value  = raceOpt
        raceOptions.appendChild(option)
    })
    raceSelect.appendChild(raceOptions)
    raceControl.appendChild(raceSelect)
    race.appendChild(raceLabel)
    race.appendChild(raceControl)

    // Stat Randomizer
    const statButton = document.createElement('button')
    statButton.className = 'button is-danger'
    statButton.type = 'button'
    statButton.innerText  = "Roll for stats"
    statButton.addEventListener('click', ()=>generateStats(stats))

    const statTable = document.createElement('table')
    statTable.className = 'table'
    
    const statsRow = document.createElement('tr')
    statTable.appendChild(statsRow)

    Object.keys(stats).forEach(key => {
        const statName = document.createElement('td')
        statName.innerHTML = `<strong>${key}</strong>`
        const statValue  = document.createElement('td')
        statValue.id = key
        statValue.dataset.type = 'stat'
        statValue.innerText = stats[key]
        statsRow.appendChild(statName)
        statsRow.appendChild(statValue)
    })

    const bio = document.createElement('div')
    bio.innerHTML = `
        <div class='control'>
            <label class='label'>Bio:</label>
            <textarea  name='bio' class='textarea' placeholder='Character Bio' rows='5'></textarea>
        </div>
    `

    // Image Selection
    const imageControl = document.createElement('div')
    imageControl.className = 'control'
    imageControl.id = 'image-select'

    charImages.forEach(imgObj => {
        const label = document.createElement('label')
        label.className = 'radio'
        const radio = document.createElement('input')
        radio.type = 'radio'
        radio.name = 'charImage'
        radio.value = imgObj.id
        const img = document.createElement('img')
        img.src = imgObj.url
        img.className = 'char-icon'

        label.appendChild(radio)
        label.appendChild(img)
        imageControl.appendChild(label)
    })

    const submitBtn = document.createElement('input')
    submitBtn.type = 'submit'
    submitBtn.className = 'button is-success'
    submitBtn.innerText = 'Create Character!'


    form.appendChild(name)
    form.appendChild(charClass)
    form.appendChild(race)
    form.appendChild(statTable)
    form.appendChild(statButton)
    form.appendChild(bio)
    form.appendChild(imageControl)
    form.appendChild(submitBtn)
    form.addEventListener('submit',  (e) => handleCreateCharacter(e))


    globals.main().appendChild(form)
}

const randomStat = () => {
    return  Math.floor(Math.random()*20+1)
}

const generateStats = (stats) => {
    Object.keys(stats).forEach(key => {
        const stat = document.querySelector(`#${key}`)
        stat.innerText = randomStat()
    })
}

