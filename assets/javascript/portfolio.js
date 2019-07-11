const container = document.getElementById("container-div")

display_portfolio()


function display_portfolio() {

    let header = document.createElement('h2');
    header.classList.add('mb-3');
    header.innerText = 'Portfolio'
    container.appendChild(header);

    let cardCount = 0;
    let cardDeck

    for (let i = 0; i < PROJECTS.length; i++) {

        
        //debugger;
        if (cardDeck) {
            //if cardCount is 0 or divisible by 3 create card deck
            if (cardCount === 0 || cardCount % 3 === 0) {
                //If a card deck already exists, append it to the container
                container.appendChild(cardDeck);

                cardDeck = undefined
                cardDeck = document.createElement('div');
            cardDeck.classList.add('card-deck');
            cardDeck.classList.add('mb-5');

            }

        } else {

            cardDeck = document.createElement('div');
            cardDeck.classList.add('card-deck');
            cardDeck.classList.add('mb-5');

        }


        let card = document.createElement('div');
        card.classList.add('card');

        let cardLink = document.createElement('a');
        cardLink.setAttribute('href',PROJECTS[i].url);
        cardLink.setAttribute('target','_demo');
        let img = document.createElement('img');
        img.classList.add('card-img-top');
        img.setAttribute('src',`assets/images/${PROJECTS[i].image}`);
        cardLink.appendChild(img)
        card.appendChild(cardLink);

        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');


        let cardHeader = document.createElement('h5');
        cardHeader.classList.add('card-title');
        cardHeader.innerText = PROJECTS[i].name;

        let cardP =  document.createElement('p');
        cardP.classList.add('card-text');
        cardP.innerText = PROJECTS[i].description;

        cardBody.appendChild(cardHeader);
        cardBody.appendChild(cardP);
        card.appendChild(cardBody);
        cardDeck.appendChild(card);

        cardCount++
    }

    container.appendChild(cardDeck)
}