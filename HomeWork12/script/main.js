// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper')
// put it into the body
document.body.appendChild(div)

const ul = document.createElement('ul');

// make an unordered list
const lis = ['one', 'two', 'three'].map(word => `<li>${word}</li>`).join("");

ul.innerHTML = lis;

div.appendChild(ul);


// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper

const img = document.createElement('img');


img.scr = 'https://picsum.photos/500';

img.width = 350;
img.height = 350;


img.classList.add('cute');


img.alt = 'Cute Puppy';


// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above


div.insertAdjacentElement('beforeend', img);



const newHTML = `
<div> 
     <p>Paragraph 1</p>
     <p>Paragraph 2</p>
</div>`;

div.insertAdjacentHTML('afterbegin', newHTML)


// add a class to the second paragraph called warning
// remove the first paragraph
const [firstParagraph, secondParagraph] = document.querySelectorAll('p');
secondParagraph.classList.add('warning');
firstParagraph.remove();


// have that function return html that looks like this:
function generatePlayerCard(name, age, height) {
  return `
  <div class="playerCard">
  <h2>${name} — AGE</h2>
  <p>They are ${height} HEIGHT and ${age} AGE years old. In Dog years this person would be ${name} AGEINDOGYEARS. That would be a tall dog!</p>

<button>Delete cards</button>
 </div> `;
}

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');

// make 4 player cards using generatePlayerCard
let cardsHTML = generatePlayerCard('lord', 10, 70);
cardsHTML += generatePlayerCard('sharik', 5, 80);
cardsHTML += generatePlayerCard('bairon', 9, 20);

cards.innerHTML = cardsHTML;



// select all the buttons!
div.insertAdjacentElement('beforebegin', cards);
const deleteButtons = document.querySelectorAll('button');



// make out delete function
function removeElement(event) {
  const button = event.currentTarget;
  button.closet('.playerCard')?.remove();
}



// loop over them and attach a listener
deleteButtons.forEach((buttons)=> 
buttons.addEventListener('click', removeElement),
);


