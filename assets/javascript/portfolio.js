//Global Variables
const container = document.getElementById("container-div")

//Add Navigation Listeners
document.addEventListener('click', function (event) {

    // Do nothing if target doesn't have specified class
    if (!event.target.matches('.js_nav')) return;

    event.preventDefault();
    clear_container();

    switch (event.target.innerText.toLowerCase()){
        case "about":            
            display_about();
        break;
        case "contact":
            display_contact();           
        break;
        case "portfolio":
            display_portfolio();            
        break;
    }	    
 
}, false);

//Fire up the default page
display_portfolio();

function display_about(){
    
    //Create page header
    let header = document.createElement('h2');
    header.classList.add('mb-3');
    header.innerText = 'About'
    container.appendChild(header);

    //Create row
    let row =  document.createElement('div');
    row.classList.add('row');

    //Create 1st Col
    let col1  =  document.createElement('div');    
    col1.classList.add('col-md-3');
    col1.classList.add('text-center');

    //Add Image
    let img = document.createElement('img');
    img.classList.add('img-thumbnail');
    img.classList.add('mb-4');
    img.setAttribute('src','assets/images/personal/chris.jpg');
    img.setAttribute('id','imgChris')
    col1.appendChild(img);
    row.appendChild(col1);

    //Create 2nd Col
    let col2 =  document.createElement('div');  
    col2.classList.add('col-md-5');

    //Add paragraphs
    let p1 = document.createElement('p');
    p1.innerText = "I'm Chris Ross - I enjoy web development and I'm currently in a Coding Bootcamp at the University of North Carolina Charlotte to improve my skills. I like to create sites with a clean, uncluttered, and intuitive look. I look forward to strengthening and improving my skill set!"
    col2.appendChild(p1)
    let p2 = document.createElement('p');
    p2.innerText = "I am originally from Vermont and have lived and worked in several cities and states in New England. I recently moved to South Carolina near Charlotte, NC. I also enjoy traveling, and as a glutton for punishment, I attempt to play the violin."
    col2.appendChild(p2);
    row.appendChild(col2);
    
    //Create 3rd Col
    let col3 =  document.createElement('div');   
    col3.classList.add('col-md-3');

    //Add Contact card
    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('border-grey');
    card.classList.add('mb-5');

    let cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    cardHeader.innerText = "Connect";
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    //Github Button
    let gitBtn = document.createElement('a');
    gitBtn.classList.add('btn');
    gitBtn.classList.add('btn-info');
    gitBtn.classList.add('text-light');   
    gitBtn.classList.add('btn-block');
    gitBtn.setAttribute('href','https://github.com/vtchris');
    gitBtn.setAttribute('target','_blank');
    gitBtn.innerHTML = "<span class='fab fa-github mr-2'></span>Follow on Github!";
    cardBody.appendChild(gitBtn);

    //LinkedIn Button
    let linkBtn = document.createElement('a');
    linkBtn.classList.add('btn');
    linkBtn.classList.add('btn-info');
    linkBtn.classList.add('text-light');
    linkBtn.classList.add('btn-block');   
    linkBtn.setAttribute('href','https://www.linkedin.com/in/chrisross2357/');
    linkBtn.setAttribute('target','_blank');
    linkBtn.innerHTML = "<span class='fab fa-linkedin mr-2'></span>View LinkedIn profile!";
    cardBody.appendChild(linkBtn);

    //Twitter Button
    let twitterBtn = document.createElement('a');
    twitterBtn.classList.add('btn');
    twitterBtn.classList.add('btn-info');
    twitterBtn.classList.add('text-light');
    twitterBtn.classList.add('btn-block');
    twitterBtn.setAttribute('href','https://twitter.com/vtchris_2357');
    twitterBtn.setAttribute('target','_blank');
    twitterBtn.innerHTML = "<span class='fab fa-twitter mr-2'></span>Follow on Twitter!";
    cardBody.appendChild(twitterBtn);
        
    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    col3.appendChild(card);
    
    row.appendChild(col3);

    container.appendChild(row);

}
function display_contact(){
    
    let header = document.createElement('h2');
    header.classList.add('mb-3');
    header.innerText = 'Contact';
    container.appendChild(header);

    let form = document.createElement('form');
    form.setAttribute('action','https://formspree.io/vtchris.2357@gmail.com');
    form.setAttribute('method','POST');
    
    //Name Group
    let nameGroup = document.createElement('div');
    nameGroup.classList.add('form-group');

    let newLabel = document.createElement('label');
    newLabel.innerText = 'Name';
    let newTextbox = document.createElement('input');
    newTextbox.classList.add('form-control');
    newTextbox.setAttribute('name','name');
    newTextbox.setAttribute('placeholder','John Doe');

    nameGroup.appendChild(newLabel);
    nameGroup.appendChild(newTextbox);
    form.appendChild(nameGroup);

    //Email Group
    let emailGroup = document.createElement('div');
    emailGroup.classList.add('form-group');

    newLabel = document.createElement('label');
    newLabel.innerText = 'Email';
    newTextbox = document.createElement('input');
    newTextbox.classList.add('form-control');
    newTextbox.setAttribute('name','email');
    newTextbox.setAttribute('placeholder','name@gmail.com');

    emailGroup.appendChild(newLabel);
    emailGroup.appendChild(newTextbox);
    form.appendChild(emailGroup);

    //Message Group
    let messageGroup = document.createElement('div');
    messageGroup.classList.add('form-group');

    newLabel = document.createElement('label');
    newLabel.innerText = 'Message';
    let newTextarea = document.createElement('textarea');
    newTextarea.classList.add('form-control');
    newTextarea.setAttribute('name','message-layout-port');
    newTextarea.setAttribute('placeholder','Message...');

    let newSubmit = document.createElement('button');
    newSubmit.classList.add('btn');
    newSubmit.classList.add('btn-primary');
    newSubmit.classList.add('mt-3');
    newSubmit.innerText = "Submit";

    messageGroup.appendChild(newLabel);
    messageGroup.appendChild(newTextarea);
    messageGroup.appendChild(newSubmit);
    form.appendChild(messageGroup);

    container.appendChild(form);

    document.getElementsByName('name')[0].focus();
}
function display_portfolio() {

    let header = document.createElement('h2');
    header.classList.add('mb-3');
    header.innerText = 'Portfolio'
    container.appendChild(header);

    let cardCount = 0;
    let cardDeck

    for (let i = 0; i < PROJECTS.length; i++) {
        
        if (cardDeck) {
            //if cardCount is 0 or divisible by 4 create card deck
            if (cardCount === 0 || cardCount % 4 === 0) {
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

        //Create Repository card
        let card = document.createElement('div');
        card.classList.add('card');

        //Link image to website / github
        let cardLink = document.createElement('a');
        cardLink.setAttribute('href', PROJECTS[i].url);
        cardLink.setAttribute('target', '_demo');
        let img = document.createElement('img');
        img.classList.add('card-img-top');
        img.setAttribute('src', `assets/images/${PROJECTS[i].image}`);
        cardLink.appendChild(img)
        card.appendChild(cardLink);

        //Add card body with description
        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        let cardHeader = document.createElement('h5');
        cardHeader.classList.add('card-title');
        cardHeader.innerText = PROJECTS[i].name;
        let cardP = document.createElement('p');
        cardP.classList.add('card-text');
        cardP.innerText = PROJECTS[i].description;

        //Add footer with github repo link
        let cardFooter = document.createElement('footer');
        cardFooter.classList.add('card-footer');
        cardFooter.classList.add('text-center');

        let gitButton = document.createElement('a');
        gitButton.classList.add('btn');
        gitButton.classList.add('btn-secondary');
        gitButton.setAttribute('href',PROJECTS[i].url_gitrepo);
        gitButton.setAttribute('target','repo');
        gitButton.innerHTML = "<span class='fab fa-github mr-1'></span>View Git Repo!"
        cardFooter.appendChild(gitButton);

        cardBody.appendChild(cardHeader);
        cardBody.appendChild(cardP);
        
        card.appendChild(cardBody);
        card.appendChild(cardFooter);
        cardDeck.appendChild(card);

        cardCount++
        
    }

    container.appendChild(cardDeck)
}
function clear_container(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}