//BookStore has been moved to data.js 
// console.log(bookStore);

function formatPrice(price) {
  return '$' + Number.parseFloat(price).toFixed(2);
}

// Select an element using querySelector
const header = document.querySelector("#header2")
header.textContent = 'some new text'

// Select an element using getElementById
// const h = document.getElementById("header2")
// console.log(h)

// Can select multiple elements with querySelecterAll (and getElementsById)
// const h2s = document.querySelectorAll('h2')
// console.log(h2s)

// Create a new element
const newH2 = document.createElement('h2')
newH2.textContent = 'hello'
console.log(newH2)

// New element will not show up until it is appended to another element
const myDiv = document.querySelector('#my-div')
myDiv.appendChild(newH2)

const h1 = document.querySelector('#header1')
h1.remove()

// bookStore
// console.log(bookStore.length)

// Select the list
const list = document.querySelector('#book-list')

// loop through the bookStore's inventory
for (let i = 0; i < bookStore.inventory.length; i++) {
  const obj = bookStore.inventory[i]

  // create a new li element
  const newLi = document.createElement('li')
  newLi.classList.add('list-li')

  // be careful with innerHTML, it is suseptible to cross site-scripting attacks
  newLi.innerHTML = `
  <h3>${obj.title}</h3>
  <p>${obj.author}</p>
  <p>${obj.price}</p>
  <img src="${obj.imageUrl}" />
  <button>Delete</button>
  `

  // create a new h3 element
  // const h3 = document.createElement('h3')
  // h3.textContent = obj.title

  // create a new p element
  // const author = document.createElement('p')
  // author.textContent = obj.author

  // add the new h3 to the li
  // newLi.appendChild(h3)

  // add the new p to the li
  // newLi.appendChild(author)

  // add the new li to the list
  list.appendChild(newLi)
}


// create a function called renderBook(book)
// it will take a book object as an argument
// and create the html struture for rendering 
// that book and insert it into our webpage!

// function renderBook(book) {
// should create an li element that looks something like this:
  // <li class="list-li">
  //   <h3>Eloquent JavaScript : A Modern Introduction to Programming</h3>
  //   <p>Marjin Haverbeke</p>
  //   <p>$10.00</p>
  //   <img src="https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" alt="Eloquent JavaScript cover"/>
  //   <button>Delete</button>
  // </li>

  