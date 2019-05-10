

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getRandomDate(DATE_EVENTS, USER, character){
    let num = getRandomInt(1, 30)
    let event = DATE_EVENTS[num]
    buildRandomDate(event, USER, character)
}
function buildRandomDate(event, USER, character){
    clearMainContainer()
    clearHeroBanner()
    postRelationship(USER, character)
    let banner = document.querySelector('#heroDiv')
    let main = document.querySelector('#char-columns')

    let cr1 = event.challenge_rating

    let eventCard = document.createElement('div')
    eventCard.className = 'card'
    eventCard.id = "date-card"

    let cardHeader = document.createElement('header')
    cardHeader.id = "event-title"
    cardHeader.className = "card-header"

    let eventName = document.createElement('p')
    eventName.className = "card-header-title"
    eventName.innerText = event.title

    let cardContent = document.createElement('div')
    cardContent.className = "card-content"

    let eventScenario = document.createElement('div')
    eventScenario.className = 'content'
    eventScenario.id = "event-scenario"
    eventScenario.innerText = event.situation

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
    roll.addEventListener('click', (e)=> rollDice(e, USER, character))

    eventScenario.appendChild(eventRoll)
    cardContent.appendChild(eventScenario)
    cardHeader.appendChild(eventName)
    eventCard.appendChild(cardHeader)
    eventCard.appendChild(imgDiv)
    eventCard.appendChild(cardContent)
    eventCard.appendChild(roll)

    main.appendChild(eventCard)

}

function rollDice(e, USER, character){
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
    continueBtn.className = "button is-primary"
    continueBtn.innerText = "Next Event "
    continueBtn.addEventListener('click', (e) => continueOn(e, USER, character))
    
    let exitBtn = document.createElement('button')
    exitBtn.className = "button is-danger"
    exitBtn.innerText = "Let's call it a night :/"
    exitBtn.addEventListener('click', backToMain)

    contentDiv.appendChild(exitBtn)
    contentDiv.appendChild(continueBtn)

   
    
    if(cr<=roll){
        resultsDiv.innerText = "Ooh lala! This date is going well!"
        fetchRelationship(USER, character, 5)
    }else{
        resultsDiv.innerText = "Oh wow..... this is awkward. :|"
        fetchRelationship(USER, character, -5)

    }


    
}

function continueOn(e, USER, character){
    getRandomDate(DATE_EVENTS, USER, character)
}

function backToMain(){
    clearMainContainer()
    fetchCharacters()
}

function postRelationship(USER, character){
    let user_id = USER.id
    let character_id = character.id
    fetch('http://localhost:3000/relationships', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            "relationship": {
                "user_character_id": user_id,
                "character_id": character_id,
                "progress": 0
            }
        })
    })
    .catch(function(e){console.log(e)})
}
function updateRelationship(relationship, points){
    let id = relationship.id
    let progress = relationship.progress
    progress += points

    fetch(`http://localhost:3000/relationships/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            "relationship": {
                "progress": progress
            }
        })
    })
    .then(res => res.json())
    .then(relationship => {
                            let contentDiv = document.querySelector('#event-scenario')
                            let percentage = document.createElement('h1')
                            percentage.className = "subtitle"
                            percentage.innerText = relationship.progress +"%"
                            contentDiv.appendChild(percentage)
                            let progressBar = document.createElement('progress')
                            progressBar.className = "progress is-danger"
                            progressBar.setAttribute('max', 100)
                            progressBar.innerText = relationship.progress
                            progressBar.value = relationship.progress
                            contentDiv.appendChild(progressBar)})
    .catch(function(e){console.log(e)})
}

function fetchRelationship(USER, character, points){
    fetch(BASE_URL + 'relationships')
    .then(res => res.json())
    .then(relationships => relationships.filter(relationship => relationship.character_id == character.id && relationship.user_character_id == USER.id))
    .then(relationship => updateRelationship(relationship[0], points))

}
