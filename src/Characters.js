const renderCharacterCard = (char) => {
    let card = document.createElement('div')
    card.className = 'card'
    
    let cardImg = document.createElement('div')
    cardImg.className = 'card-image'

    let figure = document.createElement('figure')
    figure.className = 'image is-4by4'

    let img = document.createElement('img')
    img.src = char.img
    
    figure.appendChild(img)
    cardImg.appendChild(figure)

    let cardContent = document.createElement('div')
    cardContent.className = 'card-content'
    
    let media = document.createElement('div')
    media.className = 'media'

    let name = document.createElement('p')
    name.className = 'title is-4'
    name.innerText = char.name

    media.appendChild(name)
    cardContent.appendChild(media)

    let moreBtn = document.createElement('button')
    moreBtn.className = 'button is-danger'
    moreBtn.innerText = 'See Stats'
    moreBtn.id = 'moreBtn'
    moreBtn.dataset.id = char.id
    
    card.appendChild(cardImg)
    card.appendChild(cardContent)
    card.appendChild(moreBtn)
    globals.main().appendChild(card)
}

const renderCharacters = (characters) =>{
    characters.forEach(char => renderCharacterCard(char.attributes))
}

const renderCharacterSpecs = (data) =>  {
    let char =  data.data.attributes
    let stats =  data.data.attributes.stats

    console.log(char)
    const modal = document.createElement('div')
    modal.className = 'modal is-active'

    const modalBg = document.createElement('div')
    modalBg.className = 'modal-background'

    const modalContent = document.createElement('div')
    modalContent.className = 'modal-content'

    let card = document.createElement('div')
    card.id = 'selected-card'
    card.innerHTML  = ` <div class='card selected-card'>
                                <div class='card-image'>
                                    <figure class='image is-2by2'>
                                        <img src=${char.img}>
                                    </figure>
                                </div>
                                <div class='media-content'>
                                    <div class='centered'>
                                        <p class='title is-3'>
                                        ${char.name}
                                        </p>
                                        <p class='subtitle is-4'>
                                        ${char.race} ${char.characterClass}
                                        </p>
                                    </div>
                                <table class='table is-striped'>
                                <tr>
                                <td><strong>Str</strong></td>
                                <td>${stats.str}</td>
                                <td><strong>Dex</strong></td>
                                <td>${stats.dex}</td>
                                <td><strong>Con</strong></td>
                                <td>${stats.con}</td>
                                </tr>
                                <tr>
                                <td><strong>Int</strong></td>
                                <td>${stats.int}</td>
                                <td><strong>Wis</strong></td>
                                <td>${stats.wis}</td>
                                <td><strong>Cha</strong></td>
                                <td>${stats.cha}</td>
                                </tr>
                                </table>
                                <div class='content'>
                                    <label>
                                        <strong>Bio:</strong>
                                    </label>
                                    <p class='bio'>
                                        ${char.bio}
                                    </p>
                                </div>
                                <button id='date-button' class='button is-danger'> 
                                    Date!
                                </button>
                                </div>
                                </div>
                                `


    let race = document.createElement('p')
    race.className = 'title is-5'
    race.innerText = char.race

    let  charClass  = document.createElement('p')
    charClass.className = 'title is-5'
    charClass.innerText =   char.characterClass

    modal.addEventListener('click',  (e)=>  closeModal(e))

    modal.appendChild(modalBg)
    modalContent.appendChild(card)
    modal.appendChild(modalContent)
    globals.main().appendChild(modal)
}



