// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerContainer = document.querySelector('.header-container')

function Header() {
    // create elements
    const headDiv = document.createElement('div');
    const headSpan1 = document.createElement('span');
    const headSpan2 = document.createElement('span');
    const headH1 = document.createElement('h1');

    // add classes
    headDiv.classList.add('header');
    headSpan1.classList.add('date');
    headSpan2.classList.add('temp');

    // add text 
    headSpan1.textContent = 'MARCH 28, 2020';
    headH1.textContent = 'Lambda Times';
    headSpan2.textContent = '98°';

    // create hierarchy
    headDiv.appendChild(headSpan1);
    headDiv.appendChild(headH1);
    headDiv.appendChild(headSpan2);

    return headDiv;
}

headerContainer.appendChild(Header());