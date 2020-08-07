// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(resolve => {
        
        debugger
        const arr = Array.from(resolve.data.topics);
        arr.forEach(element => {
            createNewTab(element)
        });
    })
    .catch(reject => {
        debugger
        console.log(`You have an error`, reject);
    })

const topics = document.querySelector('.topics');

function createNewTab(item) {
    const tabDiv = document.createElement('div'); // create element
    tabDiv.classList.add('tab'); // add class
    tabDiv.textContent = `${item}`; // insert text
    topics.appendChild(tabDiv); //append to div.topics element

    return tabDiv;
}

// createNewTab({topics: 'topic here'});

// Stretch -  Use the tabs at the top of the page to filter articles by topic.


// function createNewTab(item) {
//     const tabDiv = document.createElement('div'); // create element
//     tabDiv.classList.add('tab'); // add class
//     tabDiv.textContent = `${item}`; // insert text
//     topics.appendChild(tabDiv); //append to div.topics element

//     return tabDiv;
// }

// createNewTab('All');


// const theTabs = document.querySelectorAll('.tab');
// console.log(theTabs);

// const htmlArr = Array.from(theTabs);

// htmlArr.forEach(function(item) {
//     debugger
//     item.addEventListener('click', (e) => {
//         item.classList.toggle('tab');
//         e.stopPropagation();
// })
// })

// console.log(htmlArr, 'htmlarr');