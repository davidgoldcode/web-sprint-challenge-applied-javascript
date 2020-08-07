// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(resolve => {
        const arr = resolve.data.articles;
        const subjects = Object.keys(arr);
        let full = subjects.map(function(name) {
            return arr[name];
        })
        console.log(full);
        full.forEach(function(item) {
            for (let i = 0; i < item.length; i++) {
                debugger
                createCard(item[i]);
            }
        })
    })
    .catch(reject => {
        debugger
        console.log(`You have an error`, reject);
    })

const cardsContainer = document.querySelector('.cards-container');

function createCard(object) {
    // create elements
    const cardDiv = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgDiv = document.createElement('div');
    const img = document.createElement('img');
    const authSpan = document.createElement('span');

    //add classes
    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgDiv.classList.add('img-container');

    //add attribute(s)
    img.setAttribute('img', `url of authors img`);

    //create hierarchy
    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgDiv);
    authorDiv.appendChild(authSpan);
    imgDiv.appendChild(img);

    //add text
    debugger
    headlineDiv.textContent = `${object.headline}`; 
    authSpan.textContent = `By: ${object.authorName}`; 

    // add event listener
    cardDiv.addEventListener('click', (e) => {
        console.log(`${object.headline}`);
    })

    // append to parent
    cardsContainer.appendChild(cardDiv);

    return cardDiv;
}