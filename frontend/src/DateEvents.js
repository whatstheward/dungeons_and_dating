function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getRandomDate(DATE_EVENTS, USER, character){
    let num1 = getRandomInt(1, 30)
    let num2 = getRandomInt(1, 30)
    let num3 = getRandomInt(1, 30)
    buildRandomDate(num1, num2, num3, USER, character)
}
function buildRandomDate(num1, num2, num3, USER, character){
    clearMainContainer()
    clearHeroBanner()
    console.log('USER:', USER)
    console.log('character', character)
    let banner = document.querySelector('#heroDiv')
    let main = document.querySelector('#char-columns')
    let event1 = DATE_EVENTS[num1]
    let event2 = DATE_EVENTS[num2]
    let event3 = DATE_EVENTS[num3]
    const POINTS= []

    let cr1 = event1.challenge_rating

    let eventCard = document.createElement('div')
    eventCard.className = 'card'
    eventCard.id = "date-card"

    let cardHeader = document.createElement('header')
    cardHeader.id = "event-title"
    cardHeader.className = "card-header"

    let eventName = document.createElement('p')
    eventName.className = "card-header-title"
    eventName.innerText = event1.title

    let cardContent = document.createElement('div')
    cardContent.className = "card-content"

    let eventScenario = document.createElement('div')
    eventScenario.className = 'content'
    eventScenario.id = "event-scenario"
    eventScenario.innerText = event1.situation

    let eventRoll = document.createElement('p')
    eventRoll.innerText =  "Difficulty: " + cr1

    let imgDiv = document.createElement('div')
    let userAvatar = document.createElement('img')
    userAvatar.src = USER.img
    let charAvatar = document.createElement('img')
    charAvatar.src = character.img

    imgDiv.appendChild(userAvatar)
    imgDiv.appendChild(charAvatar)

    let roll = document.createElement('button')
    roll.id = "dice-roll"
    roll.dataset.id = cr1
    roll.innerText = "Roll a D20"
    roll.addEventListener('click', rollDice)

    eventScenario.appendChild(eventRoll)
    cardContent.appendChild(eventScenario)
    cardHeader.appendChild(eventName)
    eventCard.appendChild(cardHeader)
    eventCard.appendChild(imgDiv)
    eventCard.appendChild(cardContent)
    eventCard.appendChild(roll)

    main.appendChild(eventCard)

}

function rollDice(e){
    let button = document.querySelector('#dice-roll')
    button.remove()
    
    
    let cr = parseInt(e.target.dataset.id)
    let result = ()=> Math.floor((Math.random() * 20)+1)
    let roll = result()
    let contentDiv = document.querySelector('#event-scenario')
        contentDiv.innerHTML =`<strong>Your roll: </strong> ${roll}  vs <strong>CR: </strong>${cr}`

    let resultsDiv = document.createElement('div')
    contentDiv.appendChild(resultsDiv)
    
    let continueBtn = document.createElement('button')
    continueBtn.innerText = "Next Event "
    continueBtn.addEventListener('click', continueOn)
    
    if(cr<=roll){
        resultsDiv.innerText = "Ooh lala! This date is going well!"
        console.log('cr', cr)
        console.log('result', roll)
    }else{
        resultsDiv.innerText = "Oh wow..... this is awkward. :|"
        console.log('cr', cr)
        console.log('result', roll)
    }
    
}

function continueOn(e){
    console.log(e.target)
}